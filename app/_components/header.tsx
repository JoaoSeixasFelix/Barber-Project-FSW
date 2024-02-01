import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-8 flex flex-row justify-between">
        <Image
          src="/logo.jpg"
          height={22}
          width={50}
          alt="Booking BarberShop"
        />
        <Button variant={"outline"} size={"icon"} className="h-6 w-6">
          <MenuIcon size={18}/>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
