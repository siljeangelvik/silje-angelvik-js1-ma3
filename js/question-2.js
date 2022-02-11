const originalURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=13ab71e013fc44f596c27f62725dcb1c";
const out = document.querySelector('.output');

function listData(list) {
    list.forEach((item) => {
        // console.log(item.name);
        let newDiv = `<div>
            <h2>${item.name}</h2>
            <p><strong>Rating: </strong> ${item.rating}</p>
            <p><strong>Tags amount: </strong> ${item.tags.length}</p>
        </div>`;
        out.innerHTML += newDiv;
    })
}

fetch(originalURL)
    .then(response => response.json())
    .then(dataArray => {
        dataArray.results.length = 8;
        // console.log(dataArray.results.length);
        listData(dataArray.results);
    })
    .catch((error) => out.innerHTML = "Something's wrong!" + error)
    .finally(() => document.querySelector(".loader").remove());


