import { SVG } from "@/types/svg";

export default function IconInfoRounded(props: SVG) {
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
      className="lucide lucide-info"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16v-4M12 8h.01"></path>
    </svg>
  )
}
