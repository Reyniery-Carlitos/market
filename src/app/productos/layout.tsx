import { Aside, FiltersNavigation, MainHeader } from "@/components/common";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Aside />
      <MainHeader>
        <FiltersNavigation />
      </MainHeader>

      <main>
        {children}
      </main>
    </>
  )
}
