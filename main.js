/*function ask_user_name(){
    let userName = prompt("Jaké je Vaše jméno a příjmení?: ") 
 }

function ask_user_year(){
    let userYear = Number(prompt("Jaký je Váš rok narození?: "));
    let realAge = (2023 - userYear);
    let information = document.querySelector(".ukol_prvni");
    information.innerHTML = "Uživatel " + result(userName) + " má věk " + result(realAge); 
}
*/



function ask_user(){
    let userName = prompt("Jaké je Vaše jméno a příjmení?: ") 
    let userYear = Number(prompt("Jaký je Váš rok narození?: "));
    const realAge = (2023 - userYear);
    let information = document.querySelector(".ukol_prvni");
    information.innerHTML  = "Uživatel " + userName + " má věk " + realAge;
}

function change_color(){
    let change_color = String(prompt("Jaká je Tvoje oblíbená barva? Prosím, napiš ji v angličtině:D Díky! "));
    let response = document.querySelector("#text_response");
    response.style.color = change_color;
}

