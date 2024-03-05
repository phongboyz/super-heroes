import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Switch } from 'wouter'

// component
import Navbar from './components/Navbar'
import { Home,Heroes, HeroesDetail } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar>
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/heroes' component={Heroes} />
            <Route path='/heroes/:heroesName' component={HeroesDetail} />
        </Switch>
      </Navbar>
    </>
  )
}

export default App
