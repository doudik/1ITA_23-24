const chars = "aáäàãâbcćčdďeéěëèêfghiíïìîjklĺľmnńňñoóôòõöőpqrŕřsśštťuúùůüũûvwxyýzźž";
let input = document.querySelector("#textInput");
input.addEventListener("keydown", searchAndWriteChars);

function searchAndWriteChars(){
    if(event.key == "Enter"){
        let inputText = input.value;
        for (let i = 0; i < chars.length; i++) {
            let tmp = 0;
            for (let j = 0; j < inputText.length; j++) {
                if(chars[i].toUpperCase() == inputText[j].toUpperCase()){
                    tmp++;
                }
            }
            if(tmp > 0){
                let tr = document.createElement("tr");
                let ltd = document.createElement("td");
                let rtd = document.createElement("td");
                let rrtd = document.createElement("td");
                
                ltd.innerHTML = chars[i].toUpperCase();
                rtd.innerHTML = tmp;
                rrtd.innerHTML = Math.floor((tmp / inputText.length) * 10000) / 100 + "%";
                tr.appendChild(ltd);
                tr.appendChild(rtd);
                tr.appendChild(rrtd);
    
                const table = document.querySelector("table");
                table.appendChild(tr);
            }
        }
    }
}
