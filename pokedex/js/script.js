const pokemonName = document.querySelector('.pokemom_name');
const pokemonNumber = document.querySelector('.pokemom_number');
const pokemonimage = document.querySelector('.pokemom_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_scarch');
const buttonPrev = document.querySelector('.btn-priv');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch
    (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.salus === 200){
    const data = await APIResponse.json();
   return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading ...';
    pokemonNumber.innerHTML = '';
    const data = await fetchPokemon(pokemon);



if (data) {
    pokemonimage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonimage.src = data['sprites']['generation-v']['black-white']['animated']['front-default']
    input.value = '';
    searchPokemon = data.id;

}else{
    pokemonimage.style.display = 'none';
    pokemonName.innerHTML = 'Not Found:c'
    pokemonNumber.innerHTML = '';
}
}

form.addEventListener('submit' , (event) =>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

buttonPrev.addEventListener('click', () =>{
    if(searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon)
    }

});
buttonNext.addEventListener('click' , () =>{
    searchPokemon += 1;
    renderPokemon(searchPokemon);

});

renderPokemon(searchPokemon);





