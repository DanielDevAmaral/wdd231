const footer = document.querySelector('#year-location');
const today = new Date();

footer.innerHTML = `Daniel Amaral &copy ${today.getFullYear()} | Aracaju - Brazil`;

// last mod
const element = document.querySelector('#lastModified');
const lastModified = new Date(document.lastModified);
element.innerHTML = `Last Modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;
