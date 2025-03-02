interface ColorProps {
  color: string;
}

export default function Colors({ color }: ColorProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-8 w-8 rounded-lg flex cursor-pointer" style={{ backgroundColor: color }}></div>
    </div>
  )
}
