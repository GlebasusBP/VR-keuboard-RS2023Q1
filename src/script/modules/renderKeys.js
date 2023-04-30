
function renderKeys(keys){
  const KEYBOARD = document.querySelector('.keyboard');

  for(let key of keys){

    const item = document.createElement('div');
    item.classList.add('key');
    item.setAttribute('id', key.id);
    item.setAttribute('code', key.code);
    KEYBOARD.append(item);

    if(key.secondery){
      item.innerHTML = `
        <span class="symbol secondery">${key.secondery.eng}</span>
        <span class="symbol primary">${key.primary.eng}</span>
      `;
    } else {
      item.innerHTML = `
        <span class="symbol primary">${key.primary.eng}</span>
      `;
    }
  }
}

export default renderKeys;