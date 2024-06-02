// src/data/holdings.js
const holdings = Array.from({ length: 100 }, (v, i) => ({
    id: i + 1,
    name: `Holding ${i + 1}`,
    logo: 'https://via.placeholder.com/100'
  }));
  
  export default holdings;
  