
import { createContext, useContext, useState } from "react";
import citiesJSON from "../data/city_of_turkey.json"

//context oluşturma
const WeatherContext = createContext();



export const WeatherProvider = ({ children }) => {

    //state hava durumu güncellemesi için
    const [weather, setWeather] = useState([]);


    //şehir gübcelleme

    //citiesJSON datasından dataları use state ile defaut olarak alıyoruz
    const [city, setCity] = useState(citiesJSON.find(item => item.id === 33));
    console.log(citiesJSON.find(item => item.id === 33));

    //günler listesi
    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ];


    //provider a yollanacak değerler
    const value = {
        city,
        setCity,
        citiesJSON,
        days,
        weather,
        setWeather,
    };

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
}


//export işlemi
export const useWeather = () => useContext(WeatherContext);