/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = sym.$("rectangulo");
         console.log(element[0]);
         element[0].style.backgroundImage="url('http://www.aspiag.com/imperia/md/images/aspiag_com/aspiag_premium_hr_375x529.jpg')";
         sym.stop();
         
         clicks = 0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rectangulo}", "click", function(sym, e) {
         var r = rand(0,1);
         console.log(r);
         
         if(clicks < 10){
         	clicks++;
         	switch(r){
         	case 0:
         	$(".Stage_bomba_id").css({top: e.pageY - 200, left: e.pageX - 200});
         	 sym.getSymbol("bomba").play(); break;
         	case 1: 
         	$(".Stage_bomba2_id").css({top: e.pageY - 600, left: e.pageX - 600});
         	sym.getSymbol("bomba2").play(); break;
         }
         function rand(min, max) {
         	return Math.floor(Math.random() * (max - min + 1) + min);
         }
         }else{
         	sym.getSymbol("coco").play();
         	}
         console.log("click " + clicks);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'rectangulo'
   (function(symbolName) {   
   
   })("rectangulo");
   //Edge symbol end:'rectangulo'

   //=========================================================
   
   //Edge symbol: 'bomba'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bomba");
   //Edge symbol end:'bomba'

   //=========================================================
   
   //Edge symbol: 'bola2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bola2");
   //Edge symbol end:'bola2'

   //=========================================================
   
   //Edge symbol: 'coco'
   (function(symbolName) {   
   
   })("coco");
   //Edge symbol end:'coco'

})(jQuery, AdobeEdge, "mi_comp");