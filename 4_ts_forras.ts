function osszesOszto(szam:number):number[]{
    var osztok:number[] = [];

    for(var i:number = 0; i <= szam; i++){
        if(szam % i == 0){
            osztok.push(i);
        }
    }

    return osztok;
}

function parosDarab(szamok:number[]):number{
    var parosDb:number = 0;

    for(var i:number = 0; i < szamok.length; i++){
        if(szamok[i] % 2 == 0){
            parosDb++;
        }
    }

    return parosDb;
}

function fuggvenyhivasPalindrom(fuggveny: () => string):boolean{
    var eredmeny:string = fuggveny();
    var eredmenyVissza:string = eredmeny.split('').reverse().join('');

    return eredmeny == eredmenyVissza;
}