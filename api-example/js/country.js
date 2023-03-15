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
            <button onclick='countryDetails("${country.cca2}")'>Details</button>
        `;
        countryContainer.appendChild(countryDiv);

    });
}

const countryDetails = code => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => printCoutryDetails(data[0]))
}


const printCoutryDetails = country => {
    const countryDiv = document.getElementById('countryDetails');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <p>Country Name: ${country.name.common}</p>
            <img src="${country.flags.png}">
        `;
}

countryAll()