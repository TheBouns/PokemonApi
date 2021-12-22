const random = function random() {
  let number = Math.floor(Math.random() * 550);
  return `https://pokeapi.co/api/v2/pokemon/${number}`;
};
//Funcion para capturar la imagen del Pokemon
async function getPokemon(random) {
  try {
    let res = await fetch(random);
    let data = await res.json();
    let imgURL = data.sprites.back_default;
    let namePoke = data.name;
    let imgReal = data["sprites"]["other"]["dream_world"]["front_default"];
    return (document.getElementById(
      "infoPkm"
    ).innerHTML = `<img class="poke"src ="${imgReal}"></img>`);
  } catch (error) {
    console.log(`${error.stack}`);
  }
}
//Funcion para el numero y el nombre del Pokemon
async function pokemonName(random) {
  try {
    let res = await fetch(random);
    let data = await res.json();
    return (document.getElementById(
      "namePokemon"
    ).innerHTML = `${data.name} #${data.id}`);
  } catch (error) {
    console.log(`${error.stack}`);
  }
}
//Funcion para saber los tipos del pokemon
async function pokemonTypes(random) {
  try {
    let res = await fetch(random);
    let data = await res.json();
    let types = data["types"];
    let pokeTypes = [];
    for (let i = 0; i < types.length; i++) {
      if (types.length == 1) {
        return (document.getElementById(
          "types"
        ).innerHTML = `<p class="bocadillo">${types[0].type.name}</p>`);
      } else {
        return (document.getElementById(
          "types"
        ).innerHTML = `<p class="bocadillo">${types[0].type.name}</p><p class="bocadillo">${types[1].type.name}</p>`);
      }
    }
    pokeTypes.join(" ");
  } catch (error) {
    console.log(`${error.stack}`);
  }
}
//funcion para sacar peso y altura

async function pokemonImc(random) {
  try {
    let res = await fetch(random);
    let data = await res.json();
    let height = data.height / 10;
    let weight = data.weight / 10;
    return (document.getElementById(
      "pokeImc"
    ).innerHTML = `<p>${weight}Kg</p><p>${height}m</p>`);
  } catch (error) {
    console.log(`${error.stack}`);
  }
}
//Funcion para sacar stats de los pokemon
async function pokemonStats(random) {
  try {
    let res = await fetch(random);
    let data = await res.json();
    let stats = data.stats;
    let arrStats = [];
    for (let i = 0; i < stats.length; i++) {
      switch (stats[i].stat.name) {
        case "hp":
          arrStats.push(
            `<p class="green">${stats[i].stat.name} ${stats[i].base_stat}</p>`
          );
          break;
        case "attack":
          arrStats.push(
            `<p class="red">${stats[i].stat.name} ${stats[i].base_stat}</p>`
          );
          break;
        case "defense":
          arrStats.push(
            `<p class="blue">${stats[i].stat.name} ${stats[i].base_stat}</p>`
          );
          break;
        case "special-attack":
          arrStats.push(
            `<p class="grey">${stats[i].stat.name} ${stats[i].base_stat}</p>`
          );
          break;
        case "special-defense":
          arrStats.push(
            `<p class="yellow">${stats[i].stat.name} ${stats[i].base_stat}</p>`
          );
          break;
        case "speed":
          arrStats.push(
            `<p class="orange">${stats[i].stat.name} ${stats[i].base_stat}</p>`
          );
          break;
      }
    }
    console.log(data); //console.log para ver la informacion del objeto traido de la api
    //  arrStats.push(`<p>base experience ${data.base_experience}</p>`);
    arrStats = arrStats.join("");
    return (document.getElementById("baseStats").innerHTML = arrStats);
  } catch (error) {
    console.log(`${error.stack}`);
  }
}

const chosenPokemon = random();
pokemonName(chosenPokemon);
getPokemon(chosenPokemon);
pokemonTypes(chosenPokemon);
pokemonImc(chosenPokemon);
pokemonStats(chosenPokemon);
