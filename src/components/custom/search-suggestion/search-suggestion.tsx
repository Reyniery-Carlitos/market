"use client"

import { useEffect, useState } from "react";

import { Card } from "@/features/products/components";
import { Product, products } from "@/data/products";
import { categories } from "@/data/categories";

interface SearchSuggestionProps {
  productSearched?: string;
}

export default function SearchSuggestion({ productSearched }: SearchSuggestionProps) {
  const [categorySelected, setCategorySelected] = useState<number>(0)
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([])

  useEffect(() => {
    if (productSearched && productSearched !== "") {
      const currentProducts = products.filter((product) => product.name.toLowerCase() === productSearched.toLowerCase())
      console.log(currentProducts)
      setProductsFiltered(currentProducts)
    }
  }, [productSearched])

  useEffect(() => {
    if (categorySelected !== 0) {
      const currentProducts = products.filter((product) => product.categories.includes(categorySelected))

      setProductsFiltered(currentProducts)
    }
  }, [categorySelected])

  const handleCategorySelected = (categoryId: number) => {
    setCategorySelected(categoryId)
  }

  return (
    <section className="absolute top-12 w-full left-0 bg-bg-primary shadow-sm rounded-lg p-5">
      <div>
        <h1 className="text-sm font-semibold">Categorias</h1>
        <ul className="flex gap-2 mt-2 w-full overflow-x-scroll py-1" style={{ scrollbarWidth: "none" }}>
          {
            categories.map((category) => (
              <li key={category.id} className="cursor-pointer text-xs rounded-lg px-2 py-1 bg-bg-tertiary border border-border-primary text-text-primary" onClick={() => handleCategorySelected(category.id)}>{category.name}</li>
            ))
          }
        </ul>
      </div>

      <div className="mt-5">
        <h1 className="text-sm font-semibold">Productos</h1>
        <div className="flex gap-2 overflow-x-scroll mt-2" style={{ scrollbarWidth: "none" }}>
          {
            !productSearched && productsFiltered.length === 0 ? (
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
