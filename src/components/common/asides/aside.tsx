"use client"

import { cva, cx } from "class-variance-authority";

import { useUiStore } from "@/store/ui";
import Icons from "@assets/icons/Icons";
import { Colors, Dropdown, SizeFilters } from "@/components/common"
import { Checkbox } from "@/components/custom";
import Button from "../buttons/button";

const lateralPanelCustomStyles = cva(
  "grid grid-rows-[3rem_1fr_3rem] py-5 backdrop-blur-xl bg-bg-primary min-h-full fixed z-50 transition-all ease-in-out duration-300 overflow-x-hidden max-h-full",
  {
    variants: {
      showLateralPanel: {
        true: "w-80 px-4",
        false: "w-0 px-0"
      }
    }
  }
)

export default function Aside() {
  const { showLateralPanel, setShowLateralPanel } = useUiStore((state) => state)

  const toggleLateralPanel = () => setShowLateralPanel()

  return (
    <aside className={lateralPanelCustomStyles({ showLateralPanel })}>
      <div className="flex w-full items-center justify-between">
        <Icons name="beans" size={36} />

        <button className="p-1 rounded-full hover:bg-bg-hover" onClick={toggleLateralPanel}>
          <Icons name="close" size={24} />
        </button>
      </div>

      <DropdownContainer>
        <Dropdown title="Marca">
          <ItemsContainer>
            <Checkbox text="Nike" />
            <Checkbox text="Puma" />
            <Checkbox text="Adidas" />
            <Checkbox text="Rebook" />
          </ItemsContainer>
        </Dropdown>

        <Dropdown title="Precio">
          <ItemsContainer>
            <Checkbox text="0 - 100" />
            <Checkbox text="101 - 200" />
            <Checkbox text="201 - 500" />
            <Checkbox text="500 - Todo" />
          </ItemsContainer>
        </Dropdown>

        <Dropdown title="Categorias">
          <ItemsContainer>
            <Checkbox text="Todos" />
            <Checkbox text="Electronico" />
            <Checkbox text="Ropa" />
            <Checkbox text="Accessorios" />
          </ItemsContainer>
        </Dropdown>

        <Dropdown title="Colores">
          <ItemsContainer className="flex-row">
            <Colors color="red" />
            <Colors color="blue" />
            <Colors color="green" />
            <Colors color="yellow" />
          </ItemsContainer>
        </Dropdown>

        <Dropdown title="Tamaños">
          <ItemsContainer className="flex-row">
            <SizeFilters size="XS" />
            <SizeFilters size="SM" />
            <SizeFilters size="MD" />
            <SizeFilters size="LG" />
            <SizeFilters size="XL" />
            <SizeFilters size="XXL" />
          </ItemsContainer>
        </Dropdown>
      </DropdownContainer>

      <ButtonContainer>
        <Button text="Cancelar" type="secondary" />
        <Button text="Aplicar" type="primary" />
      </ButtonContainer>
    </aside >
  )
}

interface ContainerBase {
  children: React.ReactNode;
}

interface IItemsContainer extends ContainerBase {
  className?: string;
}

const ItemsContainer = ({ children, className }: IItemsContainer) => {
  return (
    <div className={cx("flex flex-col gap-2 flex-wrap", className)}>
      {children}
    </div>
  )
}

const DropdownContainer = ({ children }: ContainerBase) => {
  return (
    <div className="flex flex-col gap-2 overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
      {children}
    </div>
  )
}

const ButtonContainer = ({ children }: ContainerBase) => {
  return (
    <div className="grid grid-cols-2 gap-x-2 sticky bottom-0 max-w-full w-full px-2 left-0 z-60 py-2">
      {children}
    </div>
  )
}

