   
function szamol() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const kerulet = a + b + c; 
    console.log("K: " + kerulet);
   
    const s = kerulet / 2;
    console.log("S: " + s);
    
    const terulet = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log("T: " + terulet);
    
    const eredmeny = document.getElementById("eredmeny");
    eredmeny.innerHTML = "A háromszög kerülete: " + kerulet + " cm és a területe " + terulet + "  cm2";
 
}   
