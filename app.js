var roomPrice = () => {
    var price1 = document.getElementById("roomType").value;
    if (price1 === "standard") {
        return 100;
    } else if (price1 === "junior") {
        return 120;
    } else if (price1 === "suite") {
        return 150;
    }
}

var spaPrice = () => {
    var price2 = document.getElementById("spa").checked;
    if (price2 == true) {
        return 20;
    } else return 0;
}

var guestPrice = () => {
    var firstPrice = roomPrice() + spaPrice();
    var price3 = document.getElementById("guests").value;
    if (price3 === "individual") {
        return firstPrice -= (firstPrice * 25)/100;
    } else if (price3 === "double") {
        return firstPrice;
    } else if (price3 === "triple") {
        return firstPrice += (firstPrice * 25)/100;
    }
}

var nights = () => {
    var price4 = parseInt(document.getElementById("nights").value);
    return price4;
}

var parkingPrice = () => {
    var price5 = parseInt(document.getElementById("parking").value);
    return price5 * 10;
}


var totalCost = () => {
    return (guestPrice() * nights()) + parkingPrice();
}


var showCost = () => document.getElementById("myCost").innerText = totalCost();
document.getElementById("totalCost").addEventListener("click", showCost);