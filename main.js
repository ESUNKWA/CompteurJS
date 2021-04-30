 $(function(){

    $('.card-group').hide();

    let obj = {};
    let dte;
    let dtesys = new Date();
    var dateLancmnt;

      let btn = $('button');
      let dateslect = $('#dateselct');
      $(btn).on('click', (event)=>{

          event.preventDefault();

          dte = $(dateslect).val();
          
         let datesChaine = dte.split('T')[0];
         let heuresChaine = dte.split('T')[1];

         if( dte == ''){
             alert('Veuillez sélectionner la date et l\'heure');
             return
         }

         let datesChaineTab = datesChaine.split('-');
         let heuresChaineTab = heuresChaine.split(':');

         obj.year = datesChaineTab[0];
         obj.month = datesChaineTab[1]-1;
         obj.dd = datesChaineTab[2];

         obj.hh = heuresChaineTab[0];
         obj.mm = heuresChaineTab[1];
         obj.ss = 0;
         
         dateLancmnt = new Date(obj.year,obj.month,obj.dd,obj.hh,obj.mm,obj.ss);
         dateLancmnt1 = new Date(2021,03,01,17,45,0);
         $('.card-group').show();
       
         fctCompteur();

  
      });

      function fctCompteur(){
        
        let jj, hh, mm;
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

         if( jj== 0 && hh == 0 && mm == 0 && ss == 0 ){
            return;
         }
    
        setTimeout(fctCompteur, 1000)
    
      }

  })










