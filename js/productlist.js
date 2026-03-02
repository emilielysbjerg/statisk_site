const klikKategori = new URLSearchParams(window.location.search).get(
  "category",
);

const container = document.querySelector(".galleri");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}`;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  let markup = "";
  json.forEach((product) => {
    console.log(product);

    markup += `
          <article>
          <a href="product.html" class="product_card_sale">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" </>
           <h3>${product.productdisplayname}</h3>
            <p class="old_price">199 kr.</p>
               <p class="price">${product.price}</p>
            <p class="procent">${product.discount}%</p>
            <span class="sold_label">Udsolgt</span>
          </a>
        </article>
    `;
  });

  container.innerHTML = markup;
}

getData();
