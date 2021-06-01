import './App.scss'
import Navbar from './components/navBar/Navbar'
import Loginpage from './components/pages/loginPage/Loginpage'
import Registerpage from './components/pages/registerPage/Registerpage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './components/pages/homePage/Homepage'
import { useCallback, useContext, useEffect } from 'react'
import { storeContext } from './components/store/CentralStore'
import { readCookie } from './App.action'

function App() {

  const { dispatch } = useContext(storeContext)

  const fetchCookie = useCallback(()=>{
    readCookie(dispatch)
  }, [dispatch])

  useEffect(() => {
    fetchCookie()
  }, [fetchCookie])

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/socmed/session/:id' component={Homepage}></Route>
        <Route path='/login' component={Loginpage}></Route>
        <Route path='/register' component={Registerpage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
