5702016617184

<script>
const productSpecifications = document.getElementById("Attributes_table").innerText;
const regex = /\d{13}/g;
const ean = productSpecifications.match(regex);
const ean0 = ean[0];
const flix = document.getElementById("flix-script");
flix.setAttribute("data-flix-ean", ean0);
console.log("query ean var available on page?" + " " + query.ean);
</script>