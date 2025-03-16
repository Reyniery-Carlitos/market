"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Icons from "@assets/icons/Icons";
import { useAuthStore } from "@/store/auth";
import SearchSuggestion from "@/components/custom/search-suggestion/search-suggestion";
import SearchSuggestionMovil from "@/components/custom/search-suggestion/search-suggestion-movil";
import { useUiStore } from "@/store/ui";
import { useForm } from "react-hook-form";
import { useCartStore } from "@/store/cart";
import Cart from "../cart/cart";
import { useTransitionRouter } from "next-view-transitions";

interface ISearchBar {
  productName: string;
}

export default function MainNavigation() {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, logout } = useAuthStore((state) => state)
  const { toggleSearchSuggestions, showSearchSuggestions } = useUiStore((state) => state)
  const { toggleShow: toggleShowCart } = useCartStore((state) => state)
  const [productName, setProductName] = useState<string>("")
  const router = useTransitionRouter()

  const {
    handleSubmit,
    setValue,
    register,
    watch,
  } = useForm<ISearchBar>()

  const inputSearch = watch("productName")

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (inputSearch !== "") {
        setProductName(inputSearch)
      }
    }, 1000)

    return () => { clearTimeout(debounce) }
  }, [inputSearch])

  const toggleTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");

  const logoutUser = () => {
    logout()
    router.push("/")
  }

  const onSubmit = () => {
    setProductName("")
    setValue("productName", "")
  }

  return (
    <nav className="flex gap-2 items-center w-full min-h-15 justify-between">
      <Icons name="beans" size={36} className="hover:rotate-90 duration-1000" />

      <form className="relative max-lg:hidden flex items-center gap-2 px-3 py-1 rounded-md bg-bg-primary min-w-3/5 h-10" onSubmit={handleSubmit(onSubmit)}>
        <Icons name="search" size={20} />
        <input type="text" placeholder="Search" className="rounded-md px-2 w-full outline-none text-sm" {...register("productName")} onFocus={toggleSearchSuggestions} onBlur={toggleSearchSuggestions} />

        {
          showSearchSuggestions && <SearchSuggestion productSearched={productName} />
        }
      </form>

      <ul className="flex gap-2 items-center">
        <li className="min-lg:hidden">
          <button onClick={() => toggleSearchSuggestions()} className="hover:bg-bg-hover p-2 rounded-full">
            <Icons name="search" size={18} />
          </button>

          <SearchSuggestionMovil />
        </li>

        <li>
          <button className="hover:bg-bg-hover p-2 rounded-full">
            <Icons name="heart" size={18} />
          </button>
        </li>

        <li className="min-lg:relative">
          <button className="hover:bg-bg-hover p-2 rounded-full" onClick={toggleShowCart}>
            <Icons name="cart" size={18} />
          </button>

          <Cart />
        </li>

        <li>
          <button onClick={toggleTheme} className="hover:bg-bg-hover p-2 rounded-full">
            <Icons name={theme === "dark" ? "moon" : "moon"} size={18} />
          </button>
        </li>

        {
          isAuthenticated && (
            <li>
              <button onClick={logoutUser} className="w-7 h-7 bg-bg-error text-text-error border border-border-error cursor-pointer rounded-full flex items-center justify-center">
                <span className="font-semibold text-xs"> CR </span>
              </button>
            </li>
          )
        }
      </ul>
    </nav>
  );
}
