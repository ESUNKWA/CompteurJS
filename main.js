 $(function(){
    let obj = {};
    let dte;
    let dateLancmnt;
    let jj, hh, mm, ss;

      let btn = $('button');
      let dateslect = $('#dateselct');
      $(btn).on('click', (event)=>{
          event.preventDefault();
          dte = $(dateslect).val();
         dates = dte.split('T')[0];
         heures = dte.split('T')[1];



         obj.year = dates.split('-')[0];
         obj.month = dates.split('-')[1];
         obj.dd = dates.split('-')[2];

         obj.hh = heures.split(':')[0];
         obj.mm = heures.split(':')[1];
         obj.ss = heures.split(':')[2];
         let dateLancmnt = new Date(obj.year,3,30,15,30,0);
         console.log(obj )
         console.log(dateLancmnt )

         fctCompteur();

      });


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

  })










