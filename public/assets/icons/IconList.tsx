import { SVG } from "@/types/svg";

export default function IconList(props: SVG) {
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
      className="lucide lucide-list"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13"></path>
    </svg>
  )
}
