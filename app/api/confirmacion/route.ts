import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();
  
  const { adulto, nino, asistencia } = body;

  const { data: existing } = await supabase
  .from("confirmaciones")
  .select("*")
  .match({
  adulto,
  nino,
})
  .maybeSingle();

if (existing) {
  return NextResponse.json(
    {
      error:
        "Ya existe una confirmación con ese nombre 😄",
    },
    { status: 400 }
  );
}

  const { error } = await supabase
    .from("confirmaciones")
    .insert([
      {
        adulto,
        nino,
        asistencia,
      },
    ]);

  if (error) {
    console.log(error);

  return NextResponse.json(
    {
      error: error.message,
      details: error,
    },
    { status: 500 }
  );
  }

  return NextResponse.json({
    success: true,
  });
}