import React from 'react';
import './Destination.css';

const SinglePlace = ({place}) => {
    const {title, facilities, bed, bath, guests, img, nightprice, rate, star} = place;
    
    return (
        <div className="single-place card mb-3" style={{maxWidth: '540px'}}>
            <div className="row no-gutters">
                <div className="col-md-5">
                    <img className='img-fluid' src={place.img} alt=""/>
                </div>
                <div className="col-md-7">
                    <div className="card-body pt-0 pb-1">
                        <h5 className="card-title text-dark">{title}</h5>
                        <div className="d-flex">
                            <small className="text-dark mr-1">{guests} guests</small>
                            <small className="text-dark mr-1">{bed} bedrooms</small>
                            <small className="text-dark mr-1">{bath} bath</small>
                        </div>
                        <small className='text-dark'>{facilities}</small>
                        <div className="d-flex justify-space-between mt-3">
                            <img width='20px' height='20px' src={star} alt=""/>
                            <p className='ml-1 text-dark'>{rate}</p>
                            <h6 className='ml-5 text-dark'>${nightprice}/<small>pernight</small></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePlace;