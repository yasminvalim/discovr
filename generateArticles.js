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
      <p class="album-title"> Tecnique - New Order </p>
      <div class="star">
        <i onclick="myFavorite(this)" class="fa-regular fa-star"></i>
      </div>
      </div>
      <div class="grid-item">
      </div>
`;

myArticleContainer.appendChild(gridItem);