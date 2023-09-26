
    const ora = new Date().getHours();
    console.log(ora);  
    
    if (ora < 10) {
        popUpContent = "Jó reggelt!";
        document.addEventListener("DOMContentLoaded", () => {
            const popUpContent = document.getElementById('popUpContent')
            popUpContent.innerText = "Jó reggelt!"
        })
        console.log(popUpContent);
        
    } else if (ora < 18) {
        popUpContent = "Szép napot!";
        document.addEventListener("DOMContentLoaded", () => {
            const popUpContent = document.getElementById('popUpContent')
            popUpContent.innerText = "Szép napot!";
        })
        console.log(popUpContent);
        
    } else if (ora < 21) {
        var popUpContent = "Jó estét!";
        document.addEventListener("DOMContentLoaded", () => {
            const popUpContent = document.getElementById('popUpContent')
            popUpContent.innerText = "Jó estét!";
        })
        console.log(popUpContent);
       
    } else {
        var popUpContent = "Jó éjszakát!";
        document.addEventListener("DOMContentLoaded", () => {
            const popUpContent = document.getElementById('popUpContent')
            popUpContent.innerText = "Jó éjszakát!";
        })
        console.log(popUpContent);
        
    }
    
