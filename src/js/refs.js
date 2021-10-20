import { debounce } from "lodash";
import API from "./fetchCountries.js";
import countries from "../templates/countries";
import card from "../templates/country";

const ul = document.getElementById("list");
const article = document.getElementById("article");
const input = document.querySelector(".input");

input.addEventListener("input", debounce(onSearch, 500));

function onSearch(e) {
  let searchQuery = e.target.value;

  if (searchQuery !== "") {
    API.fetchCountries(searchQuery).then(countryCard);
  }
}

function countryCard(country) {
  if (country.length === 1) {
    article.innerHTML = card(country);
    ul.innerHTML = "";
  } else if (country.length > 1 && country.length < 11) {
    ul.innerHTML = countries(country);
    article.innerHTML = "";
  }
}

// fetch("https://restcountries.com/v2/name/peru").then((response) =>
//   console.log(response.json())
// );
