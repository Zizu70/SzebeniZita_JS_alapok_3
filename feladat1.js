
function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1 );

}
veletlen = getRandomInt(100);

function egyezoseg() { 
    console.log("Véletlen: " + veletlen);

    const tipp = parseInt(document.getElementById("tipp").value);
    console.log("Tipp: " + tipp); 

    if (tipp === veletlen) {
        uzenet.innerHTML = "Eltaláltad!";
        console.log("Tipp =: veletlen");

    } else if (tipp > veletlen) {
        uzenet.innerHTML = "Nem találtad el! A véletlen szám kisebb mint a tipped.";
        console.log("Tipp >: veletlen");

    } else {
        uzenet.innerHTML = "Nem találtad el! A véletlen szám nagyobb mint a tipped.";
        console.log("Tipp <: veletlen");
      
    }  

} 

function ujra() {
    veletlen = getRandomInt(100);

    document.getElementById("tipp").value = "";
    document.getElementById("uzenet").textContent = "Új számot generáltunk! Kérem az új tippet!"
    

}
