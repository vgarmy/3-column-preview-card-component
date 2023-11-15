import React from 'react'
import './card.css'
import IconSedans from './../../images/icon-sedans.svg'
import IconSuvs from './../../images/icon-suvs.svg'
import IconLuxury from './../../images/icon-luxury.svg'

const Card = () => {
    return (
        <div className='container' role="main">
            <div className='card_container'>
                <div className='card_container_one'>
                    <img src={IconSedans} alt="Sedan"></img>
                    <h2>Sedans</h2>
                    <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                        or on your next road trip.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className='card_container_two'>
                    <img src={IconSuvs} alt="Suvs"></img>
                    <h2>SUVs</h2>
                    <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                        and off-road adventures.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className='card_container_three'>
                    <img src={IconLuxury} alt="Luxury"></img>
                    <h2>Luxury</h2>
                    <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                        rental and arrive in style.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Card