import React, { useEffect } from 'react'
import Item from '../Item'
import { ArticleList } from '../../../api/article'
import './index.scss'
const arr: number[] = [1,2,3,4,5];


const Index: React.FC = () => {
  async function initData() {
    try {
      let data = await ArticleList();     
      console.log(); 
    } catch (error) {
    }
  }
  useEffect(() => {
    initData();
  }, [])

  return (
    <div className="list-container">
      {
        arr.map((item) => {
          return <Item key={item}/>
        })
      }
    </div>
  )
  }

export default Index