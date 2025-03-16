import Breadcrumb from "./breadcrumb";
import { ShowFilter } from "../index"
import ProductView from "../buttons/product-view";

export default function FiltersNavigation() {
  return (
    <nav className="flex justify-between px-5 py-2">
      <Breadcrumb />

      <div className="flex gap-2 items-center">
        <ShowFilter />

        <ProductView />
      </div>
    </nav>
  )
}
