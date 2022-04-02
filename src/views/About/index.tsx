import React, { useEffect, useRef } from 'react'
import Typing from '@/utils/typing'

const Index: React.FC = () => {
  let Current = useRef<HTMLParagraphElement>(null);
  let Target = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    Typing({Current, Target});
  }, [])
  return (
    <div>
      <p ref={ Current }>123</p>
      <p ref={ Target }>123</p>
    </div>
  )
  }

export default Index