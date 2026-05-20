import InvitationCard from "@/components/InvitationCard";

export default function InvitacionPage() {
  return (
    <main
  className="
   min-h-screen
    flex
    items-start
    justify-center
    pt-90
    pb-10
    px-4
    overflow-hidden
  "
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <InvitationCard />
    </main>
  );
}