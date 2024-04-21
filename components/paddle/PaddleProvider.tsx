'use client'

import { createContext, useState } from 'react'
import Script from 'next/script'

type PaddleContext = any

const PaddleContext = createContext<PaddleContext>(null)

const PaddleProvider = ({ children }: { children: React.ReactNode }) => {
  const [paddle, setPaddle] = useState(null)

  return (
    <PaddleContext.Provider value={paddle}>
      <>
        <Script
          src="https://cdn.paddle.com/paddle/paddle.js"
          onLoad={() => {
            if (process.env.NEXT_PUBLIC_PADDLE_SANDBOX) {
              Paddle.Environment.set('sandbox')
            }
            Paddle.Setup({
              vendor: Number(process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID),
            })
            setPaddle(Paddle)
          }}
        />
        {children}
      </>
    </PaddleContext.Provider>
  )
}

export { PaddleProvider, PaddleContext }