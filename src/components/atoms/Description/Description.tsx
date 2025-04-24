import React, { ReactNode } from 'react'

type DescriptionProps = {
  children: ReactNode,
  className?: string;
}

const Description = ({ className, children }: DescriptionProps) => {
  return (
	<p className={className}>
    {children}
  </p>
  )
}

export default Description;