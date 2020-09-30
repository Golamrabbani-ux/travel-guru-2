import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow  } from '@react-google-maps/api';
import locations from './Locations';

const MapContainer = ({placeData}) => {
    console.log(placeData.location);
    const [selected, setSelected] = useState({})
    const [currentPosition, setCurrentPosition] = useState({})

    const mapStyles = {        
        height: "480px",
        width: "100%",
        borderRadius: "10px"
    };

    const onSelected = item => {
        setSelected(item)
    }

    //current location
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(successLocation)
    } ,[])

    const successLocation = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        setCurrentPosition(currentPosition)
    }



    return (
        <LoadScript googleMapsApiKey='AIzaSyA7-tD0SyDpi8Kj4O33KtJke-hnY6MvYdc'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={placeData.location}>
                <Marker position={placeData.location}/>
                {
                    locations.map(item => <Marker 
                        position={item.location} 
                        key={item.name}
                        onClick={()=> onSelected(item)}
                    />)
                }
                {
                    currentPosition.lat && <Marker position={currentPosition} />
                }
                {
                    selected.location &&
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={()=> setSelected({})}
                        >
                        <p>{selected.name}</p>
                      </InfoWindow>
                    )
                }
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;