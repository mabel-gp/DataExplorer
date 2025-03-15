import homeView from './views/home.js'
import animatedView from './views/animated.js';
import romanticView from './views/romantic.js';
import errorView from './views/error.js';

const routes ={
    "": homeView,
    "home": homeView,
    "animated": animatedView,
    "romantic": romanticView,
    "error": errorView,
};

function renderPage(){
    let hash = location.hash.slice(1);
    const principal = document.getElementById('main');

    if (routes[hash]) {
        routes[hash]().then(html => { 
            principal.innerHTML = html;
        }).catch(error => {
            console.error(error);
            principal.innerHTML = '<h1>Error al cargar la vista</h1>';
        });
    } else {
        principal.innerHTML = errorView();
    }
};


window.addEventListener('load', renderPage);
window.addEventListener('hashchange', renderPage);

