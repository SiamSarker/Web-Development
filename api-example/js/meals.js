const listOfMeals = search => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => printMeals(data.meals))
}

const printMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick='mealDetails(${meal.idMeal})' class="card">
        <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}...see more</p>
        </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
}

const searchMeal = () => {
    const searchField = document.getElementById('searchValue')
    const search = searchField.value;
    listOfMeals(search);
    searchField.value = '';
}

const mealDetails = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        printmealDetails(data.meals[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const printmealDetails = meal => {
    const mealDetailsContainer = document.getElementById('meal-details-container');
    mealDetailsContainer.innerHTML = '';

    const mealDiv = document.createElement('div');
    // mealDiv.classList.add('card');
    mealDiv.innerHTML = `
        <div class="card text-center">
        <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 400)}...see more</p>
        </div>
        </div>
        `;
        mealDetailsContainer.appendChild(mealDiv);
}



// <div class="card" >
//                     <img class="card-img-top" src="..." alt="Card image cap">
//                     <div class="card-body">
//                       <h5 class="card-title">Card title</h5>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <a href="#" class="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </div>