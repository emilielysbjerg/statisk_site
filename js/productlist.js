document
  .querySelectorAll("button")
  .forEach((knap) => knap.addEventListener("click", filter));

let allData;

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      showProducts(allData);
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  console.log(valgt);
  if (valgt == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((element) => element.gender == valgt);
    showProducts(udsnit);
  }
}

const klikKategori = new URLSearchParams(window.location.search).get(
  "category",
);

const container = document.querySelector(".galleri");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}&limit=50`;

function showProducts(json) {
  let markup = "";
  json.forEach((product) => {
    //console.log(product);

    markup += `
          <article class="${product.soldout && "udsolgt"}">
          <a href="product.html?id=${product.id}" class="product_card_sale">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" </>
           <h3>${product.productdisplayname}</h3>

            ${product.discount ? `<p class="old_price">${product.price}</p>` : ""}


            <p class="price">${product.price}</p>
            <p class="procent"> ${product.discount ? `Nedsat ${product.discount}%` : ""}</p>
          
           
          </a>
        </article>
    `;
  });

  container.innerHTML = markup;
}

getData();
