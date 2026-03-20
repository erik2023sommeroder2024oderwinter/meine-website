function begruessung() {
    let name= prompt("wie heisst du?");
    alert("Hallo, "+ name +"! Willkommen auf meiner Seite.");
}
function dunkelmodus(){
    let hintergrund = document.body.style.backgroundColor;

    if (hintergrund=== "#1f6898"){
        document.body.style.backgroundColor="#00ccff";
        document.body.style.color="#333";
    }else{
        document.body.style.backgroundColor="#1f6898";
        document.body.style.color="white";
    }
}
let witze= [
   "Treffen sich zwei Schnecken. Sagt die eine: Vorsicht, in einer Stunde kommt ein Bus!",
    "Was ist grün und klopft an der Tür? Ein Klopfsalat!",
    "Ich wollte einen Witz über die Deutsche Bahn machen, aber ich glaube, der kommt nicht an.",
    "Was sagt ein Bauer, der seinen Trecker sucht? Weg ist er!",
    "Wie nennt man einen Bumerang, der nicht zurückkommt? Einen Stock!", 
    "Was ist das Gegenteil von einem Wal? Ein Wenig!",
    "Treffen sich zwei Hellseher. Sagt der eine: Dir geht's gut. Und mir?", 
    "Papa, warum fliegen die Vögel in den Süden? – Weil Laufen zu lange dauern würde",
    "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann.",
    "treffen sich zwei Fische. Sagt der eine: Hai!",
    "Warum gehen Ameisen nicht in die Kirche? Weil sie Insekten sind.",
    "Ich habe einen Witz über Zeit, aber der ist schon vorbei.",
    "Warum hat der Kalender so viele Freunde? Weil er viele Dates hat.",
    "Was macht ein Clown im Büro? Faxen!",
    "Warum können Skelette so schlecht lügen? Weil sie nichts zu verbergen haben.",
    "was ist orange und läuft durch den Wald? Eine Wanderine.",
    "Warum trinken Kühe kein Alkohol? Weil sie Angst vor Muhdigkeit haben.",
    "Treffen sich zwei Jäger. Beide tot.",
    "Warum hat der Computer eine Brille? Weil er Probleme mit Windows hat.",
    "Was ist grün und klopft an die Tür? Ein Klopfsalat.",
    "Warum gehen Pilze so gerne auf Partys? Weil sie gute Freunde sind.",
    "Wie nennt man einen Bumerang, der nicht zurückkommt? Stock.",
    "Warum war das Mathebuch traurig? Weil es viele Probleme hatte.",
    "Was macht ein Pirat am Computer? Er drückt die Enter-Taste.",
    "Warum können Fische nicht Fahrrad fahren? Weil sie keinen Lenker haben.",
    "Was ist braun und kann fliegen? Eine Schokofliege.",
    "Warum hat der Apfel Streit mit der Banane? Weil er sauer war.",
    "Wie nennt man einen schlafenden Stier? Einen Bulldozer.",
    "Warum gehen Elefanten nicht auf Bäume? Weil sie Angst vor Höhen haben.",
    "Was ist klein, grün und dreieckig? Ein kleines grünes Dreieck.",
    "Warum kann ein Fahrrad nicht stehen? Weil es zwei müde ist.",
    "Was macht ein Keks unter einem Baum? Krümel.",
    "Warum hat der Bäcker keine Angst? Weil er jeden Tag Brötchen verdient."


];
function zeigeWitz() {
    let index= Math.floor(Math.random()* witze.length);
    let witz= witze[index];
    document.getElementById("witz-ausgabe").innerText=witz;
}

function scrollNachOben(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
}


function wuerfeln() {
    let zahl= Math.floor(Math.random() * 6) + 1;
    //alert(zahl);
    //document.getElementById("wuerfel-ausgabe").innerHTML ="<br>du hast eine <strong>" + zahl +"<strong> gewürfelt!";
    let emojis =[" ","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣"];
    document.getElementById("wuerfel-ausgabe").innerHTML= emojis[zahl] +"<br>du hast eine <strong>" + zahl +"<strong> gewürfelt!";
}

function scrollNachOben(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
}


let timer = null;

function startTimer(){
    timer = setTimeout(easterEgg, 3000);
}


function stopTimer(){
    clearTimeout(timer);
}

function easterEgg(){

    document.getElementById("secret-image").style.distplay = "block";

    
    let farben = ["#00833e," "#00b0ca", "#f59e0b", "#74c3c","#a855f7"];
    for (let i = 0; i < 80; i++) {
        let k = document.createElement("div");
        k.classList.add("konfetti");
        k.style.left = Math.random() * 100 + "vw";
        k.style.backgroundColor = farben[Math.floor(Math.random() * farben.length)];
        k.style.animationDelay = bMath.random() * 1.5 + "s";
        document.body.appendChild(k);

        setTimeout(() => k.remove(), 3000);
    }
}