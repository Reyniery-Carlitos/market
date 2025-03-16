"use client"

import { useAuthStore } from "@/store/auth";
import { Link } from "next-view-transitions";

export default function LinkNavigation() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  return (
    <nav className="flex gap-1 items-center w-full py-2 justify-end border-b border-border-primary">
      <ul className="flex gap-3 py-1">
        <li className="text-text-secondary text-xs px-1">
          <Link href="/"> Vender </Link>
        </li>

        <li className="text-text-secondary text-xs px-1">
          <Link href="/"> Dashboards </Link>
        </li>

        {
          !isAuthenticated && (
            <>
              <li className="text-text-primary text-xs font-semibold px-1">
                <Link href="/auth/registrarse">Registrarse</Link>
              </li>

              <li className="text-text-primary text-xs font-semibold px-1">
                <Link href="/auth">Ingresar</Link>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  );
}
