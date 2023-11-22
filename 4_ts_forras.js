function osszesOszto(szam) {
    var osztok = [];
    for (var i = 0; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    var parosDb = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            parosDb++;
        }
    }
    return parosDb;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var eredmeny = fuggveny();
    var eredmenyVissza = eredmeny.split('').reverse().join('');
    return eredmeny == eredmenyVissza;
}
