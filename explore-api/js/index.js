function loaduser(){
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(res => res.json())
    .then(user => dispalyuser(user));
}

function dispalyuser(data) {
    const ul = document.getElementById('users-list');
    for (const user of data){
        const li = document.createElement('li');
        li.innerHTML = user.name;
        ul.appendChild(li);
    }
}

