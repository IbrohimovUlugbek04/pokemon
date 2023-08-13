var elPokeList = document.querySelector(".hero-list__js");
for (const poke of pokemons) {
    // create element start
    var pokeItem = document.createElement("li");
    pokeItem.classList.add("poke__item");
    var pokeId = document.createElement("span");
    pokeId.classList.add("poke__id-num");
    var pokeTitle = document.createElement("h3");
    pokeTitle.classList.add("poke__heading");
    var pokeImg = document.createElement("img");
    pokeImg.classList.add("poke__images");
    var pokeWeight = document.createElement("span");
    pokeWeight.classList.add("poke__weight");
    var pokeTime = document.createElement("time");
    pokeTime.classList.add("poke__time");
    var pokeText = document.createElement("p");
    pokeText.classList.add("poke__paragrph");
    // create element finish
    // started adding data
    pokeTitle.textContent = poke.name;
    pokeId.textContent = poke.num;
    pokeImg.src = poke.img;
    pokeImg.alt = poke.name;
    pokeWeight.textContent = poke.weight;
    pokeTime.textContent = poke.spawn_time;
    pokeTime.dateTime = `2023-08-15 ${poke.spawn_time}`;
    pokeText.textContent = poke.weaknesses.join(", ");
    // finished adding data
    // merge element start
    pokeItem.append(pokeId, pokeTitle, pokeImg, pokeWeight, pokeTime, pokeText);
    elPokeList.append(pokeItem)
    // merge element finish
};
