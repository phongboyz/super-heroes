
import './App.css'
import { Route, Switch } from 'wouter'

// component
import Navbar from './components/Navbar'
import { Home,Heroes, HeroesDetail } from './pages'

function App() {

  return (
    <>
      <Navbar />
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/heroes' component={Heroes} />
            <Route path='/heroes/:heroesName' component={HeroesDetail} />
        </Switch>
    </>
  )
}

export default App
