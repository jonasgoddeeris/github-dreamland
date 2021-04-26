

function addPrice() {
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


addPrice();

