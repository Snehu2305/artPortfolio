import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  {Contact, Header, Footer, Journey, Featured, Gallery, Video, Home} from './components/index'


function App() {
 

  return (
    <>
      <Header />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Video/>} />
          <Route path="/about" element={<Journey />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
