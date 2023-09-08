/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import './home.css' 
import Header from '../header/header'
import HomeOne from '../homeone/homeone'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { TopRated } from '../../api/api'

export default function Home() {

const [TopMovies, setTopMovies] = useState([])

useEffect(()=>{

  async function GetApi() {

    try {
      const res = await axios.get(TopRated)
     console.log(res.data.results)
    setTopMovies(res.data.results)

    } catch (error) {
      console.log(error)
    }

  }
  GetApi()

},[])
  
  return (
    <div className='cont-home'>
        <Header/>
        <h1 className='text'>MELHORES FILMES:</h1>
      <main className='cont-main-home'>
        {TopMovies ? TopMovies.map((movie)=>{
          return (
            <HomeOne key={movie.id} title={movie.title} img={movie.backdrop_path} note={movie.vote_average} id={movie.id} desc={movie.overview} date={movie.release_date
            }/>
          )
           }) : <h1>
            Carregando...
            </h1>}
      </main>
    </div>
  )
}