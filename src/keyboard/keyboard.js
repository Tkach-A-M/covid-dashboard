/* eslint-disable max-len */
/* eslint-disable no-lonely-if */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable no-useless-escape */
/* eslint-disable comma-spacing */
function myKeyboard() {
  const keyboard = document.querySelector('.keyboard');
  const textarea = document.querySelector('.search-input');
  const body = document.querySelector('body');
  const rusL = [
    ['','ё','!','"','№',';','%',':','?','*','(',')','_','+','back','','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','/','','Caps','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift','я','ч','с','м','и','т','ь','б','ю','\,','↑','Shift','','','ru','hide','Space','','','←','↓','→',''],
    ['','','1','2','3','4','5','6','7','8','9','0','-','=','','','','','','','','','','','','','','','\\','','','','','','','','','','','','','','','','','','','','','','','','','.','','','','','','','','','','','','',''],
  ];
  const rusU = [
    ['','Ё','!','"','№',';','%',':','?','*','(',')','_','+','back','','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','/','','Caps','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','\,','↑','Shift','','','ru','hide','Space','','','←','↓','→',''],
    ['','','1','2','3','4','5','6','7','8','9','0','-','=','','','','','','','','','','','','','','','\\','','','','','','','','','','','','','','','','','','','','','','','','','.','','','','','','',' ','','','','','',''],
  ];
  const engL = [
    ['','~','!','@','#','$','%','^','&','*','(',')','_','+','back','','q','w','e','r','t','y','u','i','o','p','{','}','|','','Caps','a','s','d','f','g','h','j','k','l',':','"','Enter','Shift','z','x','c','v','b','n','m','<','>','?','↑','Shift','','','eng','hide','Space','','','←','↓','→',''],
    ['','\`','1','2','3','4','5','6','7','8','9','0','-','=','','','','','','','','','','','','','[',']','\\','','','','','','','','','','','',';','\'','','','','','','','','','',',','.','/','','','','','','','','','','','','',''],
  ];
  const engU = [
    ['','~','!','@','#','$','%','^','&','*','(',')','_','+','back','','Q','W','E','R','T','Y','U','I','O','P','{','}','|','','Caps','A','S','D','F','G','H','J','K','L',':','"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','↑','Shift','','','eng','hide','Space','','','←','↓','→',''],
    ['','\`','1','2','3','4','5','6','7','8','9','0','-','=','','','','','','','','','','','','','[',']','\\','','','','','','','','','','','',';','\'','','','','','','','','','',',','.','/','','','','','','','','','','','','',''],
  ];
  const keyBoardCode = ['','Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace','','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','','CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter','ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight','','','','','Space','','','ArrowLeft','ArrowDown','ArrowRight',''];
    const exception = [1,27,26,40,41,51,52];
    for (let i = 1; i <= 67; i++) {
      if (i == 1 || i == 16 || i == 30 || i == 67 || i == 63 || i == 62 || i == 58 || i == 57) {
      keyboard.innerHTML += `<div class="notkey key${i}">
        <span class='top'></span>
        <span class='bot'></span>
        </div>`;
      } else if (i == 31) {
        keyboard.innerHTML += `<div class="key key${i}">
        <span class='top'></span>
        <span class='bot caps'></span>
        </div>`;
      } else if (i == 44) {
        keyboard.innerHTML += `<div class="key key${i}">
        <span class='top'></span>
        <span class='bot shift'></span>
        </div>`;
      } else {
      keyboard.innerHTML += `<div class="key key${i}">
        <span class='top'></span>
        <span class='bot'></span>
      </div>`;
      }
    }
  const top = document.querySelectorAll('.top');
  const key = document.querySelectorAll('.key');
  const bot = document.querySelectorAll('.bot');

  for (let i = 1; i <= 67; i++) {
    top[i - 1].innerHTML = engL[0][i - 1];
    bot[i - 1].innerHTML = engL[1][i - 1];
  }
  for (let i = 0; i < 67; i++) {
    if (bot[i].innerHTML !== '') {
      bot[i].classList.add('keyA');
      top[i].classList.remove('keyA');
    } else {
      bot[i].classList.remove('keyA');
      top[i].classList.add('keyA');
    }
  }
  textarea.onfocus = function () {
    document.querySelector('.key60').classList.remove('keyEvent');
  };
  body.onmousedown = function (e) {
    if (document.activeElement === textarea) {
      e.preventDefault();
    }
  };
  let keyActive = document.querySelectorAll('.key .keyA');
  const keyCapsColor = document.querySelector('.caps');
  const keyShiftColor = document.querySelector('.shift');
    key.forEach((e,i) => {
    // eslint-disable-next-line prefer-arrow-callback
    e.addEventListener('mousedown', function () {
      e.classList.add('keyEvent');
      if (keyActive[i].textContent === 'back') {
         textarea.value = textarea.value.substring(0, (textarea.value.length - 1));
      } else if (keyActive[i].textContent === 'hide') {
        keyboard.style.top = 'calc(100vh)';
        textarea.blur();
      } else if (keyActive[i].textContent === 'Enter') {
        textarea.value += '\n';
      } else if (keyActive[i].textContent === '←') {
          textarea.value += '';
          if (textarea.selectionStart != 0) {
          textarea.selectionStart -= 1;
          textarea.selectionEnd = textarea.selectionStart;
        }
      } else if (keyActive[i].textContent === '→') {
        textarea.value += '';
        if (textarea.selectionStart != 0) {
        textarea.selectionStart += 1;
        textarea.selectionEnd = textarea.selectionStart;
        }
      } else if (keyActive[i].textContent === '↑') {
        textarea.value += '';
      } else if (keyActive[i].textContent === '↓') {
        textarea.value += '';
      } else if (keyActive[i].textContent === 'Shift') {
        keyShiftColor.classList.contains('shift-active') ? keyShiftColor.classList.remove('shift-active') : keyShiftColor.classList.add('shift-active');
        if (keyShiftColor.classList.contains('shift-active')) {
          if (document.querySelector('.key59 .top').textContent == 'ru') {
            // eslint-disable-next-line no-shadow
            for (let i = 0; i < 67; i++) {
              if (keyCapsColor.classList.contains('caps-active')) {
                for (let i = 0; i < 67; i++) {
                  top[i].innerHTML = rusL[0][i];
                  bot[i].innerHTML = rusL[1][i];
                }
              } else {
                for (let i = 0; i < 67; i++) {
                top[i].innerHTML = rusU[0][i];
                bot[i].innerHTML = rusU[1][i];
                }
              }
              if (!top[i].classList.contains('keyA')) {
                top[i].classList.add('keyA');
                bot[i].classList.remove('keyA');
              }
            }
          } else {
            for (let i = 0; i < 67; i++) {
              if (keyCapsColor.classList.contains('caps-active')) {
                for (let i = 0; i < 67; i++) {
                  top[i].innerHTML = engL[0][i];
                  bot[i].innerHTML = engL[1][i];
                }
              } else {
                for (let i = 0; i < 67; i++) {
                top[i].innerHTML = engU[0][i];
                bot[i].innerHTML = engU[1][i];
                }
              }
              if (!top[i].classList.contains('keyA')) {
                top[i].classList.add('keyA');
                bot[i].classList.remove('keyA');
              }
            }
          }
          keyActive = document.querySelectorAll('.key .keyA');
        } else {
          if (document.querySelector('.key59 .top').textContent == 'ru') {
            for (let i = 0; i < 67; i++) {
              if (keyCapsColor.classList.contains('caps-active')) {
                for (let i = 0; i < 67; i++) {
                  top[i].innerHTML = rusU[0][i];
                  bot[i].innerHTML = rusU[1][i];
                }
              } else {
                for (let i = 0; i < 67; i++) {
                top[i].innerHTML = rusL[0][i];
                bot[i].innerHTML = rusL[1][i];
                }
              }
               if (bot[i].innerHTML !== '') {
                bot[i].classList.add('keyA');
                top[i].classList.remove('keyA');
              } else {
               bot[i].classList.remove('keyA');
                top[i].classList.add('keyA');
              }
            }
          } else {
            for (let i = 0; i < 67; i++) {
              if (keyCapsColor.classList.contains('caps-active')) {
                for (let i = 0; i < 67; i++) {
                  top[i].innerHTML = engU[0][i];
                  bot[i].innerHTML = engU[1][i];
                }
              } else {
                for (let i = 0; i < 67; i++) {
                top[i].innerHTML = engL[0][i];
                bot[i].innerHTML = engL[1][i];
                }
              }
               if (bot[i].innerHTML !== '') {
                bot[i].classList.add('keyA');
                top[i].classList.remove('keyA');
              } else {
               bot[i].classList.remove('keyA');
                top[i].classList.add('keyA');
              }
            }
          }
        }
      } else if (keyActive[i].textContent === 'Space') {
        textarea.value += ' ';
      } else if (keyActive[i].textContent === 'Caps') {
        keyCapsColor.classList.contains('caps-active') ? keyCapsColor.classList.remove('caps-active') : keyCapsColor.classList.add('caps-active');
        if (!keyShiftColor.classList.contains('shift-active')) {
          if (document.querySelector('.key59 .top').textContent == 'ru') {
            if (keyCapsColor.classList.contains('caps-active')) {
              for (let i = 0; i < 67; i++) {
                top[i].innerHTML = rusU[0][i];
                bot[i].innerHTML = rusU[1][i];
              }
            } else {
              for (let i = 0; i < 67; i++) {
              top[i].innerHTML = rusL[0][i];
              bot[i].innerHTML = rusL[1][i];
              }
            }
          } else {
            if (keyCapsColor.classList.contains('caps-active')) {
              for (let i = 0; i < 67; i++) {
                top[i].innerHTML = engU[0][i];
                bot[i].innerHTML = engU[1][i];
              }
            } else {
            for (let i = 0; i < 67; i++) {
              top[i].innerHTML = engL[0][i];
              bot[i].innerHTML = engL[1][i];
              }
            }
          }
          keyActive = document.querySelectorAll('.key .keyA');
        } else {
          if (document.querySelector('.key59 .top').textContent == 'ru') {
            if (!keyCapsColor.classList.contains('caps-active')) {
              for (let i = 0; i < 67; i++) {
                top[i].innerHTML = rusU[0][i];
                bot[i].innerHTML = rusU[1][i];
              }
            } else {
              for (let i = 0; i < 67; i++) {
              top[i].innerHTML = rusL[0][i];
              bot[i].innerHTML = rusL[1][i];
              }
            }
          } else {
            if (!keyCapsColor.classList.contains('caps-active')) {
              for (let i = 0; i < 67; i++) {
                top[i].innerHTML = engU[0][i];
                bot[i].innerHTML = engU[1][i];
              }
            } else {
            for (let i = 0; i < 67; i++) {
              top[i].innerHTML = engL[0][i];
              bot[i].innerHTML = engL[1][i];
              }
            }
          }
          keyActive = document.querySelectorAll('.key .keyA');
        }
      } else if (keyActive[i].textContent === 'ru') {
        for (let i = 0; i < exception.length; i++) {
          top[exception[i]].classList.remove('keyA');
          bot[exception[i]].classList.add('keyA');
        }
        if (keyCapsColor.classList.contains('caps-active')) {
          for (let i = 0; i < 67; i++) {
            top[i].innerHTML = engU[0][i];
            bot[i].innerHTML = engU[1][i];
          }
        } else {
          for (let i = 0; i < 67; i++) {
          top[i].innerHTML = engL[0][i];
          bot[i].innerHTML = engL[1][i];
          }
        }
        keyActive = document.querySelectorAll('.key .keyA');
      } else if (keyActive[i].textContent === 'eng') {
        for (let i = 0; i < exception.length; i++) {
          top[exception[i]].classList.add('keyA');
          bot[exception[i]].classList.remove('keyA');
        }
        if (keyCapsColor.classList.contains('caps-active')) {
          for (let i = 0; i < 67; i++) {
            top[i].innerHTML = rusU[0][i];
            bot[i].innerHTML = rusU[1][i];
          }
        } else {
          for (let i = 0; i < 67; i++) {
          top[i].innerHTML = rusL[0][i];
          bot[i].innerHTML = rusL[1][i];
          }
        }
        keyActive = document.querySelectorAll('.key .keyA');
      } else {
        textarea.value += keyActive[i].textContent;
      }
    });
    e.addEventListener('mouseup',() => {
      setTimeout(() => {
        e.classList.remove('keyEvent');
      },100);
    });
  });
  keyActive = document.querySelectorAll('.key .keyA');
  document.addEventListener('keydown', (event) => {
    const keyName = event.code;
    let KeyN = keyBoardCode.indexOf(keyName);
    KeyN > 15 ? KeyN-- : KeyN;
    KeyN > 28 ? KeyN-- : KeyN;
    KeyN > 56 ? KeyN -= 2 : KeyN;
    KeyN > 57 ? KeyN -= 2 : KeyN;
    if (document.activeElement === textarea) {
      key[KeyN - 1].classList.add('keyEvent');
    if (keyActive[KeyN - 1].textContent == 'back') {
      textarea.value = textarea.value.substring(0, (textarea.value.length - 1));
      event.preventDefault();
    } else if (keyActive[KeyN - 1].textContent === 'Enter') {
      textarea.value += '';
    } else if (keyActive[KeyN - 1].textContent === '←') {
        textarea.value += '';
    } else if (keyActive[KeyN - 1].textContent === '→') {
      textarea.value += '';
    } else if (keyActive[KeyN - 1].textContent === '↓') {
      textarea.value += '';
    } else if (keyActive[KeyN - 1].textContent === '↑') {
      textarea.value += '';
    } else if (keyActive[KeyN - 1].textContent == 'Caps') {
      keyCapsColor.classList.contains('caps-active') ? keyCapsColor.classList.remove('caps-active') : keyCapsColor.classList.add('caps-active');
      if (!keyShiftColor.classList.contains('shift-active')) {
        if (document.querySelector('.key59 .top').textContent == 'ru') {
          if (keyCapsColor.classList.contains('caps-active')) {
            for (let i = 0; i < 67; i++) {
              top[i].innerHTML = rusU[0][i];
              bot[i].innerHTML = rusU[1][i];
            }
          } else {
            for (let i = 0; i < 67; i++) {
            top[i].innerHTML = rusL[0][i];
            bot[i].innerHTML = rusL[1][i];
            }
          }
        } else {
          if (keyCapsColor.classList.contains('caps-active')) {
            for (let i = 0; i < 67; i++) {
              top[i].innerHTML = engU[0][i];
              bot[i].innerHTML = engU[1][i];
            }
          } else {
          for (let i = 0; i < 67; i++) {
            top[i].innerHTML = engL[0][i];
            bot[i].innerHTML = engL[1][i];
            }
          }
        }
        keyActive = document.querySelectorAll('.key .keyA');
      } else {
        if (document.querySelector('.key59 .top').textContent == 'ru') {
          if (!keyCapsColor.classList.contains('caps-active')) {
            for (let i = 0; i < 67; i++) {
              top[i].innerHTML = rusU[0][i];
              bot[i].innerHTML = rusU[1][i];
            }
          } else {
            for (let i = 0; i < 67; i++) {
            top[i].innerHTML = rusL[0][i];
            bot[i].innerHTML = rusL[1][i];
            }
          }
        } else {
          if (!keyCapsColor.classList.contains('caps-active')) {
            for (let i = 0; i < 67; i++) {
              top[i].innerHTML = engU[0][i];
              bot[i].innerHTML = engU[1][i];
            }
          } else {
          for (let i = 0; i < 67; i++) {
            top[i].innerHTML = engL[0][i];
            bot[i].innerHTML = engL[1][i];
            }
          }
        }
        keyActive = document.querySelectorAll('.key .keyA');
      }
    } else if (keyActive[KeyN - 1].textContent === 'Shift') {
      keyShiftColor.classList.contains('shift-active') ? keyShiftColor.classList.remove('shift-active') : keyShiftColor.classList.add('shift-active');
      if (keyShiftColor.classList.contains('shift-active')) {
        if (document.querySelector('.key59 .top').textContent == 'ru') {
          for (let i = 0; i < 67; i++) {
            if (keyCapsColor.classList.contains('caps-active')) {
              for (let i = 0; i < 67; i++) {
                top[i].innerHTML = rusL[0][i];
                bot[i].innerHTML = rusL[1][i];
              }
            } else {
              for (let i = 0; i < 67; i++) {
              top[i].innerHTML = rusU[0][i];
              bot[i].innerHTML = rusU[1][i];
              }
            }
            if (!top[i].classList.contains('keyA')) {
              top[i].classList.add('keyA');
              bot[i].classList.remove('keyA');
            }
          }
        } else {
          for (let i = 0; i < 67; i++) {
            if (keyCapsColor.classList.contains('caps-active')) {
              for (let i = 0; i < 67; i++) {
                top[i].innerHTML = engL[0][i];
                bot[i].innerHTML = engL[1][i];
              }
            } else {
              for (let i = 0; i < 67; i++) {
              top[i].innerHTML = engU[0][i];
              bot[i].innerHTML = engU[1][i];
              }
            }
            if (!top[i].classList.contains('keyA')) {
              top[i].classList.add('keyA');
              bot[i].classList.remove('keyA');
            }
          }
        }
        keyActive = document.querySelectorAll('.key .keyA');
      } else {
        if (document.querySelector('.key59 .top').textContent == 'ru') {
          for (let i = 0; i < 67; i++) {
            if (keyCapsColor.classList.contains('caps-active')) {
              for (let i = 0; i < 67; i++) {
                top[i].innerHTML = rusU[0][i];
                bot[i].innerHTML = rusU[1][i];
              }
            } else {
              for (let i = 0; i < 67; i++) {
              top[i].innerHTML = rusL[0][i];
              bot[i].innerHTML = rusL[1][i];
              }
            }
             if (bot[i].innerHTML !== '') {
              bot[i].classList.add('keyA');
              top[i].classList.remove('keyA');
            } else {
             bot[i].classList.remove('keyA');
              top[i].classList.add('keyA');
            }
          }
        } else {
          for (let i = 0; i < 67; i++) {
            if (keyCapsColor.classList.contains('caps-active')) {
              for (let i = 0; i < 67; i++) {
                top[i].innerHTML = engU[0][i];
                bot[i].innerHTML = engU[1][i];
              }
            } else {
              for (let i = 0; i < 67; i++) {
              top[i].innerHTML = engL[0][i];
              bot[i].innerHTML = engL[1][i];
              }
            }
             if (bot[i].innerHTML !== '') {
              bot[i].classList.add('keyA');
              top[i].classList.remove('keyA');
            } else {
             bot[i].classList.remove('keyA');
              top[i].classList.add('keyA');
            }
          }
        }
      }
    } else if (keyActive[KeyN - 1].textContent == 'Enter') {
      textarea.value += keyActive[KeyN - 1].textContent;
    } else if (keyActive[KeyN - 1].textContent === 'Space') {
      textarea.value += ' ';
    } else {
      event.preventDefault();
      textarea.value += keyActive[KeyN - 1].textContent;
    }
    }
  });
  document.addEventListener('keyup', (event) => {
    const keyName = event.code;
    let KeyN = keyBoardCode.indexOf(keyName);
    KeyN > 15 ? KeyN-- : KeyN;
    KeyN > 28 ? KeyN-- : KeyN;
    KeyN > 56 ? KeyN -= 2 : KeyN;
    KeyN > 57 ? KeyN -= 2 : KeyN;
    key[KeyN - 1].classList.remove('keyEvent');
  });
}

// eslint-disable-next-line import/prefer-default-export
export const keyboard = myKeyboard();
