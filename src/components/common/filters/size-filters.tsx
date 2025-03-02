interface SizeFiltersProps {
  size: string;
}

export default function SizeFilters({ size }: SizeFiltersProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center border border-border-primary rounded-lg min-w-9 min-h-9 auto p-1 cursor-pointer">
      <p className="text-sm"> {size} </p>
    </div>
  )
}
