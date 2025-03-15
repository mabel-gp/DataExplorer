export default function homeView(){
    return new Promise(resolve =>{
        resolve(`
            <div class="grettings">
            <h1 id="principal-title">¡Hola!</h1>
            <h1 id="subtitle-one">Bienvenidos a Movie Data Explorer</h1>
            <h2 id="subtitle-two">Haz click en una de las siguientes categorías:</h2>
            </div>

            <div class="buttons">
            <button onclick="location.hash='animated'" class="button-start" id="button-animated">Animadas</button>
            <button onclick="location.hash='romantic'"  class="button-start" id="button-romantic">Románticas</button>
            </div>
        `);
    }); 
};
