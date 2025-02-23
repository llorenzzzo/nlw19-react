"use client";

import { Button } from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const subsctiptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
});

type SubsctiptionSchema = z.infer<typeof subsctiptionSchema>;

export function SubscriptionForm() {
  function onSubscribe(data: SubsctiptionSchema) {
    console.log(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubsctiptionSchema>({
    resolver: zodResolver(subsctiptionSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 p-8 rounded-2xl space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot error={!!errors?.name}>
            <InputIcon>
              <User className="size-5" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger font-semibold text-xs">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <InputRoot error={!!errors?.email}>
            <InputIcon>
              <Mail className="size-5" />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
          </InputRoot>
          {errors?.email && (
            <p className="text-danger font-semibold text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <Button>
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
