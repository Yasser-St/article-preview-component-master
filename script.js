   // VARIANLES
   const elementFiftChild = document.querySelector('.element').childNodes[5];
   const element = document.querySelector('.element');
   const shareOptions = document.querySelector('.share-options');
   const writerInfo = document.querySelector('#writer-info');
   const btn = document.querySelector('#share-btn');
   
   // FONCTION
   
   function mobileShare() { //This represent the mobile verstion for display and indsplay the share options
     
     elementFiftChild.classList.toggle('activeMobile');

     

     if(elementFiftChild.classList.contains('activeMobile')){
       
       element.style.backgroundColor = "#48556a";// for give the element backgruond color div when the button is clicked
       writerInfo.style.display = "none";//for indisplay the writer info when the share info is displayed
       
       //btn color and background color
       btn.style.backgroundColor = "#6d7f97";
       btn.style.color = "#ecf2f8"; 
     }else{
       
       element.style.backgroundColor = "white";//for return the element div to an initial color
       writerInfo.style.display = "flex";//for display the writer ifno 
       //btn color and background color
       btn.style.backgroundColor = " #ecf2f8";
       btn.style.color = "#6d7f97";
     }
   };

   function desktopShare() { // This function represent the desktop verstion for display and indisplay the share options
     elementFiftChild.classList.toggle('activeDesktop');

     if(elementFiftChild.classList.contains('activeDesktop')){
       btn.style.backgroundColor = "#6d7f97";
       btn.style.color = "#ecf2f8";

     } else{

       btn.style.backgroundColor = " #ecf2f8";
       btn.style.color = "#6d7f97";
     }
   }
 
   // ADD EVENT LISTENER
   document.getElementById('share-btn').addEventListener("click",()=>{
    // media query wiht a condition for add specific function on specific width of the window
     const widthS = window.matchMedia("(max-width:38.75rem)");

     if(widthS.matches){
       mobileShare();
       
     } else{
       desktopShare();
     }
   });