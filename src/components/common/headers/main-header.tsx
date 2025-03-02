import FiltersNavigation from "../navs/filters-navigation";
import LinkNavigation from "../navs/link-navigation";
import MainNavigation from "../navs/main-navigation";

interface MainHeaderProps {
  children?: React.ReactNode;
}

export default function MainHeader({ children }: MainHeaderProps) {
  return (
    <>
      <header className="w-auto h-auto bg-bg-secondary sticky px-5">
        <LinkNavigation />

        <MainNavigation />
      </header>
      {children}
    </>
  )
}
