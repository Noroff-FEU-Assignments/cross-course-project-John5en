const productDetailsContainer = document.querySelector(".productDetails");

const productString = document.location.search;

const productParameters = new URLSearchParams(productString);

const id = productParameters.get("id");

console.log(id);

const productDetailsLink =
  "https://eivindjohnsen.site/gamehub/wp-json/wc/store/products/" + id;

async function getProduct() {
  try {
    const response = await fetch(productDetailsLink);
    const product = await response.json();

    console.log(product);

    createHtml(product);
  } catch (error) {
    console.log(error);
  }
}

getProduct();

function createHtml(product) {
  productDetailsContainer.innerHTML = `<p class="gamename"<h1>${product.name}</h1></p>
  <p class="gamedesc"${product.description}</p>
  <img class="gamepicture" style="background-image: url(${product.images[0].src});"></div>
  <p class="gamePrice"${product.prices.price}</p>`;
}
