window.addEventListener("DOMContentLoaded", (e)=>{

    let distanza = prompt("quanti km viaggerai?");
    let age = prompt("quanti anni hai?")
    const tariffa = 0.21;
    let prezzo = distanza * tariffa;
    if (age >= 65){
        let senior = ((prezzo * 60) / 100).toFixed(2);
        document.getElementById("price").innerHTML = `Il suo prezzo è: €${senior}`;
    } else if (age < 65 && age >= 18){
        document.getElementById("price").innerHTML = `Il suo prezzo è: €${prezzo.toFixed(2)}`;
    } else {
        let minorenne = ((prezzo * 80) / 100).toFixed(2);
        document.getElementById("price").innerHTML = `Il suo prezzo è: €${minorenne}`;
    }
})





