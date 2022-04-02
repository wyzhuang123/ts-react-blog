import { RefObject } from 'react'

interface typingType {
  Current: RefObject<HTMLParagraphElement> | null,
  Target: RefObject<HTMLParagraphElement> | null,
  Timeout?: number | 500,
}

const Typing = ({Current, Target, Timeout}: typingType) => {
  // let timer = null;
  // let data = Current.current?.nodeValue?.split('');
  // let i = 0;
  // timer = setInterval(() => {
  //   Target.current.nodeValue += data[i];
  //   i++;
  // }, Timeout)
}


export default Typing;