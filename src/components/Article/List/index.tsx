import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import RouteInterface from '@/lib/Interface/RouteInterface'
import Item from '../Item'
import Skeleton from '@/components/Skeleton'
import { getAllArticles } from '@/api/article'
import './index.scss'

interface AritcleItem {
  id: number,
  title: string,
  time: string,
  content: string,
  type: string
}

const Index: React.FC<RouteInterface> = (props) => {
  const [list, setList] = useState<AritcleItem[]>([]);
  async function initData() {
    try {
      let {data} = await getAllArticles();
      setList(data);
    } catch (error) {
    }
  }
  useEffect(() => {
    initData();
  }, [])
    if(!list) {
      return (
        <>
          <Skeleton/>
        </>
      )
    } else {
      return (
        <div className="list-container">
          {
            list.map((item) => {
              return <Item key={item.id} {...item}/>
            })
          }
        </div>
      )
    }
  }

export default withRouter(Index)