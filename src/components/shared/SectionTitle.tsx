import { ReactNode } from "react"
import { bebas } from "@/src/app/fonts"

type SectionTitleProps = {
  children: ReactNode
  className?: string
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  const classes = [`${bebas.className} text-5xl tracking-widest`, className]
    .filter(Boolean)
    .join(" ")

  return <h2 className={classes}>{children}</h2>
}
