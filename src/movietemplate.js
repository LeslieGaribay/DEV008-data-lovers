// import data from './data/ghibli/ghibli.js';

// const characterTemplate = document.getElementById("character-template");
// const characterSection = document.querySelector(".flexbox-container-character");
// const locationTemplate = document.getElementById("location-template");
// const locationSection = document.querySelector(".flexbox-container-locations");


// // const characterList = data.films[0].people; // Aquí estamos seleccionando sólo los personajes de la primera película
// // Después vamos a seleccionar dinámicamente la película con base en la que el usuario "clickeo"
         



// function addCharacterToLibrary(characterList) {
//   for (let characterIndex = 0; characterIndex < characterList.length; characterIndex++) {
//   const character = characterList[characterIndex];

//   const characterTemplateClone = characterTemplate.content.cloneNode(true); // Declaramos el clon, y con el content.cloneNode y el true le decimos que clone el elemento con todos los hijos
//   const characterName = characterTemplateClone.querySelector(".name"); // Es como el document.getElementDyId pero con selector en lugar de ID, y sólo busca dentro del templateClone, en lugar de todo el documento
//   const characterImg = characterTemplateClone.querySelector(".character-img");
//   const characterGender = characterTemplateClone.querySelector(".gender");
//   const characterAge = characterTemplateClone.querySelector(".age");
//   const characterEyeColor = characterTemplateClone.querySelector(".eye_color");
//   const characterHairColor = characterTemplateClone.querySelector(".hair_color");
//   const characterSpecie = characterTemplateClone.querySelector(".specie");


//   characterName.innerText = character.name;
//   characterImg.src = character.img;
//   characterGender.innerText = character.gender;
//   characterAge.innerText = character.age;
//   characterEyeColor.innerText = character.eye_color;
//   characterHairColor.innerText = character.hair_color;
//   characterSpecie.innerText = character.specie;

//   characterSection.appendChild(characterTemplateClone);

//   }
// }

// const locationList = data.films[0].locations;
//   addLocationToLibrary = (locationList);




// function addLocationToLibrary(locationList) {
//   for (let locationIndex = 0; locationIndex < locationList.length; locationIndex++) {
//   const location = locationList[locationIndex];

//   const locationTemplateClone = locationTemplate.content.cloneNode(true);
//   const locationName = locationTemplateClone.querySelector(".location-name");
//   const locationImg = locationTemplateClone.querySelector(".location-img")
//   const locationClimate = locationTemplateClone.querySelector(".climate");
//   const locationTerrain = locationTemplateClone.querySelector(".terrain");
//   const locationSurface = locationTemplateClone.querySelector(".surface-water");
//   const locationResidents = locationTemplateClone.querySelector(".residents");

//   locationName.innerText = location.name;
//   locationImg.src = location.img;
//   locationClimate.innerText = location.climate;
//   locationTerrain.innerText = location.terrain;
//   locationSurface.innerText = location.surface_water;
//   locationResidents.innerText = location.residents;

//   locationSection.appendChild(locationTemplateClone);

//   }
// }

