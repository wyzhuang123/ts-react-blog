import React from 'react'
import { Image, Avatar  } from 'antd'
import './index.less'
const Index: React.FC = () => {
  return (
    <div style={{width: '100%'}}>
      <Image 
        src="https://freenaturestock.com/wp-content/uploads/freenaturestock-539-1024x683.jpeg" 
        preview={false}
        width={1000}
        height={400}
        className="photo"
        />
    </div>
  )
  }

export default Index