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

function loadalbums(){
    fetch('https://jsonplaceholder.typicode.com/albums') 
    .then(res => res.json())
    .then(albums => dispalyalbums(albums));
}

function dispalyalbums(albums) {
    const t = document.getElementById('album-list');
    for (const album of albums){
        const td = document.createElement('tr');
        td.innerHTML = `<tr>
        <td>${album.userId}</td>
        <td>${album.id}</td>
        <td>${album.title}</td>
        </tr>
        `
        t.appendChild(td);
    }
}