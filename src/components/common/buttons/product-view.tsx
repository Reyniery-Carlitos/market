"use client"

import { useUiStore } from "@/store/ui";
import Icons from "@assets/icons/Icons";

export default function ProductView() {
  const { productsView, setProductsView } = useUiStore((state) => state);

  return (
    <>
      {
        productsView === "list" ? (
          <Button onClick={() => setProductsView("grid")}>
            <Icons name="grid" size={18} />
          </Button>
        ) : (
          <Button onClick={() => setProductsView("list")}>
            <Icons name="list" size={18} />
          </Button>
        )
      }
    </>
  )
}

const Button = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
  return (
    <button className="flex items-center p-2 rounded-full hover:bg-bg-hover cursor-pointer" onClick={onClick}>
      {children}
    </button>
  )
}
