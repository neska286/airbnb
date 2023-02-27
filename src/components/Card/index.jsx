import React from 'react'
import StarIcon from '../../assets/star-icon.svg';
import './card.css';

const Card = ({data}) => {
  let badgeText =""
  if(data.openSpots === 0){
   badgeText = "SOLD OUT"
  }else if(data.location === "Online"){
   badgeText = "ONLINE"
  }
  return (
    <section style={{display:'flex',flexDirection:'column'}}>
      {/* <div className='sold-out'>
        <span>{data.status}</span></div> */}
        {badgeText &&  <div className='sold-out'>
        <span>{badgeText}</span></div>}
    <img
              src={data.image}
              alt="airbnb Logo"
              style={{position:'relative'}}
            />
            <div>
                <div className='star-content'>
                <img
              src={StarIcon}
              alt="star icon"
              width="14"
              height="14"
            />  
            <span className='star-num'> {data.rating}</span>
            <span className='star-rated'>({data.number}) •</span> 
            <span className='star-rated'>{data.country}</span>
                </div>
                <p className='star-text'>{data.text}</p>
                <span cl>From ${data.numberOfPerson} </span>/ person

            </div>
    </section>
  )
}

export default Card