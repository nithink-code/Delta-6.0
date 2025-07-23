import { useState } from 'react';
import InfoBox from './InfoBox.jsx';
import Search from './Search.jsx';

export default function Weather(){
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 308.14,
        humidity : 70,
        temp: 303.13,
        tempMax: 303.13,   
        tempMin: 303.13,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };

     return(
       <div>
         <h2 style={{fontFamily: "TimesNewRoman",textAlign:"center"}}>Weather App</h2>
         <Search updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
       </div>
     );
}