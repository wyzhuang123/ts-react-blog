import React from 'react'
import { Skeleton } from 'antd'
import SkeletonInterface from '@/lib/Interface/SkeletonInterface'
const Index: React.FC<SkeletonInterface> = (props) => {
  return (
    <>
      <Skeleton 
        active 
        paragraph={props.SkeletonParagraphProps}
        avatar={props.SkeletonAvatarProps}
        title={props.SkeletonTitleProps}
        />
    </>
  )
  }

export default Index