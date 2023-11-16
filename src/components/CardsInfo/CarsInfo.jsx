import React from 'react'
import './carsinfo.css'
import carsinfo from '../../constans'

const CarCard = ({ index, type, info, image }) => (
    <div>
        <div className={'card_container_' + type}>
            <img src={image} alt={type}></img>
            <h2>{type}</h2>
            <p>{info}</p>
            <button className={'btn_' + type}>Learn More</button>
        </div>
    </div>
);

const CarsInfo = () => {
    return (
        <div className='card_container'>
            {carsinfo.map((carsinfo, index) => (
                <CarCard
                    key={carsinfo.type}
                    index={index}
                    {...carsinfo}
                />
            )
            )}
        </div>
    )
}

export default CarsInfo