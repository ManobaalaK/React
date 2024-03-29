import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Counter from './Counter'
import Effect from './Effect'
import Reducer from './Reducer'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="Counter" element={<Counter/>}/>
      <Route path="Effect" element={<Effect/>}/>
      <Route path="Reducer" element={<Reducer/>}/>
  
    
    </Route>
    </Routes>
    </BrowserRouter>
  )
}



