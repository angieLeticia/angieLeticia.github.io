// Efecto de desplazamiento suave al hacer clic en el botón de desplazamiento
const scrollButton = document.querySelector('.scroll-btn');
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('#biografia').offsetTop,
    behavior: 'smooth'
  });
});

// Efecto de resaltado al pasar el cursor sobre las redes sociales
const redesSociales = document.querySelectorAll('.redes a');
redesSociales.forEach(redSocial => {
  redSocial.addEventListener('mouseover', () => {
    redSocial.style.color = '#ff1493';
  });
  redSocial.addEventListener('mouseout', () => {
    redSocial.style.color = '#ff69b4';
  });
});

// Efecto de validación básica en el formulario de contacto
const formulario = document.querySelector('form');
formulario.addEventListener('submit', event => {
  event.preventDefault();

  const nombre = formulario.querySelector('#nombre').value;
  const email = formulario.querySelector('#email').value;
  const mensaje = formulario.querySelector('#mensaje').value;

  if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
    alert('Por favor, completa todos los campos del formulario.');
  } else {
    // Aquí puedes enviar el formulario o realizar otras acciones
    alert('Formulario enviado con éxito.');
    formulario.reset();
  }
});
// Efecto de aparición gradual en la sección de biografía al hacer scroll
const bioSection = document.querySelector('#biografia');

window.addEventListener('scroll', () => {
  const sectionTop = bioSection.offsetTop;
  const sectionHeight = bioSection.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
    bioSection.classList.add('show');
  }
});
// Efecto de aparición gradual en las secciones de Experiencia y Habilidades al hacer scroll
const experienciaSection = document.querySelector('.experiencia');
const habilidadesSection = document.querySelector('.habilidades');

window.addEventListener('scroll', () => {
  const sectionTop = experienciaSection.offsetTop;
  const sectionHeight = experienciaSection.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
    experienciaSection.classList.add('show');
    habilidadesSection.classList.add('show');
  }
});
