
const colorLawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0
};

const ratechange = (obj = {}, rating = 0) => ({ ...obj, rating });

console.log(colorLawn.rating);
console.log(ratechange(colorLawn, 7).rating);
