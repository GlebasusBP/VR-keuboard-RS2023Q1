import renderKeyboard from "./modules/renderKeyboard";
import keysArr from './modules/keys'
import renderKeys from "./modules/renderKeys";
import pressPhisicsKey from "./modules/pressPhisicsKey";

window.addEventListener('DOMContentLoaded', ()=>{
  renderKeyboard();
  renderKeys(keysArr);
  pressPhisicsKey();
});