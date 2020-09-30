import React, { useContext } from 'react';
import { AllPlaceDataContext } from '../../App';
import fakeDataDetails from '../../fakedata/fakeDataDetails';
import Header from '../Header/Header';
import MapContainer from '../MapContainer/MapContainer';
import './Destination.css';
import SinglePlace from './SinglePlace';

const Destination = () => {
    const [placeData, setPlaceData] = useContext(AllPlaceDataContext);
    
    const filterPlace = fakeDataDetails.filter(place => place.place === placeData.areaname)


    return (
        <section className='destnation-sec'>
            <Header/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-7">
                        <h5 className='content-title'>Stay in {placeData.areaname}</h5>
                        <br/>
                        {
                            filterPlace.map(place => <SinglePlace key={place.id} place={place} />)
                        }
                    </div>
                    <div className="col-md-5">
                        <MapContainer placeData={placeData}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destination;