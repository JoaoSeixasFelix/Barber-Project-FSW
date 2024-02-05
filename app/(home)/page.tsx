import Image from "next/image";
import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";

export default async function Home() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE',' dd 'de' MMMM", {
    locale: ptBR,
  });
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="capitalize text-sm">{formattedDate}</p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div> 
      <div className="mt-6">
        <h2 className="text-sm mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>
      </div>
    </div>
  );
}
