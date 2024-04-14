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

((dc) => {
  const $form = dc.querySelector('contact-form');
  const $loader = dc.querySelector('contact-form-loader');
  const $response = dc.querySelector('contact-form-response');

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    $loader.classList.remove('none');

    fetch('https://formsubmit.co/ajax/csalbin86@gmail.com', {
      // El método POST es una forma de enviar datos desde un formulario web a un servidor mediante el protocolo HTTP. Los datos no son 
      // visibles en la dirección URL, a diferencia del método GET, que anexa los datos como cadenas de consulta.
      method: 'POST',

      // La información a enviar, el FormData mandara a la petición al servicio que estamos utilizando.
      body: new FormData(e.target)
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      location.hash = '#gracias';
      $form.reset();
    })
    .catch((error) => {
      console.log(error);
      let message = error.statusText || 'Ocurrio un error al enviar';
      $loader.querySelector('h3').innerHTML = `Error ${error.status}: ${message}`; 
      
    }).finally(() => {
      $loader.classList.add('none');

      setTimeout(() => {
        location.hash = '#close';
      }, 3000)
    });
  });
})(document)