function map(array, callback) {
  const results = [];
  for (let i = 0, length = array.length; i < length; i++) {
    const value = callback(array[i], i);
    if (value != null) results.push(value);
  }
  return results.flat();
}

map(array, (value, index) => {});
