import Breadcrumb from "./breadcrumb";
import { ShowFilter } from "../index"

export default function FiltersNavigation() {
  return (
    <nav className="flex justify-between px-5 py-4">
      <Breadcrumb />

      <ShowFilter />
    </nav>
  )
}
