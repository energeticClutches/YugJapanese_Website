"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { AudioAsset } from "@/types/learning";

/**
 * Plays a pronunciation clip.
 *
 * Nothing currently renders this — `audioManifest` is empty, so every character
 * falls back to written guidance and this ships no client JavaScript today. It
 * is written to fail quietly: if a file is missing or the format is
 * unsupported, the control reports that rather than throwing.
 */
export function AudioButton({ asset }: { asset: AudioAsset }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <p className="audio-pending">
        <VolumeX aria-hidden="true" size={16} />
        Audio could not be played
      </p>
    );
  }

  return (
    <>
      <button
        className="audio-button"
        onClick={() => {
          // play() rejects if the element cannot decode or autoplay is blocked.
          audioRef.current?.play().catch(() => setFailed(true));
        }}
        type="button"
      >
        <Volume2 aria-hidden="true" size={16} />
        {asset.label}
      </button>
      <audio onError={() => setFailed(true)} preload="none" ref={audioRef} src={asset.src} />
    </>
  );
}
