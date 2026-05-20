"use client";

import { useRef, useState } from "react";

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="flex justify-center">
      <audio ref={audioRef} src="/music/BearVillage.mp3" loop />

      <button
        onClick={toggleMusic}
        className="
  bg-blue-400
  hover:bg-green-400
  hover:scale-105
  active:scale-95
  transition-all
  duration-300
  text-white
  font-bold
  py-3
  px-5
  sm:px-8
  text-sm
  sm:text-lg
  rounded-2xl
  shadow-[0_8px_0_rgb(21,128,61)]
"
      >
        {playing ? "⏸️ Pausar música" : "🎵 Activar música"}
      </button>
    </div>
  );
}