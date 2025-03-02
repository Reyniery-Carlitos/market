import Card from "./card";
import { products } from "@/data/products";

export default function ContainerCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8 px-5 my-2">
    {
      products.map((product) => (
        <Card key={product.id} product={product} />
      ))
    }
    </section>
  )
}
