function renderKeyboard(){
  const BODY = document.querySelector('body');

  BODY.innerHTML = `
  <div class="container">
    <textarea type="textarea" class="textarea"></textarea>
    <div class="keyboard"></div>
  </div>
  `;
}

export default renderKeyboard;