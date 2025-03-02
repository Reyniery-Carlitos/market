"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/common"
import Icons from "@assets/icons/Icons";
import { signUpSchema } from "../schemas/sign-up";
import { users } from "@/data/users";
import { useUiStore } from "@/store/ui";

type SignUpSchemaType = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const { toggleNotification } = useUiStore((state) => state)
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  const onSubmit = (data: SignUpSchemaType) => {
    const user = users.find((user) => data.email === user.email)

    if (user) {
      return toggleNotification(true, "Usuario ya existe", "error")
    }

    users.push({
      id: users.length + 1,
      ...data
    })

    router.push("/auth")
  }

  return (
    <section className="flex justify-center items-center min-w-full min-h-screen bg-repeat">
      <form className="flex flex-col gap-6 p-5 rounded-lg w-3/12 shadow-sm bg-bg-tertiary" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center" onClick={() => router.push("/")}>
          <Icons size={24} name="logo" />
        </div>

        <InputContainer>
          <input type="text" placeholder="Nombre Completo" className="h-12 px-5 bg-bg-secondary rounded-lg text-sm outline-none" {...register("name")} />
          <span className="text-xs text-text-default font-semibold"> {errors.name?.message} </span>
        </InputContainer>

        <InputContainer>
          <input type="text" placeholder="Correo electrónico" className="h-12 px-5 bg-bg-secondary rounded-lg text-sm outline-none" {...register("email")} />
          <span className="text-xs text-text-default font-semibold"> {errors.email?.message} </span>
        </InputContainer>

        <InputContainer>
          <input type="password" placeholder="Contraseña" className="px-5 h-12 bg-bg-secondary rounded-lg outline-none text-sm" {...register("password")} />
          <span className="text-xs text-text-default font-semibold"> {errors.password?.message} </span>
        </InputContainer>

        <InputContainer>
          <input type="password" placeholder="Confirmar contraseña" className="px-5 h-12 bg-bg-secondary rounded-lg outline-none text-sm" {...register("confirmPassword")} />
          <span className="text-xs text-text-default font-semibold"> {errors.confirmPassword?.message} </span>
        </InputContainer>

        <Button text="Registrarse" type="primary" className="h-12" isSubmitButton={true} />

        <span className="text-xs"> ¿Ya tienes una cuenta? <Link className="font-semibold" href="/auth"> Ingresa ahora </Link> </span>
      </form>
    </section>
  )
}

const InputContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  )
}
