const evolactor = function() {
  const program = {};
  const cursor = [];

  const setFunction = function(name, fun) {
    program[name] = fun;
  };

  const getFunction = function(name, fun) {
    return program[name];
  };

  const evaluateFunction = function(name, resultName) {
    const args = Array.prototype.slice.call(arguments);
    program[resultName] = program[name](...args.slice(2));
  };

  const getContext = function() {
    let ctx = program;
    for (let i = 0; i < cursor.length; cursor++) {
      const name = cursor[i];
      ctx = ctx[name];
    }
    return ctx;
  }

  const printProgram = function() {
    let s = '';
    for (const key in program) {
      const val = program[key];
      s += 'const ' + key + ' = ' + val + ';\n';
    }
    s += 'main();';
    return s;
  };

  return {
    setFunction: setFunction,
    evaluateFunction: evaluateFunction,
    getContext: getContext,
    printProgram: printProgram
  };
}();

evolactor.setFunction('add', (a, b) => {
  return a + b;
});
evolactor.exposeFromTo('add', 'main');
evolactor.setFunction('main', (a, b) => {
  return evolactor.getContext().add(1, 2);
});
evolactor.setFunction('createAndAppendCanvas', () => {
  const canvas = document.createElement('canvas');
  document.body.style = 'overflow: hidden; margin: 0px;';
  document.body.appendChild(canvas);
  (await ctx.width$()).subscribe(width => canvas.width = width);
  (await ctx.height$()).subscribe(height => canvas.height = height);
});
console.log(evolactor.printProgram());
