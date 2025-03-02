"use client"

import { useRouter } from "next/navigation";
import { cx } from "class-variance-authority";

import Image from "next/image";
import { Product } from "@/data/products";

interface CardProps {
  product: Product;
  className?: string;
}

export default function Card({ product, className }: CardProps) {
  const router = useRouter()

  const handleClick = () => router.push(`/productos/${product.id}`)

  return (
    <div className={cx("rounded-lg bg-bg-secondary shadow-sm cursor-pointer min-w-64", className)} onClick={handleClick}>
      <Image src={product.image} alt="product image" width={500} height={500} className="rounded-t-lg min-w-full" />
      
      <div className="flex flex-col gap-2 p-3 rounded-b-lg">
        <h1 className="text-text-primary font-bold text-2xl"> ${product.price} { product.olderPrice && <span className="text-red-500 line-through"> ${product.olderPrice} </span> } </h1>
        <h2 className="text-text-primary font-semibold text-md"> {product.name} </h2>
        <p className="text-text-secondary text-sm"> {product.description.length > 80 ? product.description.slice(0, 80) + "..." : product.description} </p>
        
        { product.discount && <p className="text-sm font-semibold text-text-success"> {product.discount}% Descuento </p> }
      </div>
    </div>
  )
}
