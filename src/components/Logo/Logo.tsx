import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <>
      {/* Desktop logo - horizontal layout */}
      <Image
        alt="Episolve LLC - Technology Solutions for Business Problems"
        src="/branding/logos/episolve-logo-horizontal.png"
        width={300}
        height={80}
        loading={loading}
        priority={priority === 'high'}
        className={clsx('hidden md:block h-auto w-auto max-h-[50px]', className)}
      />
      {/* Mobile logo - square layout */}
      <Image
        alt="Episolve LLC"
        src="/branding/logos/episolve-logo-square.png"
        width={120}
        height={120}
        loading={loading}
        priority={priority === 'high'}
        className={clsx('md:hidden h-auto w-auto max-h-[45px]', className)}
      />
    </>
  )
}
