
   
   
   
   // desplegar summary quitando el atributo Ope n
   
   const $detailsList = document.querySelectorAll('details')
   //console.log($detailsList)
   $detailsList.forEach(($details) => {
       console.log($details);
       
       $details.querySelector('summary').addEventListener('click', expand)

   })

   function expand() {
       $detailsList.forEach(($details) => {
           console.log("GAAAAAAAAAA")
           $details.removeAttribute('open')

       })
   }