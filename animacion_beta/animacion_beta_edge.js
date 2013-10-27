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
            id:'bomba',
            type:'rect',
            rect:['323px','227px','auto','auto','auto','auto']
         },
         {
            id:'bomba2',
            type:'rect',
            rect:['323px','227px','auto','auto','auto','auto']
         },
         {
            id:'coco',
            type:'rect',
            rect:['-193','283','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'coco',
            symbolName:'coco'
         },
         {
            id:'bomba2',
            symbolName:'bomba'
         },
         {
            id:'rectangulo',
            symbolName:'rectangulo'
         },
         {
            id:'bomba',
            symbolName:'bomba'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bomba2}": [
            ["style", "top", '595px'],
            ["style", "right", 'auto'],
            ["style", "left", '429px'],
            ["style", "bottom", 'auto']
         ],
         "${_rectangulo}": [
            ["style", "top", '33.22%'],
            ["transform", "scaleY", '1.5882'],
            ["transform", "scaleX", '1.212'],
            ["style", "height", '333px'],
            ["style", "left", '21.44%'],
            ["style", "width", '309px']
         ],
         "${_coco}": [
            ["style", "top", '-21px'],
            ["style", "opacity", '1'],
            ["style", "left", '-196px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '240px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '776px'],
            ["style", "max-width", '770px'],
            ["style", "width", '540px']
         ],
         "${_bomba}": [
            ["style", "top", '222px'],
            ["style", "right", 'auto'],
            ["style", "left", '333px'],
            ["style", "bottom", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 398,
         autoPlay: true,
         timeline: [
            { id: "eid146", tween: [ "style", "${_coco}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid136", tween: [ "style", "${_rectangulo}", "left", '24.57%', { fromValue: '21.44%'}], position: 0, duration: 36 },
            { id: "eid124", tween: [ "style", "${_bomba2}", "top", '595px', { fromValue: '595px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "transform", "${_rectangulo}", "scaleY", '1.5882', { fromValue: '1.5882'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_bomba}", "left", '322px', { fromValue: '333px'}], position: 0, duration: 292 },
            { id: "eid106", tween: [ "style", "${_bomba}", "left", '331px', { fromValue: '322px'}], position: 292, duration: 48 },
            { id: "eid117", tween: [ "style", "${_bomba}", "left", '333px', { fromValue: '331px'}], position: 340, duration: 58 },
            { id: "eid96", tween: [ "style", "${_bomba}", "top", '220px', { fromValue: '222px'}], position: 0, duration: 292 },
            { id: "eid105", tween: [ "style", "${_bomba}", "top", '210px', { fromValue: '220px'}], position: 292, duration: 48 },
            { id: "eid118", tween: [ "style", "${_bomba}", "top", '201px', { fromValue: '210px'}], position: 340, duration: 58 },
            { id: "eid137", tween: [ "style", "${_rectangulo}", "top", '30.1%', { fromValue: '33.22%'}], position: 0, duration: 36 },
            { id: "eid158", tween: [ "transform", "${_rectangulo}", "scaleX", '1.212', { fromValue: '1.212'}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_coco}", "top", '287px', { fromValue: '-21px'}], position: 0, duration: 36 },
            { id: "eid123", tween: [ "style", "${_bomba2}", "left", '429px', { fromValue: '429px'}], position: 0, duration: 0 },
            { id: "eid144", tween: [ "style", "${_coco}", "left", '-190px', { fromValue: '-196px'}], position: 0, duration: 36 }         ]
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
"bomba": {
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
      rect: ['-129.7%','-120.1%','103px','103px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(181,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '103px']
         ],
         "${_Ellipse2}": [
            ["style", "top", '-109.8%'],
            ["color", "background-color", 'rgba(181,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "bottom", 'auto'],
            ["style", "height", '103px'],
            ["style", "right", 'auto'],
            ["style", "left", '-259.38%'],
            ["style", "width", '103px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 647.3046875,
         autoPlay: true,
         timeline: [
            { id: "eid7", tween: [ "style", "${_Ellipse2}", "height", '235px', { fromValue: '103px'}], position: 0, duration: 98 },
            { id: "eid3", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 98 },
            { id: "eid10", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 98, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Ellipse2}", "width", '235px', { fromValue: '103px'}], position: 0, duration: 98 },
            { id: "eid33", tween: [ "style", "${_Ellipse2}", "left", '-115.68%', { fromValue: '-259.38%'}], position: 0, duration: 98 },
            { id: "eid35", tween: [ "style", "${_Ellipse2}", "left", '-107.86%', { fromValue: '-115.68%'}], position: 98, duration: 0 },
            { id: "eid37", tween: [ "style", "${_Ellipse2}", "top", '-115.67%', { fromValue: '-109.8%'}], position: 0, duration: 98 },
            { id: "eid39", tween: [ "style", "${_Ellipse2}", "top", '-120.88%', { fromValue: '-115.67%'}], position: 647, duration: 0 }         ]
      }
   }
},
"bola2": {
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
      rect: ['6px','10px','141px','129px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(181,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["style", "top", '10px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '129px'],
            ["style", "left", '6px'],
            ["style", "width", '141px']
         ],
         "${symbolSelector}": [
            ["style", "height", '277px'],
            ["style", "width", '329px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 308,
         autoPlay: false,
         timeline: [
            { id: "eid116", tween: [ "style", "${_Ellipse}", "top", '-100px', { fromValue: '10px'}], position: 0, duration: 308 },
            { id: "eid115", tween: [ "style", "${_Ellipse}", "left", '-141px', { fromValue: '6px'}], position: 0, duration: 308 }         ]
      }
   }
},
"coco": {
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
      rect: ['0px','0px','931px','155px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(181,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '155px'],
            ["style", "width", '931px']
         ],
         "${_Ellipse2}": [
            ["style", "left", '0px'],
            ["style", "top", '86px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 148,
         autoPlay: true,
         timeline: [
            { id: "eid142", tween: [ "style", "${_Ellipse2}", "left", '7px', { fromValue: '0px'}], position: 0, duration: 122 },
            { id: "eid151", tween: [ "style", "${_Ellipse2}", "left", '-384px', { fromValue: '7px'}], position: 122, duration: 26 }         ]
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
