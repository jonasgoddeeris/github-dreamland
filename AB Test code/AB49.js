

// var numberpInCart = document.querySelector("#minishopcart_total").getAttribute("data-tms-cart-quantity");
// if (numberpInCart > 0){
// 	// document.querySelector("#minishopcart_total").style.backgroundColor = "#e01011";
// 	document.querySelector("#minishopcart_total").setAttribute('style', 'background-color: #e01011 !important');
// 	console.log("numberpInCart is bigger then 0");
// }



<script>
var repeat = setInterval(function(){
	console.log("ab49intervalRUN");
	if(document.querySelector("#minishopcart_total").getAttribute("data-tms-cart-quantity") !== null) {
		clearInterval(repeat);
			var numberpInCart = document.querySelector("#minishopcart_total").getAttribute("data-tms-cart-quantity");
			if (numberpInCart > 0){
			document.querySelector("#minishopcart_total").setAttribute('style', 'background-color: #e01011 !important');
			console.log("numberpInCart is bigger then 0 " + numberpInCart);
			}
			else {
			console.log("numberpInCart is " + numberpInCart);
			}
	} 
}, 20);
</script>




