
const colorLawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0
};

const changerating = (obj = {}, rating) => {
  obj.rating = rating;
  return obj;
};

console.log(changerating(colorLawn, 5).rating);
console.log(colorLawn.rating);

