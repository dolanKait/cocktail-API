document.getElementById('vodka').addEventListener('click', getVodka)

function getVodka(){
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka"

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('img').src=data.drinks[0].strDrinkThumb
            document.querySelector('h2').innerText=data.drinks[0].strDrink
            document.querySelector('section').innerText=data.drinks[0].strInstructions

        })
        .catch(err => {
            console.log(`error ${err}`)
         });
}