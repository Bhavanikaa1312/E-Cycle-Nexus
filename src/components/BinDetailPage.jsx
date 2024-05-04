import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const BinDetailPage = () => {
 
    const { cityName, binIndex } = useParams();

   
    const cityBinsMap = {
        Chennai: [
            { index: 1, lat: 12.981241, lng: 80.209450 },
            { index: 2, lat: 13.073226, lng: 80.260918 },
            { index: 3, lat: 13.0067, lng: 80.2206},
            { index: 4, lat: 13.038063, lng: 80.159607 }
        ],
        Coimbatore: [
            { index: 1, lat:  11.020522,  lng:76.966698  },
            {index: 2, lat: 10.985936,lng:76.965408},
            {index:3,lat:11.004556,lng:76.961632}
           
        ],
        Madurai:[
            {index:1 , lat:9.9195,lng:78.1193},
            {index:2 , lat:9.9446,lng:78.1556}
        ],
        Kochi:[
            {index:1 , lat: 10.023286,lng:76.311371},
            {index:2 , lat: 10.011104 ,lng: 76.343877},
            {index:3 , lat:10.026617,lng:76.308411}
        ],
        Kollam:[
            {index:1 ,lat:8.8757,lng:76.5889},
            {index:2 , lat :8.8817,lng: 76.5685}
        ],
        Calicut:[
            {index:1 , lat:11.258753,lng: 75.780411}

        ]
        
        
    };

  
    const binsData = cityBinsMap[cityName] || [];


    const bin = binsData.find(bin => bin.index === Number(binIndex));

    useEffect(() => {
        
        const map = L.map('map').setView([bin.lat, bin.lng], 30);
        
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 15,
        }).addTo(map);
        
       
        L.marker([bin.lat, bin.lng])
            .addTo(map)
            .bindPopup(`Bin ${bin.index}`)
            .openPopup();
        
        
        return () => {
            map.remove();
        };
    }, [bin]);

    return (
        <div className="bin-details-page">
            <h2>Bin {binIndex} in {cityName}</h2>
            <div id="map" className="map-container"></div>
        </div>
    );
};

export default BinDetailPage;
