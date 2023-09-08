/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/home/home"
import Info from "../components/info/info"
import Search from "../components/search/search"

export default function RoutesApp() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/filmes" element={<Home/>} />
    <Route path="/info/:title" element={<Info/>} />
    <Route path="/search" element={<Search/>} />
  </Routes>
  </BrowserRouter>
  )
}
