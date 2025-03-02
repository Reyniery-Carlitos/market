"use client"

import { cva } from "class-variance-authority";
import { useState } from "react";

import Icons from "@assets/icons/Icons";

const dropdownContentCustomStyles = cva(
  "flex flex-col gap-2 transition-all ease-in-out duration-500 overflow-hidden pl-2 ml-3",
  {
    variants: {
      isOpen: {
        true: "max-h-[1000px] py-2",
        false: "max-h-0 py-0"
      }
    }
  }
)

const iconCustomStyles = cva(
  "transition-transform ease-in-out duration-500",
  {
    variants: {
      isOpen: {
        true: "rotate-180",
        false: "rotate-0"
      }
    }
  }
)

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

export default function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="rounded-lg">
      <div className="flex items-center justify-between py-2 pl-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="text-sm font-semibold"> { title } </h1>

        <button>
          <Icons name="arrow-down" size={24} className={iconCustomStyles({ isOpen })} />
        </button>
      </div>

      <div className={dropdownContentCustomStyles({ isOpen })}>
        { children }
      </div>
    </div>
  )
}
