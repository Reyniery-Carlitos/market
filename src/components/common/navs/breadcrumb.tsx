"use client"

import { usePathname } from "next/navigation";

import Icons from "@assets/icons/Icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Breadcrumb() {
  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  if (!currentPath) return null
  const pathnameToArr = currentPath.split("/")

  return (
    <ul className="flex items-center">
      <ListItems>
        <Link href="/">
          <Icons name="home" size={18} />
        </Link>
        <Icons name="arrow-down" className="rotate-270" size={18} />
      </ListItems>

      {
        pathnameToArr.map((path, index) => (
          path !== "" &&
          < ListItems key={index} >
            <Link href={`${pathnameToArr.slice(0, index + 1).join("/")}`} className="flex items-center">
              <span className="text-sm text-text-secondary"> {path.length === 0 ? "/" : path} </span>
            </Link>
            <Icons name="arrow-down" className="rotate-270" size={18} />
          </ListItems>
        ))
      }
    </ul >
  )
}

const ListItems = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center">
      {
        children
      }
    </li>
  )
}
