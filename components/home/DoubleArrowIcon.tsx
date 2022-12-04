import * as React from "react"
import { SVGProps } from "react"

const DoubleArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
      <path d="M.046 2.582 2.13.498l10.837 10.836L23.803.498l2.084 2.084-12.92 12.92z" />
      <path d="m.046 13.582 2.084-2.084 10.837 10.836 10.836-10.836 2.084 2.084-12.92 12.92z" />
  </svg>
)

export default DoubleArrowIcon