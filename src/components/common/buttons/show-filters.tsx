"use client"

import { useUiStore } from "@/store/ui";
import Icons from "@assets/icons/Icons";

export default function ShowFilter() {
  const { setShowLateralPanel } = useUiStore((state) => state)

  return (
    <button className="flex gap-2 items-center  hover:bg-bg-hover p-2 rounded-full cursor-pointer" onClick={() => setShowLateralPanel()}>
      <Icons name="filters" size={18} />
    </button>
  )
}

//<p className="text-sm"> {!showLateralPanel ? "Mostrar filtros" : "Ocultar filtros"} </p>

