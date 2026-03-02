const endpoint = "https://kea-alt-del.dk/t7/api/";

const container = document.querySelector("#linkcontainer");
function getData() {
  //* camelcase - er en måde at skrive syntaks på //*
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData); //*Dette er en promisechain. Resten a scriptet kan arbejde videre det er asynkron, hvis det ikke var det ville resten af siden gå i stå//*
} //* 'fetch' er en metode, det kan man ikke selv navngive. Skal derfor altide skrive 'fetch'//*

function showData(json) {
  console.log(data);
  json.forEach((fisk) => {
    ` <a href="productlist.html">kategori>$(fisk.category)</a>`;
  });
}
getData();
