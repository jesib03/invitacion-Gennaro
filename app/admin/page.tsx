import { supabase } from "@/lib/supabase";

export default async function AdminPage() {
  const { data, error } = await supabase
    .from("confirmaciones")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="p-10 text-red-500">{error.message}</div>;
  }

  const confirmados = data.filter((item) => item.asistencia);

  const adultosUnicos = new Set(
    confirmados.map((item) => item.adulto.trim().toLowerCase()),
  );

  const ninosUnicos = new Set(
    confirmados.map((item) => item.nino.trim().toLowerCase()),
  );

  const totalAdultos = adultosUnicos.size;

  const totalNinos = ninosUnicos.size;

  const totalPersonas = totalAdultos + totalNinos;

  const noAsisten = data.filter((item) => !item.asistencia);

  return (
    <main
      className="
    min-h-screen
    flex
    items-start
    pt-20
    pb-10
    justify-center
    px-4
    py-10
    overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-500 text-white p-6 rounded-3xl shadow-xl">
          <h2 className="text-xl font-bold">Confirmados</h2>

          <p className="text-5xl font-black">{totalPersonas}</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-3xl shadow-xl">
          <h2 className="text-xl font-bold">No asisten</h2>

          <p className="text-5xl font-black">{noAsisten.length}</p>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-3xl shadow-xl">
          <h2 className="text-xl font-bold">Niños</h2>

          <p className="text-5xl font-black">{totalNinos}</p>
        </div>
      </div>

      <h1 className="text-4xl font-black mb-8">🎉 Confirmaciones</h1>

      <div className="overflow-auto rounded-3xl shadow-xl">
        <table className="w-full bg-white">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="p-4 text-left">Adulto</th>

              <th className="p-4 text-left">Niño</th>

              <th className="p-4 text-left">Asistencia</th>

              <th className="p-4 text-left">Fecha</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4">{item.adulto}</td>

                <td className="p-4">{item.nino}</td>

                <td className="p-4">{item.asistencia ? "✅ Sí" : "❌ No"}</td>

                <td className="p-4">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
