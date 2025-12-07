function squares(array: number[]) : number[] {
  const result = array.map(x => x * x);
  return result;
}

console.log(`squares([1, 2, 3, 4, 5]):`);
console.log(squares([1, 2, 3, 4, 5]));
