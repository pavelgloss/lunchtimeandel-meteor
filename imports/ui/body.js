import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  restaurants: [
    { 
        title: 'Il Nostro',
        menu: [
            {
                food: 'POLÉVKA - Dršťková',
                price: '32 Kč'
            },
            {
                food: 'Kuře pečené na medu a hrubozrnné hořčici, se zelenými fazolkami a bramborovým pyré',
                price: '109 Kč'
            },
            {
                food: 'Risotto s parmskou šunkou, hráškem, cibulí, rukolou a parmezánem',
                price: '105 Kč'
            },
            {
                food: 'Tagliatelle s tuňákem, rajčaty, cuketou, kapary, olivovým olejem a parmezánem',
                price: '99 Kč'
            },
            {
                food: 'Těstovinový salát s rajčaty, okurkou, boconccini mozzarelou, polníčkem, oliv. olejem a balzamikovou redukcí',
                price: '95 Kč'
            },
            {
                food: 'PIZZA se smetanou, šunkou od kosti, sýrem Taleggio, pórkem a mozzarellou',
                price: '95 Kč'
            },
        ]
    },
    { 
        title: 'Home Office',
        menu: [
            {
                food: 'Kedlubnový krém',
                price: ''
            },
            {
                food: 'Kuřecí křidélka s česnekovou bagetkou a dipy',
                price: ''
            },
            {
                food: 'Carpaccio z červené řepy a kozím sýrem',
                price: ''
            },
            {
                food: 'Caesar salát',
                price: ''
            },
        ]
    },
    { 
        title: 'Tradice',
        menu: [
            {
                food: 'POLÉVKA: Kuřecí vývar s masem a zeleninou, domácí kapání',
                price: '29 Kč'
            },
            {
                food: 'Konfitovaná vepřová KRKOVIČKA v kachním sádle podávaná s jablečným kysaným zelím a žemličkovým knedlíkem',
                price: '99 Kč'
            },
            {
                food: 'SPECIALITA: Grilovaný steak z KUŘECÍCH PRSOU špikovaný pikantní italskou klobásou se šťouchaným bramborem, kukuřičným klasem a zeleninovou salsou',
                price: '105 Kč'
            },
            {
                food: 'Řecký KEBAB ze sekaného výběrového masa podávaný v pitta chlebu s čerstvou krájenou zeleninou a tzatziki omáčkou, hranolky',
                price: '99 Kč'
            },
            {
                food: 'Filírovaná KRŮTÍ PRSÍČKA podávaná s kus kusem prohozeným se sušenými rajčaty a grilovanou zeleninou s bazalkovým pestem, zdobené rukolou,créme fraiche',
                price: '105 Kč'
            },
            {
                food: 'Slovácké bramborové HALUŠKY s brynzou a restovaným špekem, smažená cibulka',
                price: '99 Kč'
            },
        ]
    },
  ],
});
