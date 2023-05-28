const myArticleContainer = document.querySelector('#myArticleContainer');

const gridItem = document.createElement('div');
gridItem.classList.add('grid-item');
gridItem.innerHTML = `
<div class="grid-item">
        <img
        src="https://s3.amazonaws.com/vinils3/wp-content/uploads/2014/06/Neworder_technique_capa.jpg"
        alt="album cover technique"
        class="album-cover"
      />
      <a href="/article.html" class="album-title"> Tecnique - New Order </a>
      <div class="star">
        <i onclick="myFavorite(this)" class="fa-regular fa-star"></i>
      </div>
      </div>
      <div class="grid-item">
      </div>
`;

myArticleContainer.appendChild(gridItem);

const myArticleContainer1 = document.querySelector('#myArticleContainer1');

const gridItem1 = document.createElement('div');
gridItem1.classList.add('grid-item');
gridItem1.innerHTML = `
<div class="grid-item">
        <img
        src="https://upload.wikimedia.org/wikipedia/pt/7/78/The_Cure_-_Three_Imaginary_Boys.jpg?20170429000415"
        alt="album cover hree Imaginary Boys - The Cure"
        class="album-cover"
      />
      <p class="album-title"> Three Imaginary Boys - The Cure</p>
      <div class="star">
        <i onclick="myFavorite(this)" class="fa-regular fa-star"></i>
      </div>
      </div>
      <div class="grid-item">
      </div>
`;

myArticleContainer1.appendChild(gridItem1);

const myArticleContainer2 = document.querySelector('#myArticleContainer2');

const gridItem2 = document.createElement('div');
gridItem2.classList.add('grid-item');
gridItem2.innerHTML = `
<div class="grid-item">
        <img
        src="https://i.discogs.com/JerDpwAtyOYhCelqulatMR2W6NHwifCUymWYKeHNuzg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjgy/NDcyLTE1NDA3OTI4/ODUtOTY0OC5qcGVn.jpeg"
        alt="album cover Suspiria - Thom Yorke"
        class="album-cover"
      />
      <p class="album-title"> Suspiria - Thom Yorke</p>
      <div class="star">
        <i onclick="myFavorite(this)" class="fa-regular fa-star"></i>
      </div>
      </div>
      <div class="grid-item">
      </div>
`;

myArticleContainer2.appendChild(gridItem2);