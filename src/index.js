import './style.css';
document.addEventListener("DOMContentLoaded", ()=>{
    let eredmeny;
    async function adatBetoltes(){
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();
    }
    adatBetoltes();
    function torles (id){
        let parent = document.getElementById(id);
        parent.innerHTML = "";
    }
    function Betoltes(q){
        torles("all");
        let p = document.getElementById("all");
        q = q.sort((a, b) => a.author.localeCompare(b.author));
        for(let e of q){
            let li = document.createElement("li");
            li.innerHTML = e.author + ": " + e.quote;
            p.appendChild(li);
        }
    }
    function bold(q){
        torles("boldList");
        for(let e of q){
            let li = document.createElement("li");
            let p = document.getElementById("boldList")
            let quotes = e.quote.split(" ");
            for(let i = 0; i < quotes.length; i++){
                if(quotes[i] == "the" || quotes[i] == "The"){
                    quotes[i] = quotes[i].bold();
                }
                li.innerHTML += quotes[i] + " ";
            }
            p.appendChild(li);
        }
    }
    function ns(q){
        torles("numskiir");
        let nsl = [];
        let kiir = document.getElementById("numskiir");
        for(let e of q){
            nsl.push(e.quote.length);
        }
        let sz = nsl.join(", ");
        kiir.innerHTML = sz;
    }
    function szerzo(q){
        let sznev = document.getElementById("sznev").value;
        let szamlalo = 0;
        for(let e of q){
            if(e.author == sznev){
                szamlalo++;
            }
        }
        document.getElementById("szerzoEredmeny").value = szamlalo;
    }
    document.getElementById("megjelenit").addEventListener("click", ()=>{
        Betoltes(eredmeny.quotes);
    })
    document.getElementById("bold").addEventListener("click", ()=>{
        bold(eredmeny.quotes);
    })
    document.getElementById("ns").addEventListener("click", ()=>{
        ns(eredmeny.quotes);
    })
    document.getElementById("szerzo").addEventListener("click", ()=>{
        szerzo(eredmeny.quotes);
    })
})
