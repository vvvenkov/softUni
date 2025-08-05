function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discout = Number(input[3]);
    
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let cleanerPrice = cleaner * 1.20;
    let totalPrice = pensPrice + cleanerPrice + markersPrice;
    let discount = totalPrice * 0.25;
    let finalPrice = totalPrice - discount;
      
    console.log(finalPrice);
    
    }