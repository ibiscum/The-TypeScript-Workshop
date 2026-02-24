// create a string and number literal
type No = "no";
type Zero = 0;


// function that takes type no
function onlyNo(no: No): Zero {
  if (no === "no") {
        const zero: Zero = 0;
        return zero;
  }
  throw new Error("Expected 'no'");
}
console.log(onlyNo("no"))
