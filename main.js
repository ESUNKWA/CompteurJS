
let dateLancmnt = new Date(2021,3,30,15,30,0);
let jj, hh, mm, ss;
fctCompteur();
function fctCompteur(){
    
    let dateAct = new Date();
    let ss = ( dateLancmnt.getTime() - dateAct.getTime() ) / 1000;//durée en seconde
    
    jj = Math.floor(ss / 86400);
    
    ss = ss - (jj * 86400);

    hh = Math.floor(ss / 3600);

    ss = ss - (hh * 3600);
     
    mm         = Math.floor( ss / 60 );

    ss         = Math.floor(ss - (mm * 60));

     document.getElementById('jj').innerHTML = (jj < 10) ? '0'+jj : jj;
     document.getElementById('hh').innerHTML = (hh < 10) ? '0'+hh : hh;
     document.getElementById('mm').innerHTML = (mm < 10) ? '0'+mm : mm;
     document.getElementById('ss').innerHTML = (ss < 10) ? '0'+ss : ss;

    setTimeout(fctCompteur, 1000)


  }










