let submit = document.getElementById('submit');
let ul = document.getElementById('ul');
// let data;

const url = 'https://api.themoviedb.org/3/movie/11?api_key=c43eafb6cfde3357615b65d291332480';

fetch(url).then(res => res.json()).then(result => {
    data = result;
    let genres = data.genres;

    genres.forEach(element => {
        console.log(element.name);

        ul.innerHTML = `
            <li class="li"><a>  ${element.id} ${element.name} </a></li> 
        `
    });


}).catch(err => { console.error(err) });

// console.log(data);