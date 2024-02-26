import React from 'react'

function Mybuttons(props) {
  console.log(props)
    return (
    <div>
      <button style={{borderRadius:"20px", backgroundColor:"black" ,color:"white"}}>
           {props.children}
      </button>


    </div>
  )
}

export default Mybuttons