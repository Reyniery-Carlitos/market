import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("El formato de email es incorrecto").min(1, "El email es requerido"),
  password: z.string().min(8, "La contraseña es requerida y debe contener al menos 8 caracteres")
})
