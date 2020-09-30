import React from 'react';
import './TourItem.css';

const TourItem = ({placeItem, handleShowDetail}) => {
    const {img, areaname} = placeItem;

    return (
        <div onClick={()=> handleShowDetail(placeItem)} className='col-4'>
            <img className='img-fluid1' src={img} alt={areaname}/>
            <p className='title'>{areaname}</p>
        </div>
    );
};

export default TourItem;