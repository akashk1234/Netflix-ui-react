import {React,useEffect,useState} from 'react'
import './Banner.css'
import instance from './instance'
import requests from './requests'

function Banner() {

    const base_url = "https://image.tmdb.org/t/p/original/"

    const [movie,setMovie]=useState({})

    const fetchData=async ()=>{
       const response=await instance.get(requests.fetchTrending)
       setMovie(response.data.results[
        Math.floor(Math.random()*response.data.results.length)   //select random index to choose ramdom images
       ]);
    }


    function truncate(str,n){
       return str?.length>n?str.substr(0,n-1)+'...':str
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div
        div className='banner'
          style={{
              backgroundImage: `url(${base_url}${movie.backdrop_path})`,
              backgroundSize: "cover"
          }}>

          <div className='bannerContent'>
            <h1 className='title'>{movie.title}</h1>
            <p className='overview'>{truncate(movie?.overview,200)}</p>
          </div>
      </div>
    
  )
}

export default Banner