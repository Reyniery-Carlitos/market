import { SVG } from "@/types/svg";

export default function IconSum(props: SVG) {
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
      className="lucide lucide-plus"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 12h14M12 5v14"></path>
    </svg>
  )
}
