"use client"

import { useParams } from "next/navigation";
import Image from "next/image";

import { products } from "@/data/products"
import { Button } from "@/components/common";
import Icons from "@assets/icons/Icons";
import { SizeFilters } from "@/components/common/";

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()

  const product = products.find((product) => product.id === +productId)

  if (!product) return null

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-x-5 gap-y-5 mt-10 px-5 lg:px-20">
      <div className="flex flex-col w-full gap-5 items-center">
        <div className="w-4/5">
          <Image src={product.image} alt="product image" width={500} height={500} className="rounded-lg w-full" />
        </div>
        <div className="flex lg:grid lg:grid-cols-5 lg:w-full xl:flex w-1/5 items-start justify-center gap-3 md:gap-5">
          <Image src={product.image} alt="product image" width={500} height={500} className="rounded-lg w-20 h-20" />
          <Image src={product.image} alt="product image" width={500} height={500} className="rounded-lg w-20 h-20" />
          <Image src={product.image} alt="product image" width={500} height={500} className="rounded-lg w-20 h-20" />
          <Image src={product.image} alt="product image" width={500} height={500} className="rounded-lg w-20 h-20" />
          <Image src={product.image} alt="product image" width={500} height={500} className="rounded-lg w-20 h-20" />
        </div>
      </div>

      <div className="flex flex-col gap-4 xl:w-4/5">
        <h1 className="font-semibold text-3xl"> {product.name} </h1>

        <div className="flex gap-5 items-center text-sm font-semibold text-text-secondary">
          <p> 10k+ Unidades vendidas</p>
          <p className="text-2xl">  •  </p>
          <div className="flex items-center gap-2">
            <div className="flex">
              {
                Array.from({ length: 4 }, (_, i) => i + 1).map((index) => (
                  <Icons name="star" size={20} key={index} color="rgba(241, 196, 15, 1)" />
                ))
              }
            </div>

            <p> 4.8 </p>
          </div>
          <p className="text-2xl">  •  </p>
          <p> 100 Reviews </p>
        </div>
        <h2 className="text-4xl font-bold"> HNL {product.price} </h2>

        <div className="flex gap-2 items-center">
          <p className="text-text-error font-semibold line-through"> HNL 100  </p>
          <p className="text-text-success no-underline font-semibold"> 25% Descuento </p>
        </div>

        <div className="flex gap-2 items-center">
          <Image src={product.image} alt="product image" width={500} height={500} className="rounded-lg border-2 hover:border-text-primary  h-16 w-16" />

          <Image src={product.image} alt="product image" width={500} height={500} className="rounded-lg border-2 hover:border-text-primary  h-16 w-16" />
        </div>

        <div className="">
          <p className="font-semibold text-sm"> Tamaños </p>
          <div className="flex gap-2 items-center mt-2">
            <SizeFilters size="XS" />
            <SizeFilters size="SM" />
            <SizeFilters size="MD" />
            <SizeFilters size="LG" />
            <SizeFilters size="XL" />
            <SizeFilters size="XXL" />
          </div>
        </div>

        <Button text="Comprar" type="primary" className="h-10" />
        <Button text="Agregar al carrito" type="secondary" className="h-10" />
      </div>
    </section>
  )
}
