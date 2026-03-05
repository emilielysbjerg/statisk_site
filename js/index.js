const container = document.querySelector(".category_list_container");
const endpoint = "https://kea-alt-del.dk/t7/api/categories";

function getData() {
  //* camelcase - er en måde at skrive syntaks på //*
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData); //*Dette er en promisechain. Resten a scriptet kan arbejde videre, det er asynkron, hvis det ikke var det ville resten af siden gå i stå//*
} //* 'fetch' er en metode, det kan man ikke selv navngive. Skal derfor altide skrive 'fetch'//*

function showData(data) {
  console.log(data);

  let markup = "";
  data.forEach(
    (category) =>
      (markup += `<a class="category_item" href="productlist.html?category=${category.category}">${category.category}</a>`),
  );
  container.innerHTML = markup;
}
getData();
