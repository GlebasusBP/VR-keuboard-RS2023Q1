function pressPhisicsKey(){

  const KEYS = document.querySelectorAll('.key');

  document.addEventListener('keydown', (event)=> {
    for(let key of KEYS){
      if(event.code === key.getAttribute('code')){
        key.classList.add('active-key');
      }
    }
  });

  document.addEventListener('keyup', (event)=> {
    for(let key of KEYS){
      if(event.code === key.getAttribute('code')){
        key.classList.remove('active-key');
      }
    }
  });


}

export default pressPhisicsKey;