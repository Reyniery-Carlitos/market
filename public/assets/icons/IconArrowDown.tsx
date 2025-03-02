import { SVG } from "@/types/svg";

const IconArrowDown = (props: SVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className="lucide lucide-chevron-down"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

export default IconArrowDown;
