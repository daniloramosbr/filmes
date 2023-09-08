/* eslint-disable no-unused-vars */
import './search'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import HomeOne from '../homeone/homeone'
import { SearchApi } from '../../api/api'
import { ApiKey } from '../../api/api'
import Header from '../header/header'
import axios from 'axios'

export default function Search() {

  const [SearchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = SearchParams.get('q')


  useEffect(()=>{

    const searchWithUrl = `${SearchApi}?${ApiKey}&query=${query}`

    async function GetApi() {
  
      try {
        const res = await axios.get(searchWithUrl)
        console.log(res.data)
        setMovies(res.data.results)
  
      } catch (error) {
        console.log(error)
      }
  
    }
    GetApi()
  
  },[query])

  return (
    <div className='cont-home'>
        <Header/>
        <h1 className='text'>Resultados para: <span className='span-search'>{query}</span></h1>
      <main className='cont-main-home'>
        {movies ? movies.map((movie)=>{
          return (

            <HomeOne key={movie.id} title={movie.title} img={movie.backdrop_path} note={movie.vote_average} id={movie.id} desc={movie.overview} date={movie.release_date}  />
          )
           }) : <h1>
            Carregando...
            </h1>}
      </main>
    </div>
  )
}
