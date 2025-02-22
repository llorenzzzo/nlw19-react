import { Button } from "@/components/button";
import { IconButton } from "@/components/iconButton";
import { Input } from "@/components/input";
import { Copy, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-4xl font-semibold font-heading">
          <span className="text-blue">CodeCraft</span> Summit 2025
        </h1>
        <Button>
          Enviar
          <ArrowRight />
        </Button>
        <IconButton>
          <Copy />
        </IconButton>

        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          error
        />
      </div>
    </main>
  );
}
