let navList = document.querySelectorAll('.nav-item')
navList.forEach((list) => {
    list.addEventListener('click', function (e) {
        console.log(e.target.innerText)
        let game = e.target.innerText
        getGame(game)
    })
})

let dataList = []
async function getGame(meal) {
    showloading()
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd4352517c1mshf6c8e87bbdc94ffp106b92jsnf7a40d3f550a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${meal}`, options)
    if (response.ok) {
        let data = await response.json()
        console.log(data)
        dataList = data
        displayGame()
    }
    hideloading()
}

document.addEventListener('DOMContentLoaded', function() {
    showloading()
    getGame('mmorpg')
})

function displayGame() {
    let box = '';
    for (let i = 0; i < dataList.length; i++) {
        box += `
        <a href="./index2.html">
        <div class="col carddd" id='${dataList[i].id}'>
                    <div class="card" id='${dataList[i].id}'>
                        <img id='${dataList[i].id}' src="${dataList[i].thumbnail}" class="card-img-top img-card" alt="...">
                        <div class="card-body" id='${dataList[i].id}'>
                            <div class="words-card d-flex  justify-content-between" id='${dataList[i].id}'>
                                <div class="part-one" id='${dataList[i].id}'>
                                    <p id='${dataList[i].id}'>${dataList[i].title}</p>
                                </div>
                                <div class="part-two" id='${dataList[i].id}'>
                                    <p id='${dataList[i].id}' class="mb-0 p-2 rounded">free</p>
                                </div>
                            </div>
                            <p id='${dataList[i].id}' class="card-text text-center">${dataList[i].short_description}</p>
                        </div>
                        <div id='${dataList[i].id}' class="card-footer">
                            <small id='${dataList[i].id}' class="text-body-secondary d-flex justify-content-between align-items-center">
                                <div id='${dataList[i].id}' class="one">
                                    <p id='${dataList[i].id}'>${dataList[i].genre}</p>
                                </div>
                                <div id='${dataList[i].id}' class="one">
                                    <p id='${dataList[i].id}'>${dataList[i].platform}</p>
                                </div>
                            </small>
                        </div>
                    </div>
                </div>
                
                </a>`
    }
    document.getElementById('cardb').innerHTML = box
}

const loadingScreen = document.querySelector('.loading')

function showloading() {
    loadingScreen.classList.remove("d-none")
}

function hideloading() {
    loadingScreen.classList.add("d-none")
}

const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('load', function () {
    navLinks[0].classList.add('active');
});
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

function id() {
    document.addEventListener('click', (e) => {
        const gameid = e.target.id;
        localStorage.setItem('id', gameid)
    })
}
id()