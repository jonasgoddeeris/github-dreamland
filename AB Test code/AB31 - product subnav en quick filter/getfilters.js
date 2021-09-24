var specification = document.querySelector("#productsFacets");
var firstUL = specification.getElementsByTagName('ul')[0];
var firstFilters = firstUL.getElementsByTagName('a');

for (let i = 0; i < firstFilters.length; i++) {
  firstFilters[i].removeAttribute("role");
}
var filterDIV = document.getElementById('filters');
filterDIV.innerHTML += firstFilters;
