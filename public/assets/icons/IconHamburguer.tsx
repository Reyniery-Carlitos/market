import { SVG } from "@/types/svg";

const IconHamburguer = (props: SVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className="lucide lucide-menu"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 12h16M4 6h16M4 18h16"></path>
  </svg>
);

export default IconHamburguer;
