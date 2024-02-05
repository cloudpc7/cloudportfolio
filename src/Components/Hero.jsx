import React, { useState, useEffect } from 'react'
import data from "../data"

const Hero = () => {

    const [cards, setCards] = useState(data.data.pages);
    const [activeIndex, setActiveIndex] = useState(0);
    const [heroCard, setHeroCard] = useState(data.data.pages[0]);

    const addHeroCards = () => {
        if (activeIndex + 1 >= cards.length) return;
        setHeroCard(cards[activeIndex + 1]);;
        setActiveIndex(activeIndex + 1);
    }

    const subtractHeroCards = () => {
        if(activeIndex <= 0) return;
        setHeroCard(cards[activeIndex - 1]);
        setActiveIndex(activeIndex - 1);
    }

    return (
        <div className="hero">
            <button className="btn one" onClick={subtractHeroCards} disabled={activeIndex <= 0}>&lt;</button>
            <div className="hero-title">
                    <h2>{heroCard.title}</h2>
                </div>
            <div className="hero-text">
                <p>
                    {heroCard.document}
                </p>
            </div>
            <button className="btn two" onClick={addHeroCards} disabled={activeIndex + 1 >= cards.length}>&gt;</button>
        </div>
    )
  }
  
  export default Hero;