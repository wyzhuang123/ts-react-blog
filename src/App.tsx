import React from 'react';
import Layout from './views/Layout'
import { HashRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '@/lib/CSS/app.scss'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <TransitionGroup>
          <CSSTransition
            key=""
            timeout={500}
            classNames="fade"
            exit={false}  
          >
            <Layout/>
          </CSSTransition>
        </TransitionGroup>
      </HashRouter>

    </div>
  );
}

export default App;
