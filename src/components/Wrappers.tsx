'use client';
import React, { ReactNode } from 'react'
import { LazyMotion, domAnimation } from "framer-motion"
const Wrappers = ({children}:{children:ReactNode}) => {
  return (
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
  )
}

export default Wrappers