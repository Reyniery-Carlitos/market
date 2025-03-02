export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [{
  id: 1,
  name: "Carlos Rubio",
  email: "carlos@gmail.com",
  password: "12345678"
}]
