const myArticleContainer = document.querySelector('#myArticleContainer');

const gridItem = document.createElement('div');
gridItem.classList.add('grid-item');
gridItem.innerHTML = `
  <img
    src="https://s3.amazonaws.com/vinils3/wp-content/uploads/2014/06/Neworder_technique_capa.jpg"
    alt="album cover technique"
    class="album-cover"
  />
  <div class="star">
    <i onclick="myFavorite(this)" class="fa-regular fa-star"></i>
  </div>
`;

myArticleContainer.appendChild(gridItem);