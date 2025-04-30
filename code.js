const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const target = "a1B"; // Replace with any 3-character target you want to guess
let attempts = 0;

function* generate(length, prefix = "") {
  if (length === 0) {
    yield prefix;
    return;
  }
  for (let i = 0; i < charset.length; i++) {
    yield* generate(length - 1, prefix + charset[i]);
  }
}

const start = performance.now();

for (const guess of generate(target.length)) {
  attempts++;
  if (guess === target) {
    const end = performance.now();
    console.log(`🎯 Found: ${guess} in ${attempts} attempts`);
    console.log(`⏱️ Time: ${(end - start).toFixed(2)} ms`);
    break;
  }
}
