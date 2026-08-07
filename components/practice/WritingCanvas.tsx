"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Eraser, Eye, EyeOff } from "lucide-react";
import { recordWritingAttempt } from "@/lib/progress";
import type { PracticePool } from "@/types/learning";

const CANVAS_SIZE = 320;
const STROKE_WIDTH = 10;

/**
 * Freehand tracing practice.
 *
 * This records nothing about the strokes and does not check them. There is no
 * stroke-order data authored for this site and no scoring: the canvas exists so
 * a learner can trace the guide character by hand, which is how the shapes
 * actually stick. Anything resembling accuracy feedback would be a lie.
 */
export function WritingCanvas({ pools }: { pools: PracticePool[] }) {
  const [pool, setPool] = useState<PracticePool | null>(null);
  const [index, setIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);
  const [hasDrawn, setHasDrawn] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const countedRef = useRef(false);

  const character = pool?.prompts[index];

  const getContext = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d");
  }, []);

  // Size the backing store to the device pixel ratio so strokes are not blurry.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ratio = window.devicePixelRatio || 1;
    canvas.width = CANVAS_SIZE * ratio;
    canvas.height = CANVAS_SIZE * ratio;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.scale(ratio, ratio);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = STROKE_WIDTH;
    context.strokeStyle = "#111111";
  }, [pool]);

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    const context = getContext();
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  }, [getContext]);

  const positionOf = (canvas: HTMLCanvasElement, event: React.PointerEvent) => {
    const bounds = canvas.getBoundingClientRect();
    // The canvas is styled to a fixed CSS size, but scale defensively in case
    // a future layout change makes it fluid.
    return {
      x: ((event.clientX - bounds.left) / bounds.width) * CANVAS_SIZE,
      y: ((event.clientY - bounds.top) / bounds.height) * CANVAS_SIZE,
    };
  };

  const onPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = getContext();
    if (!canvas || !context) return;

    // Keeps strokes tracking the pointer even if it leaves the canvas.
    canvas.setPointerCapture(event.pointerId);
    drawingRef.current = true;

    const { x, y } = positionOf(canvas, event);
    context.beginPath();
    context.moveTo(x, y);

    if (!hasDrawn) setHasDrawn(true);

    // One attempt per character, however many strokes it takes.
    if (!countedRef.current && pool) {
      countedRef.current = true;
      recordWritingAttempt(pool.id);
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = getContext();
    if (!drawingRef.current || !canvas || !context) return;

    const { x, y } = positionOf(canvas, event);
    context.lineTo(x, y);
    context.stroke();
  };

  const onPointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas?.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }
    drawingRef.current = false;
  };

  const goTo = useCallback(
    (nextIndex: number) => {
      if (!pool) return;
      const total = pool.prompts.length;
      setIndex(((nextIndex % total) + total) % total);
      countedRef.current = false;
      clear();
    },
    [pool, clear],
  );

  if (!pool) {
    return (
      <div className="practice-panel">
        <h2>Choose what to write</h2>
        <p className="practice-intro">
          Trace the guide character with a mouse, finger, or stylus. Nothing is
          scored or saved — this is for building muscle memory.
        </p>
        <div className="pool-grid">
          {pools.map((option) => (
            <button
              className="pool-button"
              key={option.id}
              onClick={() => {
                setPool(option);
                setIndex(0);
                countedRef.current = false;
              }}
              type="button"
            >
              <strong>{option.label}</strong>
              <span>{option.prompts.length} characters</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!character) return null;

  return (
    <div className="practice-panel">
      <div className="practice-progress">
        <span>
          {pool.label} · {index + 1} of {pool.prompts.length}
        </span>
        <span>{character.answer}</span>
      </div>

      <div className="writing-stage">
        {showGuide && (
          <span aria-hidden="true" className="writing-guide" lang="ja">
            {character.character}
          </span>
        )}
        <canvas
          aria-label={`Drawing area for the character ${character.character}`}
          className="writing-canvas"
          height={CANVAS_SIZE}
          onPointerCancel={onPointerUp}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          ref={canvasRef}
          role="img"
          width={CANVAS_SIZE}
        />
      </div>

      <div className="writing-controls">
        <button
          className="writing-button"
          disabled={!hasDrawn}
          onClick={clear}
          type="button"
        >
          <Eraser aria-hidden="true" size={17} />
          Clear
        </button>
        <button
          aria-pressed={showGuide}
          className="writing-button"
          onClick={() => setShowGuide((current) => !current)}
          type="button"
        >
          {showGuide ? (
            <EyeOff aria-hidden="true" size={17} />
          ) : (
            <Eye aria-hidden="true" size={17} />
          )}
          {showGuide ? "Hide guide" : "Show guide"}
        </button>
      </div>

      <div className="page-actions">
        <button
          className="button-link button-link--secondary"
          onClick={() => goTo(index - 1)}
          type="button"
        >
          <ArrowLeft aria-hidden="true" size={18} />
          Previous
        </button>
        <button
          className="button-link button-link--primary"
          onClick={() => goTo(index + 1)}
          type="button"
        >
          Next character
          <ArrowRight aria-hidden="true" size={18} />
        </button>
        <button
          className="button-link button-link--secondary"
          onClick={() => {
            setPool(null);
            clear();
          }}
          type="button"
        >
          Change set
        </button>
      </div>
    </div>
  );
}
