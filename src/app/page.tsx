import { ArrowRight, Mail, Radio, User } from "lucide-react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { InputField, InputRoot, InputIcon } from "@/components/input";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md-py-0">
      <div className="min-h-dvh flex flex-col justify-center gap-16">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="logo-devstage" width={108.5} height={30} />
          <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
            <span className="text-blue">CodeCraf</span> Summit 2025
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-stretch">
          <div className="bg-gray-700 border border-gray-600 p-8 rounded-2xl flex-1 space-y-6">
            <div className="flex items-center justify-between ">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Sobre o evento
              </h2>
              <span className="flex items-center text-purple font-semibold text-xs uppercase gap-2">
                <Radio className="size-5 animate-pulse" />
                Ao vivo
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </div>
          <form
            className="bg-gray-700 border border-gray-600 p-8 rounded-2xl space-y-6 w-full md:max-w-[440px]"
            action=""
          >
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Inscrição
            </h2>
            <div className="flex flex-col gap-3">
              <InputRoot>
                <InputIcon>
                  <User className="size-5" />
                </InputIcon>
                <InputField
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                />
              </InputRoot>
              <InputRoot>
                <InputIcon>
                  <Mail className="size-5" />
                </InputIcon>
                <InputField type="email" name="email" placeholder="E-mail" />
              </InputRoot>
            </div>
            <Button>
              Confirmar
              <ArrowRight />
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
