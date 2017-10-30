// @flow
const schools = ["Yorktown", "Washington & Lee", "Wakefield"];
const colors = [
  {
    id: "-xekare",
    title: "rad red",
    rating: 3
  },
  {
    id: "-jbwsof",
    title: "big blue",
    rating: 2
  },
  {
    id: "-prigbj",
    title: "grizzly grey",
    rating: 5
  },
  {
    id: "-ryhbhsl",
    title: "banana",
    rating: 1
  }
];

const fiterschools = (array = [], cut = "") => {
  const newSchools = array.filter(item => item !== cut);
  return newSchools;
};

// use of Array.map()
const highschools = schools.map(item => ` ${item} High School`);

// use of Array.filter()
const hashcolors = colors.reduce((previousValue, { id, title, rating }) => {
  const result = { ...previousValue };
  result.id = { title, rating };
  return result;
}, {});

console.log(fiterschools(schools, "Wakefield").join("\n"));
console.log(highschools.join("\n"));
console.log(hashcolors);
