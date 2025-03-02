"use client"

import { useUiStore } from "@/store/ui";
import Icons from "@assets/icons/Icons";

export default function ShowFilter() {
  const { showLateralPanel, setShowLateralPanel } = useUiStore((state) => state)

  return (
    <div className="flex gap-2 items-center cursor-pointer" onClick={() => setShowLateralPanel()}>
      <p className="text-sm"> {!showLateralPanel ? "Mostrar filtros": "Ocultar filtros"} </p>
      <Icons name="filters" size={18} />
    </div>
  )
}
