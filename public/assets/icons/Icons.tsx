import IconMoon from "./IconMoon"
import IconSun from "./IconSun"
import IconCart from "./IconCart"
import IconSearch from "./IconSearch"
import IconHeart from "./IconHeart"
import Logo from "./Logo"
import IconBeans from "./IconBeans"
import IconHamburguer from "./IconHamburguer"
import IconClose from "./IconClose"
import IconArrowDown from "./IconArrowDown"
import IconArrowUp from "./IconArrowUp"
import IconFilters from "./IconFilters"
import IconHome from "./IconHome"
import IconStar from "./IconStar"
import IconCheckRounded from "./IconCheckRounded"
import IconErrorRounded from "./IconErrorRounded"
import IconWarningRounded from "./IconWarningRounded"
import IconInfoRounded from "./IconInfoRounded"
import IconList from "./IconList"
import IconGrid from "./IconGrid"
import IconTrash from "./IconTrash"
import IconSum from "./IconSum"
import IconMinus from "./IconMinus"
import IconBag from "./IconBag"

export type IconName = "search" | "cart" | "heart" | "moon" | "sun" | "beans" | "hamburguer" | "close" | "arrow-down" | "arrow-up" | "filters" | "home" | "logo" | "star" | "check-rounded" | "error-rounded" | "warning-rounded" | "info-rounded" | "list" | "grid" | "trash" | "sum" | "minus" | "bag"

interface IconProps {
  name: IconName;
  size: number;
  color?: string;
  className?: string;
}  

const icons: Record<IconName, React.ComponentType<IconProps>> = {
  "search": IconSearch,
  "cart": IconCart,
  "heart": IconHeart,
  "moon": IconMoon,
  "sun": IconSun,
  "beans": IconBeans,
  "hamburguer": IconHamburguer,
  "close": IconClose,
  "arrow-down": IconArrowDown,
  "arrow-up": IconArrowUp,
  "filters": IconFilters,
  "home": IconHome,
  "logo": Logo,
  "star": IconStar,
  "check-rounded": IconCheckRounded,
  "error-rounded": IconErrorRounded,
  "warning-rounded": IconWarningRounded,
  "info-rounded": IconInfoRounded,
  "list": IconList,
  "grid": IconGrid,
  "trash": IconTrash,
  "sum": IconSum,
  "minus": IconMinus,
  "bag": IconBag
}

export default function Icons({ name, size, color, className }: IconProps) {
  const Icon = icons[name] || Logo
  return <Icon name={name} size={size} color={color} className={className} />
}
