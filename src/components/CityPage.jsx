import React from 'react';
import { useNavigate } from 'react-router-dom';


const CityPage = () => {
    const navigate = useNavigate(); 

   
    const cities = [
        { name: 'Chennai', imageUrl: 'images/chennai_city.jpg' },
        { name: 'Coimbatore', imageUrl: 'images/coimbatore_city.png' },
        { name: 'Madurai', imageUrl: 'images/madurai_city.jpg' },
        { name: 'Kochi', imageUrl: 'images/kochi.jpg' },
        { name: 'Kollam', imageUrl: 'images/kollam.jpg' },
        { name: 'Calicut', imageUrl: 'images/calicut.jpeg' },
        
    ];
    const handleCityClick = (cityName) => {
        navigate(`/bins/${cityName}`);
    };

    return (
        <div className="city-page">
            {cities.map((city, index) => (
                <div
                    key={index}
                    className="city-box"
                    style={{ backgroundImage: `url(${city.imageUrl})` }}
                    onClick={() => handleCityClick(city.name)} 
                >
                    <div className="text-overlay">
                        <h2>{city.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CityPage;
