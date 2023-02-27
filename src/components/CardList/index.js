import React from 'react'
import Card from '../Card'
import './cardList.css';
import ImageFirst from '../../assets/image-one.svg';
import ImageSecond from '../../assets/wedding.svg';
import ImageThird from '../../assets/imag-three.svg';

const CardContent = [
  {id:1,image:ImageFirst,rating:'5',number:6.0,country:'USA',text:'Life lessons with Katie Zaferes',numberOfPerson:136,Location:"",openSpots:0},
  {id:2,image:ImageSecond,rating:5.0,number:6,country:'USA',text:'Life lessons with Katie Zaferes',numberOfPerson:136,Location:"ONLINE",openSpots:0},
  {id:3,image:ImageThird,rating:7.0,number:6,country:'USA',text:'Life lessons with Katie Zaferes',numberOfPerson:136,Location:"",openSpots:2},
// {id:4,title:"Life Lessons with katie Zaferes",
// desc:"i'll",
// price:136,
// image:ImageFirst,
// stats:{
//   rating:5.0,
//   reviewCount:6
// },
// location:"Online",
// openSpots:0}
]
const CardList = () => {
 
  return (
    <section className='cardList-wrapper'>
      {CardContent.map((item)=>(
        <Card
        key={item.key} 
        data={item}/>
      ))}
         
    </section>
  )
}

export default CardList