// document.querySelector: Busca en el HTML y devuelve el primer elemento que coincida con el selector CSS dado (en este caso la clase '.jobs-listings').
const container = document.querySelector('.jobs-listings')

const RESULTS_PER_PAGE = 3

// fetch: Realiza una petición de red asíncrona para obtener un recurso (aquí lee el archivo data.json).
fetch("./data.json")
  // .then: Espera a que la promesa anterior (fetch) se resuelva y ejecuta un callback con la respuesta.
  .then((response) => {
    // response.json(): Toma la respuesta HTTP, la lee y la transforma de formato JSON a un objeto/array nativo de JavaScript.
    return response.json();
  })
  .then((jobs) => {
    // Array.forEach: Es un bucle que recorre cada elemento de un Array. Ejecuta la función interna por cada 'job' (oferta de trabajo).
    jobs.forEach(job => {
      // document.createElement: Crea un nuevo elemento HTML en la memoria (todavía no se incrusta en el documento), especificando su etiqueta ('article').
      const article = document.createElement('article')

      // Node.className: Asigna directamente un nombre de clase CSS a este elemento.
      article.className = 'job-listing-card'

      // Node.dataset: Permite leer o escribir los atributos de datos personalizados ('data-*') del elemento HTML (por ejemplo: data-modalidad, data-nivel).
      article.dataset.modalidad = job.data.modalidad
      article.dataset.nivel = job.data.nivel
      article.dataset.technology = job.data.technology

      // Node.innerHTML: Modifica el contenido interno del elemento inyectando directamente texto que se interpretará como código HTML.
      article.innerHTML = `<div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`

      // Node.appendChild: Toma un elemento (el 'article' que creamos) y lo inserta físicamente dentro de otro elemento (el 'container') para mostrarlo en pantalla.
      container.appendChild(article)
    })
  });
