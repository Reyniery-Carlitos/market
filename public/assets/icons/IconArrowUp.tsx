import { SVG } from "@/types/svg";

const IconArrowUp = (props: SVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className="lucide lucide-chevron-up"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m18 15-6-6-6 6"></path>
  </svg>
);

export default IconArrowUp;
