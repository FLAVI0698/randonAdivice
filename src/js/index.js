const descriptionConselho = document.getElementById("descriptionConselho"); // titulo do conselho
const conselho = document.getElementById("conselho"); //texto do conselho
const btn = document.getElementById("btn"); // botão do conselho.

async function randomAdvice () {
    try{
        const response= await fetch("https://api.adviceslip.com/advice");
        
        if(!response.ok) throw new Error("Ocorreu um erro ao tentar buscar as informações da API");

        const adviceRandom = await response.json();
        descriptionConselho.innerText = adviceRandom.slip.id;
        conselho.innerText = adviceRandom.slip.advice;

    }catch(err) {
        console.log(err)
     }
}   

btn.addEventListener("click", randomAdvice)