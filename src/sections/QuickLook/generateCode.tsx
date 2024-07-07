export const defaultOptions = {
  reusability: 'medium', // high, medium, low
  setterUpdates: true, // on/off
  globalState: true, // global, local
  signals: false,
  framework: 'react',
  beau: false,
  addExports: true,
};

export const initialState = {
  framework: 'react',
  scope: 'global',
  reuse: 'medium',
  setters: true
}

export const getOptions = (state: typeof initialState) => {
  const options = { 
    ...defaultOptions,
    globalState: state.scope === 'global',
    framework: state.framework,
    reusability: state.reuse,
    setterUpdates: state.setters
  }
  return options
}

export function generateCode(options) {
  const inc = (name, sign = '+') =>
    !options.setterUpdates
      ? `() => ${name}.update((s) => s ${sign} 1)`
      : `() => ${name}.value${sign}${sign}`;

  const dec = (name) => inc(name, '-');

  const componentActions =
    options.reusability === 'low'
      ? ''
      : options.reusability !== 'medium'
      ? `  const { increment, decrement } = $counter.actions`
      : `  const increment = ${inc('$counter')}
  const decrement = ${dec('$counter')}`;

  const modelDeclarationText = `export const NumberModel = (payload) =>
  atom(payload, (a) => ({
    increment: ${inc('a')},
    decrement: ${dec('a')},
  }))`;

  const globalDeclarationText =
    options.reusability === 'highest'
      ? `const $counter = NumberModel(0)`
      : options.reusability === 'high'
      ? `const $counter = atom(0, (a) => ({
  increment: ${inc('a')},
  decrement: ${dec('a')},
}))`
      : `const $counter = atom(0)`;

  const maybeDoja = (str) =>
    options.framework === 'react'
      ? str.replace('r = ', 'r = useSetup(() => ') + ')'
      : str;

  const localDeclarationText = maybeDoja(globalDeclarationText)
    .split('\n')
    .map((s) => '  ' + s)
    .join('\n');

  const frameworkImports = {
    useAtom: !options.signals,
    useSetup:
      !options.globalState &&
      (options.framework === 'react' || options.framework === 'doja'),
  };

  const frameworkImportText =
    frameworkImports.useAtom || frameworkImports.useSetup
      ? `import { ${Object.keys(frameworkImports)
          .filter((key) => frameworkImports[key])
          .join(', ')} } from '@xoid/${options.framework}'`
      : '';

  const markupInc =
    options.reusability === 'low' ? inc('$counter') : `increment`;
  const markupDec =
    options.reusability === 'low' ? dec('$counter') : `decrement`;

  const getSmall =
    options.signals && options.reusability === 'low' && options.globalState;

  if (getSmall) {
    if (!options.beau) {
      setTimeout(() => {
        options.beau = true;
        window.dispatchEvent(buildEvent);
      }, animationOptions.duration * 1.5);
    }
  } else options.beau = false;

  const soSmall = getSmall && options.beau;

  const reactHeader =
    options.framework === 'svelte' || options.framework === 'vue'
      ? `<script${options.framework === 'vue' ? ' setup' : ''}>
${[
  options.reusability !== 'highest' && !options.globalState
    ? `  import { atom } from 'xoid'`
    : ``,
  `  ${frameworkImportText}`,
  options.reusability === 'highest' && !options.globalState
    ? `  import { NumberModel } from './models.js'`
    : ``,
  options.globalState ? `  import { ${options.framework === 'svelte' ? `$counter as counterAtom` : `$counter`} } from './models.js'` : ``,
]
  .filter((s) => s)
  .join('\n')}
`
      : `export const Counter = ${
          options.framework === 'doja' ? 'Doja(' : ''
        }() => ${soSmall ? '(' : '{'}`;

  let reactFooter =
    options.framework === 'svelte'
      ? `</script>

{$count}
<button on:click={${markupInc}}>+</button>
<button on:click={${markupDec}}>-</button>`
      : options.framework === 'vue'
      ? `</script>

<template>
  {{ count }}
  <button @click="${markupInc}">+</button>
  <button @click="${markupDec}">-</button>
</template>`
      : soSmall
      ? `  <>
    {${options.signals ? '$counter.value' : `count`}}
    <button onClick={${markupInc}}>+</button>
    <button onClick={${markupDec}}>-</button>
  </>
)`
      : `  return ${options.framework === 'doja' ? '() => ' : ''}(
    <>
      {${options.signals ? '$counter.value' : `count`}}
      <button onClick={${markupInc}}>+</button>
      <button onClick={${markupDec}}>-</button>
    </>
  )
}`;

  if (options.framework === 'doja') reactFooter = reactFooter + ')';

  const imports = [
    options.framework === 'doja'
      ? `import Doja, { create } from 'doja'`
      : options.framework === 'react' ||
        !(!options.globalState && options.reusability !== 'highest')
      ? `import { atom } from 'xoid'`
      : '',
    options.framework === 'react' ? frameworkImportText : '',
  ];

  const maybeReplaceConst = (s) => {
    if (!options.addExports) return s;
    return s.replace(/const/g, 'export const');
  };

  const globalDeclarations = [
    options.reusability === 'highest' ? modelDeclarationText : '',
    options.globalState ? maybeReplaceConst(globalDeclarationText) : '',
  ];
  const join = (arr) => {
    return arr
      .map((s) => s.filter((p) => p).join('\n'))
      .filter((s) => s)
      .join('\n\n');
  };

  const splitView = (options.framework === 'vue' || options.framework === 'svelte') && (options.globalState || options.reusability === 'highest')
  const el = document.querySelector('.code-demo-container')
  if(el){if(splitView) {
    el.classList.add('split')
  } else { 
    el.classList.remove('split')
  }}

  return join([
    imports,
    globalDeclarations,
    splitView ? ['---']: [],
    [
      reactHeader,
      ...maybeAddNewLine([
        !options.globalState ? localDeclarationText : '',
        options.signals ? '' : `  const count = useAtom($counter)`,
        componentActions,
      ], options),
      reactFooter,
    ],
  ]);
}

const maybeAddNewLine = (arr, options) => {
  if (options.framework !== 'react' && options.framework !== 'doja') {
    if (options.framework === 'svelte')
    arr = arr.map((s) => s.replace(/\$counter/g, 'counterAtom'));
    
    return arr;}
  arr = arr.filter((s) => s).flatMap((s) => s.split('\n'));
  if (arr.length > 1) arr[arr.length - 1] = arr[arr.length - 1] + '\n';


  return arr;
};
