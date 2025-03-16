"use client"

import { Link } from "next-view-transitions";
import { z } from "zod";
import { useTransitionRouter } from "next-view-transitions";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/common"
import Icons from "@assets/icons/Icons";
import { loginSchema } from "@/features/auth/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { users } from "@/data/users";
import { useAuthStore } from "@/store/auth";
import { useUiStore } from "@/store/ui";

type LoginSchemaType = z.infer<typeof loginSchema>

export default function LoginForm() {
  const router = useTransitionRouter()
  const { login, setUserAuthenticated } = useAuthStore((state) => state)
  const toggleNotification = useUiStore((state) => state.toggleNotification)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })


  const onSubmit = (data: LoginSchemaType) => {
    const user = users.find((user) => data.email === user.email && data.password === user.password)

    if (user) {
      login()
      setUserAuthenticated(user.id)

      router.push("/productos")
    } else {
      toggleNotification(true, "Usuario o contraseña incorrectos", "error")
    }

  }

  return (
    <section className="flex justify-center items-center min-w-full min-h-screen">
      <form className="flex flex-col gap-6 p-5 rounded-lg w-3/12 shadow-sm bg-bg-tertiary" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center" onClick={() => router.push("/")}>
          <Icons size={24} name="logo" />
        </div>

        <InputContainer>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <input type="text" placeholder="Correo electrónico" className="h-12 px-5 bg-bg-secondary rounded-lg text-sm outline-none" {...field} />
            )}
          />
          <span className="text-xs text-text-default font-semibold"> {errors.email?.message} </span>
        </InputContainer>

        <InputContainer>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <input type="password" placeholder="Password" className="px-5 h-12 bg-bg-secondary rounded-lg outline-none text-sm" {...field} />
            )}
          />
          <span className="text-xs text-text-default font-semibold"> {errors.password?.message} </span>
        </InputContainer>

        <span className="text-xs text-text-secondary"> <Link className="font-semibold" href="/auth/recuperar-contraseña"> ¿Olvido su contraseña? </Link> </span>

        <Button text="Ingresar" type="primary" className="h-12" isSubmitButton={true} />

        <span className="text-xs"> ¿No tienes una cuenta? <Link className="font-semibold" href="/auth/registrarse"> Registrate ahora </Link> </span>
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

