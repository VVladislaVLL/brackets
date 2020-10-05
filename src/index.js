module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let closeToOpenMap = new Map(); 
    for (let pair of bracketsConfig) {
        closeToOpenMap.set(pair[1], pair[0]);
    }

    let openBrackets = new Set(closeToOpenMap.values());
    console.log(openBrackets);

    let sameBrackets = new Set();
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] == bracketsConfig[i][1]) sameBrackets.add(bracketsConfig[i][0]);
    }

    for (let letter of str) {
      if (sameBrackets.has(letter)) {
        if (stack[stack.length - 1] === letter) {
          stack.pop();
        }
        else {
          stack.push(letter);
        }
      }
      else {
        if (closeToOpenMap.has(letter)) {
        const openPair = closeToOpenMap.get(letter);
        if(stack[stack.length - 1] === openPair) {
            stack.pop();
        }
        else {
            stack.push(letter);
            break;
          }
        } 
        else if(openBrackets.has(letter)) {
          stack.push(letter);
        }
      }
    }
    return (stack.length === 0);
}
