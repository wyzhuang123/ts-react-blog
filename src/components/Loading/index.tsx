import React, {useEffect} from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const Index: React.FC = () => {
  useEffect(() => {
    Nprogress.start();
    return () => {
      Nprogress.done();
    }
  }, []);
  return (
    <div>
      <LoadingOutlined style={{ fontSize: 24 }} spin />
    </div>
  )
  }

export default Index