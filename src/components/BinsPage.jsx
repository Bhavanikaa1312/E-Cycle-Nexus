import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BinsPage = () => {
 
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


    const { cityName } = useParams();
    const navigate = useNavigate();

 
    const binsData = cityBinsMap[cityName] || [];

    return (
        <div className="bins-page">
            <h2>Bins in {cityName}</h2>
            <div className="bins-container">
                {binsData.map((bin) => (
                    <div key={bin.index} className="bin-box" onClick={() => navigate(`/bins/${cityName}/${bin.index}`)}>
                        <h3>Bin {bin.index}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BinsPage;
