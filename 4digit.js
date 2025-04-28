let int = parseInt (prompt (`enter a 4-digit integer: `));
console.log (int%10);
console.log (Math.floor(int%100/10));
console.log (Math.floor(int%1000/100));
console.log (Math.floor(int%10000/1000));