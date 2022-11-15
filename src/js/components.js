import '../css/components.css';
import webpacklogo from '../assets/img/webpacklogo.png';

export const greet = name => {
  console.log('Creando etiqueta h1');

  const h1 = document.createElement('h1');
  h1.innerText = `Hello ${name}`;

  document.body.append(h1);

  // Image
  console.log(webpacklogo);
  const img = document.createElement('img');
  img.src = webpacklogo;
  img.alt = 'Logo Webpack';

  document.body.append(img);
};
