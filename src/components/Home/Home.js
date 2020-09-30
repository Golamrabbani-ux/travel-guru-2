import React, { useContext, useState } from 'react';
import './Home.css';
import fakeData from '../../fakedata/fakeData';
import TourItem from '../TourItem/TourItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AllPlaceDataContext } from '../../App';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';




const Home = () => {
    const [placeData, setPlaceData] = useContext(AllPlaceDataContext)
    const [showDetail , setShowDetail] = useState(fakeData[0]);

    const handleShowDetail = (thisPlace, index) =>{
        setShowDetail(thisPlace);
        setPlaceData(thisPlace);
    }

    return (
        <section className='home-sec'>
            <div className="container">
                <Header/>
                <div className="row">
                    <div className="col-md-5" style={{marginTop: '100px'}}>
                        <h1 className='main-title'>{showDetail.areaname}</h1>
                        <p>{showDetail.shortdetails}</p>
                        <Link to='/booking'>
                            <button className="button px-4"><span className='mr-2'>Booking</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-7 ">
                       <div className="row align-items-center"  style={{height: '88vh'}}>
                           {
                               fakeData.map((placeItem, index) => <TourItem 
                                    index = {index}
                                    placeItem={placeItem} 
                                    handleShowDetail={handleShowDetail} 
                                    key={placeItem.id}>
                                </TourItem>)
                           }
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;