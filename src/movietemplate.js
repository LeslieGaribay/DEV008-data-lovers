import data from './data/ghibli/ghibli.js';

const characterTemplate = document.getElementById("character-template");
const characterSection = document.querySelector(".flexbox-container-character");


// 🚧🚧🚧 Este bloque es únicamente con fines de prueba 🚧🚧🚧
const characterList = data.films[0].people; // Aquí estamos seleccionando sólo los personajes de la primera película
                                            // Después vamos a seleccionar dinámicamente la película con base en la que el usuario "clickeo"
addCharacterToLibrary(characterList);
// 🚧🚧🚧           Fin del bloque de prueba            🚧🚧🚧



function addCharacterToLibrary(characterList) {
    for (let characterIndex = 0; characterIndex < characterList.length; characterIndex++) {
        const character = characterList[characterIndex];

        const characterTemplateClone = characterTemplate.content.cloneNode(true); // Declaramos el clon, y con el content.cloneNode y el true le decimos que clone el elemento con todos los hijos
        const characterName = characterTemplateClone.querySelector(".name"); // Es como el document.getElementDyId pero con selector en lugar de ID, y sólo busca dentro del templateClone, en lugar de todo el documento
        const characterImg = characterTemplateClone.querySelector(".character-img");
        const characterGender = characterTemplateClone.querySelector(".gender");
        const characterAge = characterTemplateClone.querySelector(".age");
        const characterEyeColor = characterTemplateClone.querySelector(".eye_color");
        const characterHairColor = characterTemplateClone.querySelector(".hair_color");
        const characterSpecie = characterTemplateClone.querySelector(".specie");


        characterName.innerText = character.name;
        characterImg.src = character.img;
        characterGender.innerText = character.gender;
        characterAge.innerText = character.age;
        characterEyeColor.innerText = character.eye_color;
        characterHairColor.innerText = character.hair_color;
        characterSpecie.innerText = character.specie;

        characterSection.appendChild(characterTemplateClone);

    }
}
