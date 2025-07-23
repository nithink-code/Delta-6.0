import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./Search.css";

export default function Search({updateInfo}){
  let [city,setCity] = useState("");
  let [error,setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1f8870a43061d9b9bf1cecc1cac952ca";

  let getWeatherInfo = async()=>{
  try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    let result = {
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.humidity,
    weather: jsonResponse.weather[0].description,
    feelslike: jsonResponse.main.feels_like,
    city: jsonResponse.name,
  };
  console.log(result);
  return result;
   }catch(err){
    throw err;
   }
  };

  let handleChange = (event)=>{
      setCity(event.target.value);
  };

  let handleSubmit = async(event)=>{
    try{
     event.preventDefault();
     setCity("");
     let newInfo = await getWeatherInfo();
     updateInfo(newInfo);
    }catch(err){
      setError(true);
    }
  };

   return(
    <div className="container1">
    <form onSubmit={handleSubmit}>
      <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>&nbsp;&nbsp;&nbsp;
      <Button variant="contained" type='submit'>Search</Button>
      <p style={{color:"red"}}>{error && <p>No Such Place Exist!</p>}</p>
    </form>
    </div>
   );
}