function tickets(peopleInLine){
  let cashInHand = [];
  
  function canSell(cash) {
   cashInHand.push(cash);
   switch (cash) {
   case 25: 
       return true;
   case 50:
       let ch = cashInHand.findIndex(c=>c===25)    
       if (ch < 0) return false;
       cashInHand.splice(ch,1);
       return true;
   case 100: 
      let i50 = cashInHand.findIndex(c=>c===50);
      let i25 = cashInHand.findIndex(c=>c===25);
      if (i50 >= 0  && i25 >=0) {
        cashInHand.splice(i50,1);
        i25 = cashInHand.findIndex(c=>c===25);
        cashInHand.splice(i25,1);
        return true;
      } else if (i25 >=0) {
        if (cashInHand.filter(c=>c===25).length >= 3) {
          for (let cnt =0; cnt < 3; cnt++) {
              let i = cashInHand.findIndex(c=>c===25);
              cashInHand.splice(i,1)
          }
          return true;
        }
      }
    }
    return false;
}
  return peopleInLine.every(canSell)? 'YES':'NO'; 
}
