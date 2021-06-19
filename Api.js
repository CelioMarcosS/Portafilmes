const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const API_KEY = 'd34eba31728ed5ea15615824c6b82263';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';

function Filmecarrega(){
    let xhr = new XMLHttpRequest ();

    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular?api_key=' + API_KEY);
    xhr.onload = Filmexibe;
    xhr.send();
}


function Filmexibe(eve){
    let Htmltxt = '';

    let filmes = JSON.parse (eve.target.responseText);

    for (let i = 0; i < filmes.results.length; i++) {
        let titulo = filmes.results[i].title;
        let sinopse = filmes.results[i].overview;
        let imagem = IMG_PREFIX + filmes.results[i].poster_path;


        Htmltxt += ` <div class="col-md-3">
        <img src="${imagem}" class="news-image">
        <div class="card-block">
                    <h4 class=" title-small"><a href="Avatar.html">${titulo}</a></h4>
                  </div>
            <p class="card-text"><small class="text-time"><em>${sinopse}</em></small></p>
              </div>`
    }

    document.getElementById('Quadro').innerHTML = Htmltxt;
}