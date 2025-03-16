"use client"

import { useUiStore } from "@/store/ui";
import Card from "./card";
import { Product, products } from "@/data/products";
import { cva } from "class-variance-authority";

const containerCardsCustomStyles = cva(
  "px-5 mt-5",
  {
    variants: {
      productsView: {
        "grid": "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:w-4/5 xl:mx-auto gap-x-5 gap-y-8 my-2",
        "list": "grid grid-cols-1 gap-x-5 w-4/5 my-0 mx-auto"
      }
    }
  }
)

export default function ContainerCards() {
  const { productsView } = useUiStore((state) => state)

  return (
    <section className={containerCardsCustomStyles({ productsView })}>
      {
        products.map((product) => (
          <Card key={product.id} product={product} />
        ))
      }
    </section>
  )
}
