function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  if (!isNaN(a) && !isNaN(b)) {
    let stringA = a.toString();
    let stringB = b.toString();
    if (stringA.length !== stringB.length) return false;
    let frequencyStore1 = {};
    let frequencyStore2 = {};

    for (const element of stringA) {
      if (frequencyStore1[element]) frequencyStore1[element] += 1;
      else frequencyStore1[element] = 1;
    }

    for (const element of stringB) {
      if (frequencyStore2[element]) frequencyStore2[element] += 1;
      else frequencyStore2[element] = 1;
    }

    for (const element of stringB) {
      if (frequencyStore1[element] !== frequencyStore2[element]) return false;
    }

    return true;
  }
}

console.log(sameFrequency(22, 22));
