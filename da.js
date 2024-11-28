function criptareCesar(text,cheie){
    //initializam un rezultatl gol
    var rezultat="";

// parcurgem fiecare litera
for( let i=0;i<text.length;i++){
//extragem fiecare litera
let litera=text[i];

//ferificam daca este litera
if(litera.match(/[a-z]/)) {
    let codeAscii = text.charCodeAt(i);
    litera = String.fromCharCode(((codeAscii - 97 + cheie) %26) +97);
    rezultat +=litera;
}
else if (litera.match(/[A-Z]/)){
   let codeAscii = text.charCodeAt(i);
    litera = String.fromCharCode(((codeAscii - 65 + cheie) %26) +65);
    rezultat +=litera;  
}
}




    return rezultat;
}



function cripteaza(){
    //citeste textul din input
    const text=document.getElementById("text-input").value;
    //citeste cheia din input-ul celalalt
    const cheie=parseInt(document.getElementById("cheie-criptare").value);
    console.log(text. cheie);
    if (isNaN(cheie)){
        alert("NU ESTE O CHEIE VALIDA");
        document.getElementById("rezultat").innerText = "Nu este o cheie valida";
        return;
    }
    //afiseaza mesaj criptat
    const rezultat =criptareCesar(text,cheie);
    document.getElementById("rezultat").innerText = rezultat;
}