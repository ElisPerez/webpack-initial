export const greet = name => {
  console.log('Creando etiqueta h1');

  const h1 = document.createElement('h1');
  h1.innerText = `Hello ${name}`;

  document.body.append(h1);
};
