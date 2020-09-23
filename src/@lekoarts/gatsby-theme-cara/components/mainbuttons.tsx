/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ButtonProps = {
    link: string
    title: string
    children: React.ReactNode
  }

const Mainbuttons = ({ link, title, children }: ButtonProps) => (
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={() => location.href=link}
        type="button"
      >
             <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
          {title}
      </button>
)
export default Mainbuttons
