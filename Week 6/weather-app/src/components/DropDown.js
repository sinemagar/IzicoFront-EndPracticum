import { useWeather } from "../context/WeatherProvider";

function Dropdown() {

  //provider dan alınacak veriler
    const { city, setCity, citiesJSON } = useWeather();
  

    //citiesJSON data filtreleme
    const changeCity = (e) => {
      citiesJSON.filter((item) => {
        if (item.name === e.target.value) {
          setCity(item);
        }
      });
    };
  
    return (
      <div className="select-box">
        <select
          name="cities"
          id="cities"
          value={city.name}
          onChange={changeCity}
        >
          {citiesJSON.map((item, i) => {
            return (
              <option value={item.name} key={i}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  
  export default Dropdown;