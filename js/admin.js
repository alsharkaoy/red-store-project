function passvalues(){
    var fristname=document.getElementById("txt").value;
    localStorage.setItem("textvalue",fristname);
    return false;
}





































SetColor(localStorage.getItem("maincolor") || "#d8d8d8" );

function getColorElement(color){
    return document.getElementById("color-" + color);
}

getColorElement("red").addEventListener("click", () => {
    localStorage.setItem( "mainColor" , '#FBBEC6' );
    SetColor(localStorage.getItem("maincolor") || "#d8d8d8" );
});

getColorElement("green").addEventListener("click",() => {
    localStorage.setItem("mainColor",'#96A8A0');
    SetColor(localStorage.getItem("maincolor") || "#d8d8d8" );
});

getColorElement("white").addEventListener("click", () => {
    localStorage.setItem( "mainColor" , '#d8d8d8' );
    SetColor(localStorage.getItem("maincolor") || "#d8d8d8" );
});