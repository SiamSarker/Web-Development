const listOfMeals = search =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => printMeals(data.meals))
}

const printMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
        <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}...see more</p>
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