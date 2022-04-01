

document.getElementsByClassName('vodka').addEventListener('click', getVodka())

function getVodka(){
    
    const url = "www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka"
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src=data
        })
    } 
    .catch(err => {
        console.log(`error ${err}`)
    });
