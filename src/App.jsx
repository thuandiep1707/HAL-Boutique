import { Route, Routes } from 'react-router-dom'


import Header from './components/Header'

import { router } from './until/Router'

import './assets/g-style/App.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {
          router.map((value, index)=><Route path={value.path} element = {<value.element />} key = {index}/>)
        }
      </Routes>
    </>
  )
}

export default App
