import Icons, { IconName } from "@assets/icons/Icons";
import { cva, cx } from "class-variance-authority";

interface ButtonProps {
  text?: string;
  icon?: string;
  type?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  isSubmitButton?: boolean;
}

const buttonCustomStyles = cva(
  "flex gap-2 items-center justify-center rounded-lg py-1 cursor-pointer",
  {
    variants: {
      type: {
        "primary": "bg-bg-default text-white",
        "secondary": "border border-bg-default text-text-primary"
      }
    }
  }
)

export default function Button({ text, icon, type, className, onClick, isSubmitButton }: ButtonProps) {
  return (
    <button className={cx(buttonCustomStyles({ type }), className)} onClick={onClick} type={isSubmitButton ? "submit": "button"}>
      {
        icon && <Icons name={icon as IconName} size={24} />
      }

      {
        text && <span className="text-sm"> {text} </span>
      }
    </button>
  )
}
