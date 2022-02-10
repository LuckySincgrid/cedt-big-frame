import { useEffect , useState} from 'react';
import './App.css';
import Lottie from 'react-lottie'
import animationData from './lotties/partly_cloudy.json';

/* hosting react on github pages for free 
    - make sure the github repo for the code is public
    
    https://betterprogramming.pub/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb
*/


function App() {
  const API_KEY = "89c13ea938871f343abc1e564db2d8f9"
  const lat = "28.6667"
  const longt = "77.2167"
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longt}&appid=${API_KEY}`

  const [weatherdataJSON, setWeatherData] = useState({});


  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(BASE_URL)
      .then(Response => Response.json())
      .then(data => setWeatherData(data.main))
      console.log("Just to delay the api calls")
    }, 3000);


    console.log(weatherdataJSON)
    return () => clearTimeout(timer);
  }, [weatherdataJSON]) 

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return (
    <div className="App">
      <div className="App_info">
        <h2 className="Temp_text">Min. Temperature: {weatherdataJSON.temp_min}K</h2>
        <h2 className="Temp_text">Max. Temperature: {weatherdataJSON.temp_max}K</h2>
        <h2 className="Temp_text">Humidity: {weatherdataJSON.humidity}%</h2>
      </div>
      <div className="App_animation">
         <Lottie 
            options={defaultOptions}
              height={50}
              width={50}
      />
      </div>  
    </div>
  );
}

export default App;