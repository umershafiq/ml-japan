"use client"

import Link from "next/link"
import { useState } from "react"

type LogoProps = {
  className?: string
  withText?: boolean
  priority?: boolean
  heightClass?: string
  imgClassName?: string
}

export default function Logo({ className, withText = true, heightClass, imgClassName }: LogoProps) {
  const sources = ["/logo-ml-japan.png", "/logo-ml-japan.svg", "/placeholder-logo.svg"]
  const [sourceIndex, setSourceIndex] = useState(0)
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 hover:opacity-90 transition ${className ?? ""}`}
      aria-label="ML Japan home"
    >
      <img
        src={sources[sourceIndex]}
        alt="ML Japan"
        className={`${heightClass ?? "h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16"} max-w-full w-auto object-contain block ${imgClassName ?? ""}`}
        onError={() => setSourceIndex((i) => Math.min(i + 1, sources.length - 1))}
      />
      {/* no visible text to avoid showing alt when image fails */}
    </Link>
  )
}


