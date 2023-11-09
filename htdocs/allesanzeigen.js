
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("show-all-button");

    button.addEventListener("click", function() {
        var xhr = new XMLHttpRequest();

        // Konfigurieren der Anfrage (Methode, URL)
        xhr.open("GET", "http://localhost/DHBW-Automobiles/htdocs/Backend/automobiles.xml"); // Ersetze "URL_DER_DATENQUELLE" durch die tatsächliche URL, von der du die Daten abrufen möchtest.


        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var response = xhr.responseXML;

                    var automobiles = response.getElementsByTagName("automobile");

                    // Verarbeite die Informationen
                    var outputElement = document.getElementById("output");
                    var htmlString = "";

                    for (var i = 0; i < automobiles.length; i++) {
                        var automobile = automobiles[i];
                        var marke = automobile.getElementsByTagName("Marke")[0].textContent;
                        var model = automobile.getElementsByTagName("model")[0].textContent;
                        var fahrzeugklasse = automobile.getElementsByTagName("Fahrzeugklasse")[0].textContent;
                        var schadstoffklasse = automobile.getElementsByTagName("Schadstoffklasse")[0].textContent;
                        var kraftstoff = automobile.getElementsByTagName("Kraftstoff")[0].textContent;
                        var innerorts = automobile.getElementsByTagName("innerorts")[0].textContent;
                        var ausserorts = automobile.getElementsByTagName("ausserorts")[0].textContent;
                        var kombiniert = automobile.getElementsByTagName("kombiniert")[0].textContent;
                        var co2EmissionKombiniertNEFZ = automobile.getElementsByTagName("co2EmissionKombiniertNEFZ")[0].textContent;
                        var co2EmissionKombiniertWLTP = automobile.getElementsByTagName("co2EmissionKombiniertWLTP")[0].textContent;
                        var imagesElement = automobile.getElementsByTagName("images")[0];
                        
       
                
                        if (imagesElement) {
                            var images = imagesElement.textContent;
                            
                        } else {
                            console.warn("Das 'images'-Element wurde nicht gefunden für Automobil #" + i + ". Ein Platzhalterbild wird verwendet.");
                            var images = 'http://localhost/DHBW-Automobiles/htdocs/assets/images/overview_cars/default.png'; // Setze hier den Pfad zu deinem Platzhalterbild
                        }
 

                        // Hier kannst du weitere Daten aus der XML extrahieren und in deiner Ausgabe verwenden

                        htmlString += "<div style='margin-bottom: 10px; text-align: left;'>"; // Container-Div mit etwas Abstand nach unten und linksbündiger Ausrichtung
                        htmlString += "<strong>Marke:</strong> " + marke + "<br>";
                        htmlString += "<strong>Modell:</strong> " + model + "<br>";
                        htmlString += "<strong>Fahrzeugklasse:</strong> " + fahrzeugklasse + "<br>";
                        htmlString += "<strong>Schadstoffklasse:</strong> " + schadstoffklasse + "<br>";
                        htmlString += "<strong>Kraftstoff:</strong> " + kraftstoff + "<br>";
                        htmlString += "<strong>Verbrauch innerorts:</strong> " + innerorts + "<br>";
                        htmlString += "<strong>Verbrauch ausserorts:</strong> " + ausserorts + "<br>";
                        htmlString += "<strong>kombinierter Verbrauch:</strong> " + kombiniert + "<br>";
                        htmlString += "<strong>CO2-Emission kombiniert:</strong> " + co2EmissionKombiniertNEFZ + "<br>";
                        htmlString += "<strong>co2EmissionKombiniertWLTP:</strong> " + co2EmissionKombiniertWLTP + "<br>";
                        htmlString += "</div>"; // Ende des Container-Divs
                        //htmlString += "<img src='" + images + "' alt='" + model + " - " + marke + " Automobile Image'><br>";
                        htmlString += "<hr>";

                        

                        
                    }

                    outputElement.innerHTML = htmlString;
                } else {
                    console.error("Fehler beim Abrufen der Daten. Statuscode: " + xhr.status);
                }
            }
        };

        xhr.send();
    });
});
