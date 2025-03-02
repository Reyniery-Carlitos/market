
import { SVG } from "@/types/svg";
import * as React from "react";

const IconClose = (props: SVG) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    className="lucide lucide-x"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 6 6 18M6 6l12 12"></path>
  </svg>
);

export default IconClose;
