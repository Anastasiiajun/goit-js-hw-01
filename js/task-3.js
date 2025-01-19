function getElementWidth(content, padding, border) {
  const contW = parseFloat(content);
  const paddW = parseFloat(padding);
  const bordW = parseFloat(border);
  return contW + paddW * 2 + bordW * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
