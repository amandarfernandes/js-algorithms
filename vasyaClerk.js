/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.
*/

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
