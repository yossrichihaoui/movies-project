import React, { useEffect, useState } from 'react'
import {movie} from './Data';
import Moviecards from './Moviecards';
import Mybuttons from './Mybuttons';

function Movielist() {
    const [movies,setmovies]=useState(movie)
    console.log(movies);
    const [timer,settimer]=useState(0);


    
    /*useEffect(()=>{const x=JSON.parse(localStorage.getItem("movie"));
    setmovies([...movies,x])},[]);
    */
   useEffect(()=>{settimer(timer+1)},[timer])
    console.log(movies);
  return ( 
    <div style={{display:"flex",flexWrap:'wrap'}}>
     <span>{timer}</span>
        { movies.map(e=>
       <Moviecards movie={e}/>
     )}
     </div>
  )
}

export default Movielist;
