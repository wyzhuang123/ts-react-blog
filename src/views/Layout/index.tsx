import React, { useMemo } from 'react'
import Header from './Header'
import Content from './Content'
import Sider from './Sider'
const Index: React.FC = () => {
  return (
    <div> 
      {
        useMemo(() => {
          return  <Header/>
        }, [])
      }
      <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around'
      }}>
        <Content/>
        {
        useMemo(() => {
          return  <Sider />
        }, [])
      }
      </div>
    </div>
  )
  }

export default Index