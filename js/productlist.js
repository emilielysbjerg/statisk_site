document
  .querySelectorAll("#filter button")
  .forEach((knap) => knap.addEventListener("click", filter));

document
  .querySelectorAll("#sorter button")
  .forEach((knap) => knap.addEventListener("click", sorter));

let allData;
let udsnit;

function sorter(e) {
  if (e.target.dataset.price) {
    const dir = e.target.dataset.price;
    if (dir == "up") {
      udsnit.sort((a, b) => a.price - b.price);
    } else {
      udsnit.sort((a, b) => b.price - a.price);
    }
  } else {
    const dir = e.target.dataset.text;
    console.log(dir);
    if (dir == "az") {
      udsnit.sort((a, b) =>
        a.productdisplayname.localeCompare(b.productdisplayname, "da"),
      );
    } else {
      udsnit.sort((a, b) =>
        b.productdisplayname.localeCompare(a.productdisplayname, "da"),
      );
    }
  }
  showProducts(udsnit);
}

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      allData = udsnit = data;
      showProducts(allData);
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  console.log(valgt);
  if (valgt == "All") {
    showProducts(allData);
  } else {
    udsnit = allData.filter((element) => element.gender == valgt);
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
