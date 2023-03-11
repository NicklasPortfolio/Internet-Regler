function changeText(id) 
  {
    if (id ==="upphov") {
      document.getElementById("title").innerHTML = "Upphovsrättslagen"
      document.getElementById("p1").innerHTML = "Upphovsrätt betyder att en person som skapar något, som en låt eller en bok, har rättigheterna till det och kan bestämma hur det används och sprids. Det skyddar skaparen från att någon annan kopierar eller säljer deras verk utan tillstånd.";
      document.getElementById("p2").innerHTML = "Hur länge upphovsrätten gäller beror på vilket land man är i och när verket skapades. I USA, till exempel, varar upphovsrätten i allmänhet i 70 år efter att skaparen har dött. I Sverige är det oftast 70 år efter årsskiftet när skaparen dog. Efter det så kallas det för allmän egendom och vem som helst kan använda det utan att fråga om tillstånd.Hur länge upphovsrätten gäller beror på vilket land man är i och när verket skapades. I USA, till exempel, varar upphovsrätten i allmänhet i 70 år efter att skaparen har dött. I Sverige är det oftast 70 år efter årsskiftet när skaparen dog. Efter det så kallas det för allmän egendom och vem som helst kan använda det utan att fråga om tillstånd.";
      document.getElementById("h1").innerHTML = "Vad menas med upphovsrätt?"
      document.getElementById("h2").innerHTML = "Hur länge gäller upphovsrätten?"
    }

    if (id ==="gdpr") {
        document.getElementById("title").innerHTML = "GDPR"
        document.getElementById("p1").innerHTML = "GDPR står för General Data Protection Regulation, vilket är en lagstiftning som infördes i EU 2018 för att skydda den personliga integriteten och rättigheterna för personuppgiftsansvariga inom EU.";
        document.getElementById("p2").innerHTML = "Syftet med GDPR är att öka insynen och kontrollen över hur personuppgifter hanteras och används av organisationer och företag, samtidigt som det ger enskilda personer större kontroll över sina personuppgifter och rätt att få dem raderade om de inte längre är nödvändiga eller om behandlingen är olaglig.";
        document.getElementById("h1").innerHTML = "Vad menas med GDPR?"
        document.getElementById("h2").innerHTML = "Vad är syftet med GDPR?"
      }

    if (id ==="lek") {
        document.getElementById("title").innerHTML = "Lagen om Elektronisk Kommunikation"
        document.getElementById("p1").innerHTML = "Lagen om elektronisk kommunikation, även känd som Ekom-lagen, är en svensk lagstiftning som reglerar användningen av elektronisk kommunikation och telekommunikationstjänster. ";
        document.getElementById("p2").innerHTML = "Syftet med lagen är att skydda enskildas integritet och rättigheter vid användning av elektronisk kommunikation och att främja konkurrens på marknaden för telekommunikationstjänster.";
        document.getElementById("h1").innerHTML = "Vad menas med lagen om elektronisk kommunikation?"
        document.getElementById("h2").innerHTML = "Vad är syftet med lagen?"
      }
    
    if (id ==="säkerhet") {
        document.getElementById("title").innerHTML = "Säkerhet"
        document.getElementById("p1").innerHTML = "Säkerhet är superviktigt när det gäller att skydda ens personliga uppgifter och konton från hackare. Ett sätt att göra det är att använda olika lösenord för olika tjänster. Men hur kommer man ihåg alla lösenorden? Här kommer lösenordshanterare till undsättning! En lösenordshanterare är som en säker låda där man kan lagra alla sina lösenord.";
        document.getElementById("p2").innerHTML = "Det är också viktigt att uppdatera lösenorden regelbundet och aldrig dela dem med någon annan. Genom att använda en lösenordshanterare och skapa starka lösenord för alla ens konton, kan man göra det svårare för hackare att komma åt ens personliga uppgifter och konton.";
        document.getElementById("h1").innerHTML = "Varför är säkerhet viktigt?"
        document.getElementById("h2").innerHTML = "Om lösenord:"
      }
  }