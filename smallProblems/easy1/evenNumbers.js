let num = 2
while (num < 99) {
  console.log(num);
  num += 2;
}

for (let i = 2; i < 99; i += 2) {
  console.log(i)
}

for (let even = 1; even < 99; even += 1) {
  if (even % 2 === 0) {
    console.log (even);
  }
}