"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3, CalendarDays } from "lucide-react";
import { useState } from "react";
import RSVPForm from "./RSVPForm";
import MusicButton from "./MusicButton";
import { Fredoka, Luckiest_Guy } from "next/font/google";
import ConfettiEffect from "./ConfettiEffect";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

export default function InvitationCard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <ConfettiEffect />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
  bg-white/10
  backdrop-blur-sm
  border
  border-white/30
  shadow-2xl
  rounded-[32px]
  max-w-[340px]
  sm:max-w-[420px]
  w-full
  p-4
  sm:p-6
  text-center
  space-y-4
"
    >
      <h1
        className={`
    ${luckiestGuy.className}
        text-3xl
        sm:text-4xl
        md:text-7xl
        leading-tight
        font-extrabold
        text-yellow-400
        drop-shadow-lg
        transition-all
        duration-300
        hover:text-amber-700
        hover:scale-110
        cursor-default
      `}
      >
        GENNARO TE INVITA A SU CUMPLE DE 7 AÑOS
      </h1>

      <p
        className="text-base
    sm:text-lg
    text-white
    font-semibold
    drop-shadow-md
      hover:text-black
        hover:scale-110"
      >
        ¡Viviremos una aventura increíble!
      </p>

      <div
        className={
          fredoka.className +
          "bg-gradient-to-br from-amber-100/90 to-yellow-50/80 border-2 border-amber-300/60 shadow-xl backdrop-blur-sm p-4 rounded-3xl space-y-4 max-w-[300px] mx-auto"
        }
      >
        <div className="flex items-center gap-2">
          <CalendarDays className="text-orange-500" />
          <p>
            <strong>Fecha:</strong> 13 de Julio
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 className="text-blue-500" />
          <p>
            <strong>Hora:</strong> 16:00 hs
          </p>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="text-red-500" />
          <p>
            <strong>Lugar:</strong> Play Center Maipú
          </p>
        </div>
      </div>

      <MusicButton />

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="
        w-full
        max-w-[320px]
            bg-green-500
            hover:bg-blue-400
            hover:scale-105
            active:scale-95
            transition-all
            duration-300
            text-white
            font-bold
            py-4
            px-6
            rounded-2xl
            shadow-lg
            border-b-4
            border-green-700
        "
        >
          🚀 Confirmar asistencia
        </button>
      ) : (
        <RSVPForm />
      )}
    </motion.div>
    </>
  );
}
