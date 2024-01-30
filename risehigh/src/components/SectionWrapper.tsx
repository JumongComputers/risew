import React from 'react'

export default function SectionWrapper({
  children,css
}: {
  children: React.ReactNode, css?: string
}) {
  return (
    <div className={`w-full px-6 md:px-[8%] ${css}`}>{children}</div>
  )
}
