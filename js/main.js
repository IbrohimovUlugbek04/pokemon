var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input-search");
var elPokeList = document.querySelector(".hero-list__js");
var elSelect = document.querySelector(".hero__search-select");

var pokeFragment = document.createDocumentFragment()
function pokemonArr(pokeAree) {
    elPokeList.innerHTML = null;
    for (const poke of pokeAree) {
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
        pokeFragment.appendChild(pokeItem)
        // merge element finish
    };
    elPokeList.append(pokeFragment)
};
pokemonArr(pokemons);

var pokeArr = ["All",];
pokemons.forEach(element => {
    element.weaknesses.forEach(function (week) {
        if (!week == pokeArr.includes(week)) {
            pokeArr.push(week);
        };
    });
});

pokeArr.forEach(pokeSelect => {
    var pokeOption = document.createElement("option");
    pokeOption.textContent = pokeSelect;
    pokeOption.value = pokeSelect;
    elSelect.appendChild(pokeOption);
});

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    var inputVal = elInput.value.trim();
    var selectVal = elSelect.value;
    var newRegex = new RegExp(inputVal, "gi");

    var resArr = pokemons.filter(item => {
        // return item.name.includes(inputVal);
        return item.name.match(newRegex) && (item.weaknesses.includes(selectVal) || selectVal == "All");
    });

    if (resArr.length > 0) {
        pokemonArr(resArr);
        elPokeList.classList.remove("error")
    } else {
        elPokeList.textContent = "Bu ma'lumot topilmadi!";
        elPokeList.classList.add("error")
    };
});
