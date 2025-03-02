"use client"

import { useUiStore } from "@/store/ui"
import Icons, { IconName } from "@assets/icons/Icons"
import { cva } from "class-variance-authority"
import { useEffect } from "react"

const toastCustomStyles = cva(
  "flex gap-3 items-center absolute top-10 transition-all duration-1000 ease-in right-5 rounded-lg h-14 shadow-xs bg-bg-tertiary text-text-primary",
  {
    variants: {
      show: {
        true: "w-96 opacity-100",
        false: "w-0 opacity-0"
      }
    }
  }
)

const lateralCustomStyles = cva(
  "h-full w-3 rounded-l-lg",
  {
    variants: {
      type: {
        success: "bg-toast-success",
       error: "bg-toast-error",
       warning: "bg-toast-warning",
       info: "bg-toast-info"
      }
    }
  }
)

const iconCustomStyles = cva(
  "",
  {
    variants: {
      type: {
        success: "text-toast-success",
        error: "text-toast-error",
        warning: "text-toast-warning",
        info: "text-toast-info"
      }
    }
  }
)

const iconMapType: Record<string, IconName> = {
  success: "check-rounded",
  error: "error-rounded",
  warning: "warning-rounded",
  info: "info-rounded"
}

export default function Toast() {
  const { notification, toggleNotification } = useUiStore((state) => state)

  const onClose = () => toggleNotification(false, null, "success")

  useEffect(() => {
    const timeout = setTimeout(() => onClose(), 2000)

    return () => clearTimeout(timeout)
  }, [notification])

  if (!notification.show) return null

  return (
    <div className={toastCustomStyles({ show: notification.show })}>
      <button className="absolute top-2 right-2 hidden" onClick={onClose}>
        <Icons name="close" size={18} />
      </button>

      <div className={lateralCustomStyles({ type: notification.type })}></div>

      <Icons name={iconMapType[notification.type]} size={28} className={iconCustomStyles({ type: notification.type })} />
      <h1 className="text-xs"> {notification.message} </h1>
    </div>
  )
}
