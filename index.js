// ####--- MENU ---####
((dc) => {
  let menu = dc.querySelector('.menu')
  let menu_btn = dc.querySelector('.menu-btn svg:first-child');
  let menu_btn_close = dc.querySelector('.menu-btn svg:last-child');

  dc.querySelector('.menu-btn').addEventListener('click', mostrarMenu);

  function mostrarMenu() {
    menu.classList.toggle('active');
    menu_btn.classList.toggle('none');
    menu_btn_close.classList.toggle('none');
  }

  dc.addEventListener('click', (e) => {
    if (! e.target.matches('.menu a')) return;

    menu.classList.toggle('active');
    menu_btn.classList.toggle('none');
    menu_btn_close.classList.toggle('none');
  })
})(document)