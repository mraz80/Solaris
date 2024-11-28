# Solaris
individuell-examination
poster

Solaris
En webbplats byggd med HTML, CSS & vanilla JS om vårt solsystem. Det ska gå att klicka på en planet och där få mer information om planeten i någon form av "overlay". Se skiss nedan.

UI
Skiss hittar du här.

API
Base URL

https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com
Methods

enpoint	method	desc
/keys	POST	returnerar en API nyckel.
/bodies	GET	returnerar alla stora himlakroppar i vårt solsystem.
Authentication

API:et är låst med en API-nyckel. Alla GET-request utan en sådan kommer generar en 401.

För att få läsrättigheter måste du i din request bifoga headern x-zocom med en giltig API-nyckel.

Ex.

let resp = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': '<solaris-key-here>'}
})
Modell
egenskap	datatyp	enhet
id	number	-
type	string	star & planet
name	string	namnet på himlakroppen
latinName	string	Latinska namnet på himlakroppen
rotation	number	Längd på dygn i antal jorddygn runt sin egen axel
circumference	number	Omkrets i km
temp	Object	Temperatur day och night i celcius.
distance	number	km från solen
orbitalPeriod	Number	Antal jorddygn runt solen
desc	string	Beskrivning av himlakroppen
moons	Array	Lista med månarnas namn
Exempel
{
    id: 2,
    type: 'planet',
    name: 'Venus',
    latinName: 'Venus',
    rotation: 116,
    circumference: 38025,
    temp: {
        day: 430,
        night: -173
    },
    distance: 10820000,
    orbitalPeriod: 225,
    desc: 'Venus har ...',
    moons: []
}
Betygskriterier
Godkänt

Att det ser ut enligt skiss
Att API:et används
Sidan fungerar med inga fel i konsolen i developer tools
Vettiga namn på variabler och funktioner på engelska
Inga hårdkodade API-nycklar utan det ska alltid göras ett anrop för att få en API-nyckel först
Väl godkänt

Allt i godkänt
Använd arrow-functions istället för funktioner med function-nyckelordet
Att din kod är uppdelad i moduler där du har skrivit en kommentar i varje modul om varför du har delat upp som du gjort
Sista inlämningsdag

söndagen 8/12
