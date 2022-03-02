import React, { useRef, useState } from 'react';
import evn from "../evn.json";
import './weather.css'

function Weather() {
    const [weather, SetWeather] = useState('');
    // const refCity = useRef();

    const format_date = (d) => {
        let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    function api(event) {
        event.preventDefault();

        fetch(evn.url + event.target[0].value + '&units=metric' + '&appid=' + evn.key + '&lang=ru')
            .then(response => {
                return response.json()
            })
            .then((result) => {
                console.log(result)
                SetWeather(result)
            });
    }



    return (
        <div className="container">
            <div className="row">
                <div className='head col text-center mt-5'>
                    <h1 className=''>Погода</h1>
                    <h2>{format_date(new Date())}</h2>
                    <form onSubmit={api}>
                        <input type="text" className='city' />
                        <button type='submit' className='search'>Искать</button>
                    </form>
                </div>
                {(typeof weather.main !== "undefined") ? (
                    <div className='row mt-5 justify-content-center'>
                                <div className='col-4 text-end'>
                                    <h3> {weather.name}</h3>
                                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" className='icon' />                                </div>
                                <div className='col-4'>
                                <h1>{Math.round(weather.main.temp)}&deg;</h1>
                                    <p>{weather.weather[0].description}</p>
                                    <p>По ощущениям: {Math.round(weather.main.feels_like)}</p>
                                </div>
                    </div>
                ) : (
                    <div className='text-center mt-5'>
                        <h3>Такого города нет в нашем списке</h3>
                    </div>
                )}

            </div>
        </div>


    )
}
export default Weather;