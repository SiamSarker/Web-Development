const listOfMeals = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => printMeals(data.meals))
    // .then(data => console.log(data.meals[0].strMeal))
}

const printMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('card');
        mealDiv.innerHTML = `
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
}

listOfMeals();



// <div class="card">
//                   <img class="card-img-top" src="..." alt="Card image cap">
//                   <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                   </div>
//                 </div>


// const countryDiv = document.createElement('div'); 
//         countryDiv.classList.add('country');
//         countryDiv.innerHTML = `
//             <p>Country Name: ${country.name.common}</p>
//             <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
//             <button onclick='countryDetails("${country.cca2}")'>Details</button>
//         `;
//         countryContainer.appendChild(countryDiv);