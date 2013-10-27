/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle',
            type:'rect',
            rect:['auto','auto','71.4%','82%','71px','52px'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Ellipse2',
            type:'ellipse',
            rect:['auto','auto','103px','103px','47%','35.3%'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(181,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '240px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "max-width", '770px'],
            ["style", "width", '100%']
         ],
         "${_Rectangle}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '52px'],
            ["style", "height", '81.96%'],
            ["style", "right", '71px'],
            ["style", "left", 'auto'],
            ["style", "width", '71.41%']
         ],
         "${_Ellipse2}": [
            ["style", "top", 'auto'],
            ["color", "background-color", 'rgba(181,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "bottom", '25.59%'],
            ["style", "height", '103px'],
            ["style", "right", '76.3%'],
            ["style", "left", 'auto'],
            ["style", "width", '103px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1160,
         autoPlay: true,
         labels: {
            "bomba": 0
         },
         timeline: [
            { id: "eid14", tween: [ "style", "${_Ellipse2}", "right", '48.9%', { fromValue: '76.3%'}], position: 0, duration: 554 },
            { id: "eid16", tween: [ "style", "${_Ellipse2}", "right", '47.4%', { fromValue: '48.9%'}], position: 554, duration: 606 },
            { id: "eid13", tween: [ "style", "${_Ellipse2}", "bottom", '27.1%', { fromValue: '25.59%'}], position: 0, duration: 554 },
            { id: "eid15", tween: [ "style", "${_Ellipse2}", "bottom", '27.06%', { fromValue: '27.1%'}], position: 554, duration: 606 },
            { id: "eid8", tween: [ "style", "${_Ellipse2}", "width", '235px', { fromValue: '103px'}], position: 0, duration: 554 },
            { id: "eid7", tween: [ "style", "${_Ellipse2}", "height", '235px', { fromValue: '103px'}], position: 0, duration: 554 },
            { id: "eid3", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 554 },
            { id: "eid10", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 554, duration: 488 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-8621381");
