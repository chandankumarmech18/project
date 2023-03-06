const btnElement=document.getElementById("btn")

const jokeEL= document.getElementById("joke")

const apikey="86St+UI7p/bmW8iydLvdbA==5ybNFGNsXTWRpvlV";

const option={
    method:"GET",
    headers: {
        "X-Api-Key":apikey
    },
};

const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function grtJoke(){

    try {
        jokeEL.innerText= "Updating..."
        btnElement.disabled=true;
        btnElement.innerText="Loading.."
        const response= await fetch(apiURL,option)
        const data = await response.json()
        btnElement.disabled=false;
        btnElement.innerText="Tell me a joke";
        jokeEL.innerText= data[0].joke;
        
    } catch (error) {
        jokeEL.innerText= "Internet connetion is pooer.."
        btnElement.disabled=false;
        btnElement.innerText="Try some tome";
        console.log(error);
    }
    
}

btnElement.addEventListener("click", grtJoke)