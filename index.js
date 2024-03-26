let weightInGrams = prompt("Enter the weight of chicken (in grams):");

let weightInKg = weightInGrams / 1000;

let price = weightInKg * 500;

document.write("You have to pay " + price + " rupees for " + weightInGrams + " grams of chicken.");