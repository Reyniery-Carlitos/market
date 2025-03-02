import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Card } from "@/features/products/components";
import { Product, products } from "@/data/products";
import { categories } from "@/data/categories";
import Icons from "@assets/icons/Icons";
import { useUiStore } from "@/store/ui";

const searchSuggestionCustomStyles = cva(
  "fixed bottom-0 max-w-full w-full left-0 bg-bg-secondary/95 shadow-sm rounded-lg transition-all duration-500 ease-in-out",
  {
    variants: {
      showSearchSuggestions: {
        true: "h-[42rem] p-5",
        false: "h-0 p-0"
      }
    }
  }
)

interface ISearchBar {
  productName: string;
}

export default function SearchSuggestionMovil() {
  const { showSearchSuggestions, toggleSearchSuggestions } = useUiStore((state) => state)
  const [categorySelected, setCategorySelected] = useState<number>(0)
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([])
  const [productName, setProductName] = useState<string>("")

  const {
    handleSubmit,
    setValue,
    register,
    watch,
  } = useForm<ISearchBar>()

  const inputSearch = watch("productName")

  useEffect(() => {
    if (productName && productName !== "") {
      const currentProducts = products.filter((product) => product.name.toLowerCase() === productName.toLowerCase())
      console.log(currentProducts)
      setProductsFiltered(currentProducts)
    }
  }, [productName])

  useEffect(() => {
    if (categorySelected !== 0) {
      const currentProducts = products.filter((product) => product.categories.includes(categorySelected))

      setProductsFiltered(currentProducts)
    }
  }, [categorySelected])

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (inputSearch !== "") {
        setProductName(inputSearch)
      }
    }, 1000)

    return () => { clearTimeout(debounce) }
  }, [inputSearch])

  const handleCategorySelected = (categoryId: number) => {
    setCategorySelected(categoryId)
  }

  const onSubmit = () => {
    setProductName("")
    setValue("productName", "")
  }

  return (
    <section className={searchSuggestionCustomStyles({ showSearchSuggestions })}>
      <button className="absolute top-2 right-5" onClick={() => toggleSearchSuggestions()}>
        <Icons name="close" size={24} />
      </button>

      <form className="my-5 flex items-center gap-2 px-3 py-1 rounded-md bg-bg-primary min-w-3/5 h-10" onSubmit={handleSubmit(onSubmit)}>
        <Icons name="search" size={20} />
        <input type="text" placeholder="Search" className="rounded-md px-2 w-full outline-none text-sm" {...register("productName")} />
      </form>

      <div>
        <h1 className="text-sm font-semibold">Categorias</h1>
        <ul className="flex gap-2 mt-2">
          {
            categories.map((category) => (
              <li key={category.id} className="cursor-pointer text-xs rounded-lg px-2 py-1 bg-bg-tertiary border border-border-primary text-text-primary" onClick={() => handleCategorySelected(category.id)}>{category.name}</li>
            ))
          }
        </ul>
      </div>

      <div className="mt-5 max-w-full">
        <h1 className="text-sm font-semibold">Productos</h1>
        <div className="flex gap-2 overflow-x-scroll mt-2" style={{ scrollbarWidth: "none" }}>
          {
            !productName && productsFiltered.length === 0 ? (
              products.map((product) => (
                <Card key={product.id} product={product} className="w-64" />
              ))
            ) :
              productsFiltered.length === 0 ? <p className="text-sm text-text-secondary">No se encontraron productos</p>
                : (
                  productsFiltered.map((product) => (
                    <Card key={product.id} product={product} className="w-64" />
                  ))
                )
          }
        </div>
      </div>
    </section >
  )
}
