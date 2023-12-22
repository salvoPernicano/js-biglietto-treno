function confirm() {
  let kilometri = document.getElementById("kilometri").value;
  let age = document.getElementById("age").value;
  let tariffa = kilometri * 0.21;

  if (age >= 65) {
    let senior = ((tariffa * 60) / 100).toFixed(2);
    document.getElementById("price").innerHTML = `Il suo prezzo è: €${senior}`;
  } else if (age < 65 && age >= 18) {
    document.getElementById(
      "price"
    ).innerHTML = `Il suo prezzo è: €${tariffa.toFixed(2)}`;
  } else {
    let minorenne = ((tariffa * 80) / 100).toFixed(2);
    document.getElementById(
      "price"
    ).innerHTML = `Il suo prezzo è: €${minorenne}`;
  }
}
