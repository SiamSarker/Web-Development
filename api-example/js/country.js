const countryAll = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => printCoutryAll(data))
}

const printCoutryAll = countries => {

    const countryContainer = document.getElementById('countryContainer');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div'); 
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <p>Country Name: ${country.name.common}</p>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `;
        countryContainer.appendChild(countryDiv);

    });
}


countryAll()