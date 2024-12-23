async function getdetails(meal) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd4352517c1mshf6c8e87bbdc94ffp106b92jsnf7a40d3f550a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${meal}`, options)
    let obj = await response.json()
    displaydetails(obj)
}
let gameid=localStorage.getItem('id')
getdetails(gameid)

function displaydetails(a) {
    let box = ``
        box += `<div class="col-md-4 p-0">
                <img src="${a.thumbnail}" alt="thumbnail" class="img-page">
            </div>
            <div class="col-md-8 p-0">
                <div class="part-two-page">
                    <p class="pp-1">Title: ${a.title}</p>
                    <p class="pp-2">Category: <span>${a.developer}</span></p>
                    <p class="pp-3">Platform: <span>${a.platform}</span></p>
                    <p class="pp-4">Status: <span>${a.status}</span></p>
                    <p class="pp-5">${a.description}</p>
                        <a href="https://www.freetogame.com/open/genshin-impact" target="_blank" class="btn btn-outline-warning but">Show Game</a>
                </div>
            </div>`
    document.getElementById('page').innerHTML = box
}

document.querySelector('.btn-close').addEventListener('click', function() {
    window.location.href = 'index.html';
});
