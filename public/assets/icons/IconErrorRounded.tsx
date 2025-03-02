export default function IconErrorRounded(props: any) {
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
    className="lucide lucide-circle-x"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6M9 9l6 6"></path>
  </svg>
  )
}
