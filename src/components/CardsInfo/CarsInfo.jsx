import React from 'react'
import './carsinfo.css'
import data from './cars.json'

const carsItems = data.map(data =>
    <div className={'card_container_'+ data.type}>
        <img src={+data.image} alt={data.type}></img>
        <h2>{data.type}</h2>
        <p>{data.info}</p>
        <button className={'btn_' + data.type}>Learn More</button>
    </div>
);


const CarsInfo = () => {
    return (
        <div className='card_container'>
            {carsItems}
        </div>
    )
}

export default CarsInfo