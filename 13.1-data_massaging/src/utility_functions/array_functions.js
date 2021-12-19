export function namesExtract(array) {
  const arr = array.map((el) => {
    return el.name;
  });
  return arr;
}

export function filter1990(array) {
  let beforeArr = [];
  array.forEach(function (obj) {
    let year = Number(obj.birthday.slice(5, 9));
    if (year < 1990) beforeArr.push(obj);
  });
  return beforeArr;
}
