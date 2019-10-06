let prices = [15000, 10000, 1000, 20000];
let items = ["Table", "Chair", "Towel", "Mirror"];
let i = 0
let discount = 0.3 // 30% discount


document.write ("<h1>", "Old Prices", "<br>", "</h1>")
for (i = 0; i < prices.length; i++) {
	document.write ("<li>", items[i] + " " + prices[i], "</li>", "<br>");
}


document.write ("<h1>", "New Prices", "<br>", "</h1>")
for (i = 0; i < prices.length; i++) {
	document.write ("<li>", items[i] + " " + (prices[i] - (prices[i] * discount)), "</li>", "<br>");
}

