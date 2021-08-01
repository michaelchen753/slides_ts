import React, { useState, useEffect } from 'react'
import people from '../data';
import './Slide.scss';
export default function Slide() {
    const [index, setIndex] = useState(0);
    const [nextTitle, setNextTitle]= useState(people[1].title);
    const [prevTitle, setPrevTitle]= useState(people[people.length-1].title)
    const { image, name, title, quote} = people[index];
  
    const next = ()=>{
      const nextSlide = index === people.length - 1 ? 0 : index + 1;
      setIndex(nextSlide);
    }
    const prev = ()=>{
      const prevSlide = index === 0 ? people.length - 1 : index - 1;
      setIndex(prevSlide);
    }
  useEffect(()=>{
      const nTitle = index === people.length - 1? people[0].title: people[index + 1].title;
      setNextTitle(nTitle);
      const pTitle = index === 0? people[people.length - 1].title: people[index - 1].title;
      setPrevTitle(pTitle);
  },[index])
    return (
        <div className='slide__container'>
            <button
                onClick={prev}
                className='prev'
                >{prevTitle}
            </button>
            <div className='slide'>
                <img className='slide__image'src={image} alt={name}/>              
                <div className='slide__name'>{name}</div>
                <div className='slide__title'>{title}</div>
                <p className='slide__qutoe'>{quote}</p>
            </div>
            <button 
                onClick={next}
                className='next'
                >{nextTitle}
            </button>
        </div>
    )
}
