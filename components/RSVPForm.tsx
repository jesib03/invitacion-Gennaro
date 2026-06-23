"use client";

import { useState, type FormEvent } from "react";

export default function RSVPForm() {
  const [form, setForm] = useState({
    nombreAdulto: "",
    nombreNino: "",
    asistencia: true,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/confirmacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adulto: form.nombreAdulto,
          nino: form.nombreNino,
          asistencia: form.asistencia,
        }),
      });

      if (!response.ok) {
        const data = await response.json();

console.log(data);

throw new Error(data.error || "Error al enviar");
      }

      setSuccess(true);

      setForm({
        nombreAdulto: "",
        nombreNino: "",
        asistencia: true,
      });

    } catch (error) {
      console.error(error);
      alert("Ocurrió un error 😢");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-black text-green-500">
          🎉 ¡Gracias!
        </h2>

        <p className="text-xl text-white">
          Tu asistencia fue confirmada
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      <p className="text-white text-sm text-center">
        Si el niño asistirá sin un adulto acompañante,
        puedes completar solamente el nombre del niño.
      </p>
      <input
        type="text"
        placeholder="Nombre y apellido del adulto"
        value={form.nombreAdulto}
        onChange={(e) =>
          setForm({
            ...form,
            nombreAdulto: e.target.value,
          })
        }
        className="
          p-4
          rounded-2xl
          bg-white/80
          text-black
          outline-none
        "
      />

      <input
        type="text"
        placeholder="Nombre y apellido del niño"
        value={form.nombreNino}
        onChange={(e) =>
          setForm({
            ...form,
            nombreNino: e.target.value,
          })
        }
        className="
          p-4
          rounded-2xl
          bg-white/80
          text-black
          outline-none
        "
        required
      />

      <select
        value={String(form.asistencia)}
        onChange={(e) =>
          setForm({
            ...form,
            asistencia: e.target.value === "true",
          })
        }
        className="
          p-4
          rounded-2xl
          bg-white/80
          text-black
          outline-none
        "
      >
        <option value="true">Sí asistiremos 🎉</option>
        <option value="false">No podremos asistir 😢</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="
          bg-green-500
          hover:bg-green-400
          transition-all
          duration-300
          text-white
          font-black
          text-xl
          py-4
          rounded-2xl
          shadow-xl
          disabled:opacity-50
        "
      >
        {loading
          ? "Enviando..."
          : "🚀 Confirmar asistencia"}
      </button>
    </form>
  );
}