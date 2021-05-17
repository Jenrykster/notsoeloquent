function countBs(text) {
  return countChar(text,"B");
}

function countChar(text, char) {
    let pos = 0;
    let beans = 0; //Amount of uppercase ["B"]s
    while (pos <= text.length) {
      if (text[pos] == char) {
        beans++;
        pos++;
      } else {
        pos++;
      }
    }
    console.log(`The amount of [${char}'s] in "${text}" is ${String(beans)}`);
    return beans;
}
  
countBs("Baba BaBão");
