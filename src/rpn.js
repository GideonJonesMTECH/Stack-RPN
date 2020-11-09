const Stack = ("./stack.js").Stack;

function rpn(string) {
  const s = new Stack, tokens = string.split(' ');
  for (const t of tokens) {
    const n = Number(t);
    if (!isNaN(n)) {
      s.push(n);
    } else {
      if (s.length < 2) {
        throw new Error(`${t}: ${s}: insufficient operands.`);
      }
      const o2 = s.pop(), o1 = s.pop();
      switch (t) {
        case '+': s.push(o1 + o2); break;
        case '-': s.push(o1 - o2); break;
        case '*': s.push(o1 * o2); break;
        case '/': s.push(o1 / o2); break;
        case '^': s.push(Math.pow(o1, o2)); break;
        default: throw new Error(`Unrecognized operator: [${t}]`);
      }
    }
    console.log(`${t}: ${s}`);
  }
   
  if (s.length > 1) {
    throw new Error(`${s}: insufficient operators.`);
  }
}
