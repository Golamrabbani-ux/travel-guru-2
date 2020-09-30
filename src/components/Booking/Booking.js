import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AllPlaceDataContext } from '../../App';
import Header from '../Header/Header';
import './Booking.css';



const Booking = () => {
    const [placeData, setPlaceData] = useContext(AllPlaceDataContext);
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onSubmit = data => {
        console.log(data)
        history.push('/destination')
    };


    return (
        <section className='booking-sec'>
            <div className="container">
                <Header/>

                <div className="row align-items-center justify-space-between" style={{minHeight: '88vh'}}>
                    <div className="col-md-6 pr-5 text-white">
                        <h1 className='main-title'>{placeData.areaname}</h1>
                        <p className='mt-5 pr-5'>{placeData.fulldetails}</p>
                    </div>
                    <div className="col-md-5 pl-5">
                        <div className="booking-card">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="orgin">Orgin</label>
                                    <input type='text' name="orgin" ref={register({ required: true })} id='orgin' className='form-control' placeholder="O r g i n"/>
                                    {errors.orgin && <span>Orgin is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="destination">Orgin</label>
                                    <input type='text' defaultValue={placeData.cityname} name="destination" ref={register({ required: true })} id='destination' className='form-control' placeholder="D e s t i n a t i o n"/>
                                    {errors.destination && <span>Destination is required</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="dataForm">From</label>
                                    <input type="datetime-local" name="dateForm" ref={register({ required: true })} id='dateForm' className='form-control' placeholder="D e s t i n a t i o n"/>
                                    {errors.dateForm && <span>Form is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dataTo">To</label>
                                    <input type="datetime-local" name="dataTo" ref={register({ required: true })} id='dataTo' className='form-control' placeholder="D e s t i n a t i o n"/>
                                    {errors.dataTo && <span>To is required</span>}
                                </div>

                                <input type="submit" value="Start Booking" className='w-100 py-2 button'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;