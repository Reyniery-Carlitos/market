import { SVG } from "@/types/svg";

export default function IconWarningRounded(props: SVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="lucide lucide-circle-alert"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 8v4M12 16h.01"></path>
    </svg>
  )
}
