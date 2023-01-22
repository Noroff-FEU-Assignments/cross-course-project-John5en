const gamesUrl = "https://eivindjohnsen.site/gamehub/wp-json/wc/store/products";

const gamesContainer = document.querySelector(".games");

async function getGames(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    gamesContainer.innerHTML += `<br> 
    <a href="productdetails.html?id=${product.id}" <h2>${product.name}</h2>
    <div class="image" style="background-image: url(${product.images[0].src});"></div>
    `;
  });
}

getGames(gamesUrl);
