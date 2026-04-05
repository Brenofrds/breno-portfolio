import { ReactNode } from "react"

type TagProps = {
  children: ReactNode
  className?: string
}

export default function Tag({ children, className = "" }: TagProps) {
  const classes = ["rounded-full", className]
    .filter(Boolean)
    .join(" ")

  return <span className={classes}>{children}</span>
}
