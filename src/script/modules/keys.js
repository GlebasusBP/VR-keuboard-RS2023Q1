const keysArr = [
  {
    id: '`',
    code: 'Backquote',
    primary: {
      eng: '`',
      rus: 'ё'
    },
    secondery: {
      eng: '~',
      rus: 'Ё'
    },
  },
  {
    id: '1',
    code: 'Digit1',
    primary: {
      eng: '1',
      rus: '1'
    },
    secondery: {
      eng: '!',
      rus: '!'
    },
  },
  {
    id: '2',
    code: 'Digit2',
    primary: {
      eng: '2',
      rus: '2'
    },
    secondery: {
      eng: '@',
      rus: '"'
    },
  },
  {
    id: '3',
    code: 'Digit3',
    primary: {
      eng: '3',
      rus: '3'
    },
    secondery: {
      eng: '#',
      rus: '№'
    },
  },
  {
    id: '4',
    code: 'Digit4',
    primary: {
      eng: '4',
      rus: '4'
    },
    secondery: {
      eng: '$',
      rus: ';'
    },
  },
  {
    id: '5',
    code: 'Digit5',
    primary: {
      eng: '5',
      rus: '5'
    },
    secondery: {
      eng: '%',
      rus: '%'
    },
  },
  {
    id: '6',
    code: 'Digit6',
    primary: {
      eng: '6',
      rus: '6'
    },
    secondery: {
      eng: '^',
      rus: ':'
    },
  },
  {
    id: '7',
    code: 'Digit7',
    primary: {
      eng: '7',
      rus: '7'
    },
    secondery: {
      eng: '&',
      rus: '?'
    },
  },
  {
    id: '8',
    code: 'Digit8',
    primary: {
      eng: '8',
      rus: '8'
    },
    secondery: {
      eng: '*',
      rus: '*'
    },
  },
  {
    id: '9',
    code: 'Digit9',
    primary: {
      eng: '9',
      rus: '9'
    },
    secondery: {
      eng: '(',
      rus: '('
    },
  },
  {
    id: '0',
    code: 'Digit0',
    primary: {
      eng: '0',
      rus: '0'
    },
    secondery: {
      eng: ')',
      rus: ')'
    },
  },
  {
    id: '-',
    code: 'Minus',
    primary: {
      eng: '-',
      rus: '-'
    },
    secondery: {
      eng: '_',
      rus: '_'
    },
  },
  {
    id: '=',
    code: 'Equal',
    primary: {
      eng: '=',
      rus: '='
    },
    secondery: {
      eng: '+',
      rus: '+'
    },
  },
  {
    id: 'backspace',
    code: 'Backspace',
    primary: {
      eng: 'Backspace',
      rus: 'Backspace'
    },
  },
  {
    id: 'tab',
    code: 'Tab',
    primary: {
      eng: 'Tab',
      rus: 'Tab'
    },
  },
  {
    id: 'q',
    code: 'KeyQ',
    primary: {
      eng: 'q',
      rus: 'й'
    },
  },
  {
    id: 'w',
    code: 'KeyW',
    primary: {
      eng: 'w',
      rus: 'ц'
    },
  },
  {
    id: 'e',
    code: 'KeyE',
    primary: {
      eng: 'e',
      rus: 'у'
    },
  },
  {
    id: 'r',
    code: 'KeyR',
    primary: {
      eng: 'r',
      rus: 'к'
    },
  },
  {
    id: 't',
    code: 'KeyT',
    primary: {
      eng: 't',
      rus: 'е'
    },
  },
  {
    id: 'y',
    code: 'KeyY',
    primary: {
      eng: 'y',
      rus: 'н'
    },
  },
  {
    id: 'u',
    code: 'KeyU',
    primary: {
      eng: 'u',
      rus: 'г'
    },
  },
  {
    id: 'i',
    code: 'KeyI',
    primary: {
      eng: 'i',
      rus: 'ш'
    },
  },
  {
    id: 'o',
    code: 'KeyO',
    primary: {
      eng: 'o',
      rus: 'щ'
    },
  },
  {
    id: 'p',
    code: 'KeyP',
    primary: {
      eng: 'p',
      rus: 'з'
    },
  },
  {
    id: '[',
    code: 'BracketLeft',
    primary: {
      eng: '[',
      rus: 'х'
    },
    secondery: {
      eng: '{',
      rus: 'Х'
    },
  },
  {
    id: ']',
    code: 'BracketRight',
    primary: {
      eng: ']',
      rus: 'ъ'
    },
    secondery: {
      eng: '}',
      // rus: 'Ъ'
    },
  },
  {
    id: '\\',
    code: 'Backslash',
    primary: {
      eng: '\\',
      rus: '\\'
    },
    secondery: {
      eng: '|',
      rus: '/'
    },
  },
  {
    id: 'del',
    code: 'Delete',
    primary: {
      eng: 'Del',
      rus: 'Del'
    },
  },
  {
    id: 'capslock',
    code: 'CapsLock',
    primary: {
      eng: 'CapsLk',
      rus: 'CapsLk'
    },
  },
  {
    id: 'a',
    code: 'KeyA',
    primary: {
      eng: 'a',
      rus: 'ф'
    },
  },
  {
    id: 's',
    code: 'KeyS',
    primary: {
      eng: 's',
      rus: 'ы'
    },
  },
  {
    id: 'd',
    code: 'KeyD',
    primary: {
      eng: 'd',
      rus: 'в'
    },
  },
  {
    id: 'f',
    code: 'KeyF',
    primary: {
      eng: 'f',
      rus: 'а'
    },
  },
  {
    id: 'g',
    code: 'KeyG',
    primary: {
      eng: 'g',
      rus: 'п'
    },
  },
  {
    id: 'h',
    code: 'KeyH',
    primary: {
      eng: 'h',
      rus: 'р'
    },
  },
  {
    id: 'j',
    code: 'KeyJ',
    primary: {
      eng: 'j',
      rus: 'о'
    },
  },
  {
    id: 'k',
    code: 'KeyK',
    primary: {
      eng: 'k',
      rus: 'л'
    },
  },
  {
    id: 'l',
    code: 'KeyL',
    primary: {
      eng: 'l',
      rus: 'д'
    },
  },
  {
    id: ';',
    code: 'Semicolon',
    primary: {
      eng: ';',
      rus: 'ж'
    },
    secondery: {
      eng: ':',
      // rus: 'Ж'
    },
  },
  {
    id: '\'',
    code: 'Quote',
    primary: {
      eng: '\'',
      rus: 'э'
    },
    secondery: {
      eng: '"',
      // rus: 'Э'
    },
  },
  {
    id: 'enter',
    code: 'Enter',
    primary: {
      eng: 'Enter',
      rus: 'Enter'
    },
  },
  {
    id: 'shift-l',
    code: 'ShiftLeft',
    primary: {
      eng: 'Shift',
      rus: 'Shift'
    },
  },
  {
    id: 'z',
    code: 'KeyZ',
    primary: {
      eng: 'z',
      rus: 'я'
    },
  },
  {
    id: 'x',
    code: 'KeyX',
    primary: {
      eng: 'x',
      rus: 'ч'
    },
  },
  {
    id: 'c',
    code: 'KeyC',
    primary: {
      eng: 'c',
      rus: 'с'
    },
  },
  {
    id: 'v',
    code: 'KeyV',
    primary: {
      eng: 'v',
      rus: 'м'
    },
  },
  {
    id: 'b',
    code: 'KeyB',
    primary: {
      eng: 'b',
      rus: 'и'
    },
  },
  {
    id: 'n',
    code: 'KeyN',
    primary: {
      eng: 'n',
      rus: 'т'
    },
  },
  {
    id: 'm',
    code: 'KeyM',
    primary: {
      eng: 'm',
      rus: 'ь'
    },
  },
  {
    id: ',',
    code: 'Comma',
    primary: {
      eng: ',',
      rus: 'б'
    },
    secondery: {
      eng: '<',
      // rus: 'Б'
    },
  },
  {
    id: '.',
    code: 'Period',
    primary: {
      eng: '.',
      rus: '1'
    },
    secondery: {
      eng: '>',
      // rus: 'Ю'
    },
  },
  {
    id: '/',
    code: 'Slash',
    primary: {
      eng: '/',
      rus: '.'
    },
    secondery: {
      eng: '?',
      rus: ','
    },
  },
  {
    id: 'up',
    code: 'ArrowUp',
    primary: {
      eng: '&uarr;',
      rus: '&uarr;'
    },
  },
  {
    id: 'shift-r',
    code: 'ShiftRight',
    primary: {
      eng: 'Shift',
      rus: 'Shift'
    },
  },
  {
    id: 'ctrl-l',
    code: 'ControlLeft',
    primary: {
      eng: 'Ctrl',
      rus: 'Ctrl'
    },
  },
  {
    id: 'win',
    code: 'MetaLeft',
    primary: {
      eng: 'Win',
      rus: 'Win'
    },
  },
  {
    id: 'alt-l',
    code: 'AltLeft',
    primary: {
      eng: 'Alt',
      rus: 'Alt'
    },
  },
  {
    id: 'space',
    code: 'Space',
    primary: {
      eng: 'Space',
      rus: 'Space'
    },
  },
  {
    id: 'alt-r',
    code: 'AltRight',
    primary: {
      eng: 'Alt',
      rus: 'Alt'
    },
  },
  {
    id: 'ctrl-r',
    code: 'ControlRight',
    primary: {
      eng: 'Ctrl',
      rus: 'Ctrl'
    },
  },
  {
    id: 'left',
    code: 'ArrowLeft',
    primary: {
      eng: '&larr;',
      rus: '1&larr;'
    },
  },
  {
    id: 'down',
    code: 'ArrowDown',
    primary: {
      eng: '&darr;',
      rus: '1&darr;'
    },
  },
  {
    id: 'right',
    code: 'ArrowRight',
    primary: {
      eng: '&rarr;',
      rus: '1&rarr;'
    },
  },
];

export default keysArr;