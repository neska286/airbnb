import React, { useState } from 'react'

const Button = () => {
    const[likes,setLikes]=useState(100);
   const[isClicked,setIsClicked] =useState(false)

  function handleClick(){
    if(isClicked){
        setLikes(likes-1)

    }else{
        setLikes(likes+1)
    }
    setIsClicked(!isClicked)
  }
   
  return (
    <div style={{textAlign:'center'}}>
    <button onClick={handleClick} className={ `like-button ${isClicked && 'liked'}` } >
    <span className="likes-counter">{ `Like | ${likes}` }</span>
    </button>
   
    </div>
  )
}

export default Button