'use client'

import { SessionProvider } from 'next-auth/react'
import { LotusProvider } from 'lotus-ux'

type Props = {
  children?: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <LotusProvider>{children}</LotusProvider>
    </SessionProvider>
  )
}