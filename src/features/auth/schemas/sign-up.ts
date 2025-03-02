import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("El formato de email es incorrecto").min(1, "El email es requerido"),
  password: z.string().min(8, "La contraseña es requerida y debe contener al menos 8 caracteres"),
  confirmPassword: z.string().min(8, "La contraseña es requerida y debe contener al menos 8 caracteres")
}).refine(({ confirmPassword, password }) => confirmPassword === password, () => ({
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"]
}))
