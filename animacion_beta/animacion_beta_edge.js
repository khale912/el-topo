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
            id:'fondo',
            type:'image',
            rect:['0','0','540px','776px','auto','auto'],
            fill:["rgba(0,0,0,0)",'fondo.png','0px','0px']
         },
         {
            id:'rectangulo',
            type:'rect',
            rect:['22.6%','24.9%','309px','333px','auto','auto']
         },
         {
            id:'Rocket',
            type:'rect',
            rect:['auto','auto','auto','auto','331px','325px']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['-43px','-20px','641px','815px','auto','auto'],
            fill:["rgba(181,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'humo2',
            type:'image',
            rect:['-180px','-90px','901px','901px','auto','auto'],
            fill:["rgba(0,0,0,0)",'humo.jpg','0px','0px']
         },
         {
            id:'compartir',
            type:'image',
            rect:['140px','795px','274px','82px','auto','auto'],
            fill:["rgba(0,0,0,0)",'compartir.jpg','0px','0px']
         },
         {
            id:'Click',
            type:'rect',
            rect:['-28px','-10px','608px','804px','auto','auto'],
            fill:["rgba(181,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [
         {
            id:'rectangulo',
            symbolName:'rectangulo'
         },
         {
            id:'Rocket',
            symbolName:'Rocket'
         }
         ]
      },
   states: {
      "Base State": {
         "${_humo2}": [
            ["style", "top", '-90px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '-180px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '-20px'],
            ["style", "opacity", '0'],
            ["style", "left", '-43px']
         ],
         "${_Rocket}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", '312px'],
            ["style", "right", '695px'],
            ["style", "left", 'auto'],
            ["style", "top", 'auto']
         ],
         "${_rectangulo}": [
            ["style", "top", '33.22%'],
            ["transform", "scaleY", '1.5882'],
            ["transform", "scaleX", '1.212'],
            ["style", "height", '333px'],
            ["style", "left", '21.44%'],
            ["style", "width", '309px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '239.98px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '776px'],
            ["style", "max-width", '769.99px'],
            ["style", "width", '540px']
         ],
         "${_Click}": [
            ["style", "top", '156px'],
            ["style", "height", '529px'],
            ["style", "opacity", '0'],
            ["style", "left", '84px'],
            ["style", "width", '375px']
         ],
         "${_compartir}": [
            ["style", "top", '795px'],
            ["style", "height", '82px'],
            ["style", "left", '140px'],
            ["style", "width", '274px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1671.8147298302,
         autoPlay: true,
         labels: {
            "humo": 627
         },
         timeline: [
            { id: "eid480", tween: [ "style", "${_Click}", "left", '84px', { fromValue: '84px'}], position: 0, duration: 0, easing: "easeInQuart" },
            { id: "eid2072", tween: [ "style", "${_compartir}", "top", '639px', { fromValue: '795px'}], position: 1339, duration: 333, easing: "easeOutExpo" },
            { id: "eid2054", tween: [ "transform", "${_humo2}", "scaleY", '1', { fromValue: '0.8'}], position: 627, duration: 712, easing: "easeOutExpo" },
            { id: "eid1959", tween: [ "style", "${_humo2}", "opacity", '1', { fromValue: '0'}], position: 627, duration: 712, easing: "easeOutExpo" },
            { id: "eid478", tween: [ "style", "${_Click}", "width", '375px', { fromValue: '375px'}], position: 0, duration: 0, easing: "easeInQuart" },
            { id: "eid2053", tween: [ "transform", "${_humo2}", "scaleX", '1', { fromValue: '0.8'}], position: 627, duration: 712, easing: "easeOutExpo" },
            { id: "eid476", tween: [ "style", "${_Click}", "height", '529px', { fromValue: '529px'}], position: 0, duration: 0, easing: "easeInQuart" },
            { id: "eid1633", tween: [ "style", "${_Rocket}", "right", '695px', { fromValue: '695px'}], position: 0, duration: 0, easing: "easeInQuart" },
            { id: "eid450", tween: [ "style", "${_Click}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInQuart" },
            { id: "eid1632", tween: [ "style", "${_Rocket}", "bottom", '312px', { fromValue: '312px'}], position: 0, duration: 0, easing: "easeInQuart" },
            { id: "eid481", tween: [ "style", "${_Click}", "top", '156px', { fromValue: '156px'}], position: 0, duration: 0, easing: "easeInQuart" }         ]
      }
   }
},
"rectangulo": {
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
      rect: ['0px','0px','309px','333px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(181,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '333px'],
            ["style", "width", '309px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Rocket": {
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
      rect: ['-243px','-353px','148px','247px','auto','auto'],
      id: 'cohete3',
      transform: [[],['129']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','cohete.png','0px','0px']
   },
   {
      rect: ['0','0','69px','235px','auto','auto'],
      id: 'llama2',
      transform: [[],['129']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','llama.png','0px','0px']
   },
   {
      rect: ['-24px','-115px','295px','295px','auto','auto'],
      id: 'kaboom2',
      transform: [[],['-47']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','kaboom.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_kaboom2}": [
            ["style", "top", '-115px'],
            ["style", "opacity", '0'],
            ["style", "left", '-24px'],
            ["transform", "rotateZ", '-47deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '451px'],
            ["style", "width", '209px']
         ],
         "${_llama2}": [
            ["style", "top", '-299px'],
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '129deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '-271px']
         ],
         "${_cohete3}": [
            ["style", "top", '-361px'],
            ["style", "opacity", '1'],
            ["style", "left", '-237px'],
            ["transform", "rotateZ", '129deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 603,
         autoPlay: true,
         timeline: [
            { id: "eid1661", tween: [ "style", "${_cohete3}", "opacity", '0', { fromValue: '1'}], position: 414, duration: 19, easing: "easeInQuart" },
            { id: "eid1558", tween: [ "transform", "${_llama2}", "scaleX", '0.42751', { fromValue: '1'}], position: 17, duration: 50, easing: "easeInQuart" },
            { id: "eid1604", tween: [ "transform", "${_llama2}", "scaleX", '0.42751', { fromValue: '1'}], position: 123, duration: 50, easing: "easeInQuart" },
            { id: "eid1606", tween: [ "transform", "${_llama2}", "scaleX", '0.42751', { fromValue: '1'}], position: 200, duration: 50, easing: "easeInQuart" },
            { id: "eid1608", tween: [ "transform", "${_llama2}", "scaleX", '0.42751', { fromValue: '1'}], position: 279, duration: 50, easing: "easeInQuart" },
            { id: "eid1610", tween: [ "transform", "${_llama2}", "scaleX", '0.42751', { fromValue: '1'}], position: 364, duration: 50, easing: "easeInQuart" },
            { id: "eid1314", tween: [ "style", "${_llama2}", "left", '-270px', { fromValue: '-271px'}], position: 0, duration: 17, easing: "easeInQuart" },
            { id: "eid1536", tween: [ "style", "${_llama2}", "left", '-270px', { fromValue: '-270px'}], position: 17, duration: 120, easing: "easeInQuart" },
            { id: "eid1602", tween: [ "style", "${_llama2}", "left", '-101px', { fromValue: '-270px'}], position: 137, duration: 277, easing: "easeInQuart" },
            { id: "eid1734", tween: [ "style", "${_kaboom2}", "opacity", '1', { fromValue: '0.000000'}], position: 279, duration: 135, easing: "easeInQuart" },
            { id: "eid1736", tween: [ "style", "${_kaboom2}", "opacity", '0', { fromValue: '1'}], position: 414, duration: 189, easing: "easeInQuart" },
            { id: "eid1659", tween: [ "style", "${_llama2}", "opacity", '0', { fromValue: '1'}], position: 414, duration: 19, easing: "easeInQuart" },
            { id: "eid1549", tween: [ "style", "${_llama2}", "-webkit-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 17, duration: 0, easing: "easeInQuart" },
            { id: "eid2073", tween: [ "style", "${_llama2}", "-moz-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 17, duration: 0, easing: "easeInQuart" },
            { id: "eid2074", tween: [ "style", "${_llama2}", "-ms-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 17, duration: 0, easing: "easeInQuart" },
            { id: "eid2075", tween: [ "style", "${_llama2}", "msTransformOrigin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 17, duration: 0, easing: "easeInQuart" },
            { id: "eid2076", tween: [ "style", "${_llama2}", "-o-transform-origin", [50,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,0]}], position: 17, duration: 0, easing: "easeInQuart" },
            { id: "eid1267", tween: [ "style", "${_cohete3}", "top", '-204px', { fromValue: '-361px'}], position: 0, duration: 414, easing: "easeInQuart" },
            { id: "eid1315", tween: [ "style", "${_llama2}", "top", '-300px', { fromValue: '-299px'}], position: 0, duration: 17, easing: "easeInQuart" },
            { id: "eid1537", tween: [ "style", "${_llama2}", "top", '-302px', { fromValue: '-300px'}], position: 17, duration: 120, easing: "easeInQuart" },
            { id: "eid1603", tween: [ "style", "${_llama2}", "top", '-149px', { fromValue: '-302px'}], position: 137, duration: 277, easing: "easeInQuart" },
            { id: "eid1266", tween: [ "style", "${_cohete3}", "left", '-63px', { fromValue: '-237px'}], position: 0, duration: 414, easing: "easeInQuart" },
            { id: "eid1559", tween: [ "transform", "${_llama2}", "scaleY", '0.59684', { fromValue: '1'}], position: 17, duration: 50, easing: "easeInQuart" },
            { id: "eid1605", tween: [ "transform", "${_llama2}", "scaleY", '0.59684', { fromValue: '1'}], position: 123, duration: 50, easing: "easeInQuart" },
            { id: "eid1607", tween: [ "transform", "${_llama2}", "scaleY", '0.59684', { fromValue: '1'}], position: 200, duration: 50, easing: "easeInQuart" },
            { id: "eid1609", tween: [ "transform", "${_llama2}", "scaleY", '0.59684', { fromValue: '1'}], position: 279, duration: 50, easing: "easeInQuart" },
            { id: "eid1611", tween: [ "transform", "${_llama2}", "scaleY", '0.59684', { fromValue: '1'}], position: 364, duration: 50, easing: "easeInQuart" }         ]
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
})(jQuery, AdobeEdge, "mi_comp");
