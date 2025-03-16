"use client"

import Icons from "@assets/icons/Icons"
import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState<number>(1);

  const handleMinus = () => counter > 1 && setCounter(counter - 1)

  const handlePlus = () => setCounter(counter + 1)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => !isNaN(+e.target.value) && e.target.value.length > 0 && +e.target.value > 0 && setCounter(+e.target.value)

  return (
    <div className="flex items-center pr-2">
      <button className="bg-bg-tertiary border border-bg-secondary hover:bg-bg-hover p-1 rounded-lg" onClick={handleMinus}>
        <Icons name="minus" size={20} className="text-text-primary " />
      </button>

      <input type="text" className="text-center w-12 text-md px-1 rounded-lg outline-none appearance-none" value={counter} onChange={onChange} />

      <button className="bg-bg-tertiary hover:bg-bg-hover border border-bg-secondary p-1 rounded-lg" onClick={handlePlus}>
        <Icons name="sum" size={20} className="text-text-primary" />
      </button>
    </div>
  )
}
