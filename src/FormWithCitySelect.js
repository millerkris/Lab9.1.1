import React, { useState } from 'react';

const CitySelect = ({ selectedCity, handleCityChange }) => {
    return (
        <select value={selectedCity} onChange={handleCityChange}>
            <option value="Rio">Рио-де-Жанейро</option>
            <option value="Other">Другой город</option>
        </select>
    );
};

const FormWithCitySelect = () => {
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Действия при отправке формы, например, отправка данных на сервер или другая обработка
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Выберите город:
                <CitySelect selectedCity={selectedCity} handleCityChange={handleCityChange} />
            </label>
            <button type="submit">Отправить</button>
            {selectedCity !== 'Rio' && <p>Нет, это не Рио-де-Жанейро!</p>}
        </form>
    );
};

export default FormWithCitySelect;