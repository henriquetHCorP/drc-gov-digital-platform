"use client"
import React from 'react'
import { RecoilRoot } from 'recoil'
export default function SessionWrapper({children}) {
    // the sessionwrapper will only be used inside for the (others) folders;
  return (
    <RecoilRoot>
     {children}
    </RecoilRoot>
  )
}

