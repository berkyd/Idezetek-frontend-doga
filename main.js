(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{let e;function t(e){document.getElementById(e).innerHTML=""}!async function(){let e=await fetch("/quotes.json");await e.json()}(),document.getElementById("megjelenit").addEventListener("click",(()=>{!function(e){t("all");let n=document.getElementById("all");e=e.sort(((e,t)=>e.author.localeCompare(t.author)));for(let t of e){let e=document.createElement("li");e.innerHTML=t.author+": "+t.quote,n.appendChild(e)}}(e.quotes)})),document.getElementById("bold").addEventListener("click",(()=>{!function(e){t("boldList");for(let t of e){let e=document.createElement("li"),n=document.getElementById("boldList"),o=t.quote.split(" ");for(let t=0;t<o.length;t++)"the"!=o[t]&&"The"!=o[t]||(o[t]=o[t].bold()),e.innerHTML+=o[t]+" ";n.appendChild(e)}}(e.quotes)})),document.getElementById("ns").addEventListener("click",(()=>{!function(e){t("numskiir");let n=[],o=document.getElementById("numskiir");for(let t of e)n.push(t.quote.length);let l=n.join(", ");o.innerHTML=l}(e.quotes)})),document.getElementById("szerzo").addEventListener("click",(()=>{!function(e){let t=document.getElementById("sznev").value,n=0;for(let o of e)o.author==t&&n++;document.getElementById("szerzoEredmeny").value=n}(e.quotes)}))}))})();