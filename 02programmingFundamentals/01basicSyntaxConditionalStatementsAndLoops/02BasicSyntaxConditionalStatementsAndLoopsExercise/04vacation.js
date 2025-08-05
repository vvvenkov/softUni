function vacation(groupNum, typeOfGroup, dayofWeek) {
    if (typeOfGroup === "Students") {
        if (dayofWeek === "Friday") {
            price = 8.45;
        } else if (dayofWeek === "Saturday") {
            price = 9.80;
        } else if (dayofWeek === "Sunday") {
            price = 10.46;
        }
    } else if (typeOfGroup === "Business") {
        if (dayofWeek === "Friday") {
            price = 10.90;
        } else if (dayofWeek === "Saturday") {
            price = 15.60;
        } else if (dayofWeek === "Sunday") {
            price = 16;
        }
    } else if (typeOfGroup === "Regular") {
        if (dayofWeek === "Friday") {
            price = 15;
        } else if (dayofWeek === "Saturday") {
            price = 20;
        } else if (dayofWeek === "Sunday") {
            price = 22.50;
        }
    }
    let finalPrice = price * groupNum;
    if (typeOfGroup === "Students" && groupNum >= 30) {
        finalPrice = finalPrice * 0.85;
    }
    if (typeOfGroup === "Business" && groupNum >= 100) {
        finalPrice = (groupNum - 10) * finalPrice;
    }
    if (typeOfGroup === "Regular" && (groupNum >= 10 && groupNum <= 20)) {
        finalPrice = finalPrice * 0.95;
    }
    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}
vacation(100, "Business", "Saturday")