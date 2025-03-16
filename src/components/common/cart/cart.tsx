"use client"

import { useCartStore } from "@/store/cart"
import Icons from "@assets/icons/Icons"
import Image from "next/image"
import Counter from "./counter"
import Button from "../buttons/button"
import { cva } from "class-variance-authority"
import { useAuthStore } from "@/store/auth"
import { cartData } from "@/data/cart"
import { products } from "@/data/products"


const cartCustomStyles = cva(
  "bg-bg-tertiary min-md:absolute max-md:fixed shadow-md flex flex-col gap-5 right-0 rounded-lg max-md:min-w-screen max-md:bottom-0 transition-all duration-500 ease-in-out overflow-hidden",
  {
    variants: {
      showCart: {
        true: "max-h-[40rem] p-5",
        false: "p-0 max-h-0"
      },
      isAuthenticated: {
        true: "min-w-[35rem]",
        false: "min-w-[25rem]"
      },
    }
  }
)

export default function Cart() {
  const { show: showCart } = useCartStore((state) => state)
  const { isAuthenticated, userAuthenticated } = useAuthStore((state) => state)

  let userCartProducts: any[] = []
  let shipping: number = 0
  let subtotal: number = 0
  let total: number = 0

  if (isAuthenticated) {
    userCartProducts = cartData.filter((cart) => cart.userId === userAuthenticated)
    subtotal = userCartProducts[0].products.reduce((acum, curr) => acum + curr.price, 0)
    shipping = userCartProducts[0].products.reduce((acum, curr) => acum + curr.shipping, 0)
    total = subtotal + shipping
  }

  const handleDeleteProductFromCart = (productId: number) => {
    const currentUserCartProducts = cartData.filter((cart) => cart.userId === userAuthenticated)

    currentUserCartProducts[0].products = currentUserCartProducts[0].products.filter((product) => product.id !== productId)

    cartData.push(currentUserCartProducts[0])
    console.log(cartData)
  }

  return (
    <div className={cartCustomStyles({ showCart, isAuthenticated })}>
      {
        isAuthenticated ? (
          userCartProducts.length > 0 ? (
            <>
              <div className="flex gap-2 items-center">
                <Icons name="cart" className="text-text-error" size={24} />
                <h1 className="text-bg-default text-lg font-semibold uppercase inline">  Carrito </h1>
                <p className="bg-bg-error border border-border-error text-text-error text-xs p-1 font-semibold rounded-lg w-7 h-7 text-center content-center"> {userCartProducts[0].products.length} </p>
              </div>

              <ul className="w-full flex flex-col gap-3 h-full overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
                {
                  userCartProducts[0].products.map((product, index) => (
                    <li className="flex gap-2 rounded-lg w-full bg-bg-primary h-36 shadow-sm" key={index}>
                      <div className="h-full w-36">
                        <Image src={product.image} width={500} height={500} alt="Product image" className="rounded-l-lg w-full h-full object-fit" />
                      </div>
                      <div className="flex w-full pl-2">
                        <div className="flex flex-col justify-evenly w-full">
                          <h2 className="text-text-primary text-sm font-semibold"> {product.name} </h2>
                          <p className="text-text-secondary text-xs"> {product.category} </p>
                          <p className="text-text-primary text-xl font-semibold"> ${product.price}</p>

                          <Counter />
                        </div>

                        <button className="bg-bg-tertiary shadow-xs rounded-l-none rounded-r-lg px-2 border border-bg-primary hover:bg-bg-error" onClick={() => handleDeleteProductFromCart(product.id)}>
                          <Icons name="trash" size={20} className="text-text-error" />
                        </button>
                      </div>
                    </li>
                  ))
                }

              </ul>
              <Footer subtotal={subtotal} total={total} shipping={shipping} />

              <Button icon="bag" text="Confirmar pedido" type="primary" className="py-3 font-semibold" />

            </>
          ) : (
            <>
              <div className="flex gap-2 items-center">
                <Icons name="cart" className="text-text-error" size={24} />
                <h1 className="text-bg-default text-lg font-semibold uppercase inline">  Carrito </h1>
                <p className="bg-bg-error border border-border-error text-text-error text-xs p-1 font-semibold rounded-lg w-7 h-7 text-center content-center"> 0 </p>
              </div>

              <p className="text-sm"> No hay productos en tu carrito </p>
            </>
          )
        ) : (
          <div className="flex gap-2 items-center">
            <div className="p-1 rounded-full border border-bg-default">
              <Icons name="close" size={16} className="text-text-error" />
            </div>
            <p className="text-xs font-semibold"> Necesitas iniciar sesión para poder ver tu carrito </p>
          </div>
        )
      }
    </div>
  )
}

const Footer = ({ subtotal, total, shipping }: { subtotal: number, total: number, shipping: number }) => {
  return (
    <footer className="flex flex-col gap-2 my-2">
      <FooterItem>
        <p className="text-text-secondary"> Subtotal </p>
        <p> ${subtotal} </p>
      </FooterItem>
      <FooterItem>
        <p className="text-text-secondary"> Envio </p>
        <p> ${shipping} </p>
      </FooterItem>
      <FooterItem>
        <p className="text-2xl font-semibold"> Total </p>
        <p className="text-2xl font-semibold"> ${total} </p>
      </FooterItem>
    </footer>
  )
}

const FooterItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between">
      {children}
    </div>
  )
}
