
<script>function addPrice() {
const korting = document.querySelector("#tab2Widget > div > div > div.col9.acol12.noScaling > div > div.repeatPrice > div > div.price.price--red.price--percentage").innerHTML;
const kortingArray = korting.split(" ");
const kortingPercent = kortingArray[2];
const oldPrice = document.querySelector("#tab2Widget > div > div > div.col9.acol12.noScaling > div > div.repeatPrice > div > div.product_price > span > span").innerText;
const oldPriceInterger = parseFloat(oldPrice.replace(/,/g, '.'));
const kortingPercentInterger = parseFloat(kortingPercent);
console.log("oldpriceInterger is TYPE + aantal" + typeof oldPriceInterger + oldPriceInterger);
console.log("kortingPercentInterger is TYPE + aantal" + typeof kortingPercentInterger + kortingPercentInterger);
const kortingAbsolute = (kortingPercentInterger / 100) * oldPriceInterger;
const kortingFinal = kortingAbsolute.toFixed(2);
console.log("final korting is " + kortingFinal);
const kortingFinalString = String(kortingFinal);
const kortingFinalStringComma = kortingFinalString.replace(".", ",");
console.log(kortingFinalStringComma);
const kortingText = (" en bespaart €" + kortingFinalStringComma);
if (kortingAbsolute >= 1 && kortingPercentInterger >= 15){
	document.querySelector("#tab2Widget > div > div > div.col9.acol12.noScaling > div > div.repeatPrice > div > div.price.price--red.price--percentage").innerHTML = korting + kortingText;
};
};


var repeat = setInterval(function(){  //the default interval function to only apply changes when the element we change is actually availble on page.
			console.log("ab57intervalRUN"); //this gets triggered every attempt, when element is not availble it shows up in console several times
			if(document.querySelector("#tab2Widget > div > div > div.col9.acol12.noScaling > div > div.repeatPrice > div > div.price.price--red.price--percentage") !== "null") {
				clearInterval(repeat); //stop trying when the element is available on page
				addPrice(); //trigger a function with all the changes
				console.log("ab57intervalComplete"); 
			} 
}, 15); //try every 15 miliseconds
</script>