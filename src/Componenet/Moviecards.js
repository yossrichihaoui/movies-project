import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';
function Moviecards({movie}) {
    const x ={height:"200px" , overflowY:"auto"}
  return (
    <div style={{display:"flex",gap:"50px" }}>
    <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={movie.poster} />
 <Card.Body>
   <Card.Title id="title" >{movie.title}</Card.Title>
   <Card.Text  style={x}>
     {movie.description }
   </Card.Text>
   <ReactStars
count={5}
size={40}
value={movie.rating}
activeColor="#ffd700"
/>
 </Card.Body>
</Card>
<iframe src={movie.trailer} width="800" height= "600"/>
</div>
  )
}

export default Moviecards