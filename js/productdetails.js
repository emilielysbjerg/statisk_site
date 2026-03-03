const id = new URLSearchParams(window.location.search).get("id");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

const container = document.querySelector("#productcontainer");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  console.log(json);
  container.innerHTML = `
   <a href="productlist.html" class="back">← Back</a>

      <div class="product_image">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${json.id}.webp"
          alt="Sort T-shirt"
        />
    <div class="product_text">
            <h1>Sort T-shirt${json.productdisplayname}</h1>
            <p class="old_price">199 kr.</p>
            <p class="price">${json.price}kr.</p>
            <button class="add_to_basket">ADD TO BASKET</button>
          </div>`;
}

getData();
