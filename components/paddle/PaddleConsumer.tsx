import { useContext } from 'react'
import { PaddleContext } from '@/components/paddle/PaddleProvider'

// context consumer hook
const usePaddleContext = () => {
  // get the context
  const context = useContext(PaddleContext)

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('usePaddleContext was used outside of its Provider')
  }

  return context
}

export { usePaddleContext }