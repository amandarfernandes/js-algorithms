function tickets(peopleInLine){
  till = {
    '25':0,
    '50':0,
    '100':0
  }
  
  for (let cash of peopleInLine) {
      till[`${cash}`]++;
      if (cash === 50) till['25']--;
      if (cash === 100) {
        till['25']--;
        till['50'] > 0 ? till['50']-- : till['25']-=2;
      }
      if (till['25'] < 0) return 'NO'; 
   }
   return 'YES';
}
