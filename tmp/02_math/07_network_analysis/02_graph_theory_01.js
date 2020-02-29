onload = function() {
  draw();
};

function draw() {
  var canvas = document.getElementById('graph_basic');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  var cvs = canvas.getContext('2d');

  cvs.beginPath();
  cvs.arc(50,50,10, 0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke();

  cvs.beginPath();
  cvs.arrow( 115, 50, 60, 50, [0, 1, -5, 1, -5, 5]);
  cvs.fill();
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(125,50,10,0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke();

  cvs.beginPath();
  cvs.arrow( 135, 50, 190, 50, [0, 1, -5, 1, -5, 5]);
  cvs.fill();
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(200,50,10,0,360*Math.PI/180,false);
  cvs.fill()

  cvs.stroke(); /* 描いた図形を線で表示させる */

  cvs.beginPath();
  cvs.arc(160,10,10,0,360*Math.PI/180,false);
  cvs.fill() 
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arrow( 132, 42, 154, 18, [0, 1, -5, 1, -5, 5]);
  cvs.fill();
  cvs.stroke();   

  cvs.beginPath();
  cvs.arrow( 160, 10, 192, 42, [0, 1, -5, 1, -5, 5]);
  cvs.fill();
  cvs.stroke();     

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("頂点1",30,35);
  cvs.fill()  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("頂点2",90,35);
  cvs.fill()  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("頂点3",195,35);
  cvs.fill()

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("頂点4",170,15);
  cvs.fill()  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("有向グラフ",85,90);
  cvs.fill()   

  cvs.stroke(); /* 描いた図形を線で表示させる */ 

  cvs.beginPath();
  cvs.arc(350,50,10, 0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke();

  cvs.beginPath();
  cvs.arrow( 415, 50, 360, 50, [0, 1, 0, 0, 0, 0]);
  cvs.fill();
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(425,50,10,0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke();

  cvs.beginPath();
  cvs.arrow( 435, 50, 490, 50, [0, 1,  0, 0,  0, 0]);
  cvs.fill();
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(500,50,10,0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arrow( 500, 50, 460, 50, [0, 1,  0, 0,  0, 0]);
  cvs.fill();
  cvs.stroke();  

  cvs.beginPath();
  cvs.arc(460,10,10,0,360*Math.PI/180,false);
  cvs.fill() 
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arrow( 460, 10, 425, 50, [0, 1,  0, 0,  0, 0]);
  cvs.fill();
  cvs.stroke();   

  cvs.beginPath();
  cvs.arrow( 460, 10, 490, 50, [0, 1,  0, 0,  0, 0]);
  cvs.fill();
  cvs.stroke();    

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("頂点1",330,35);
  cvs.fill()  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("頂点2",390,35);
  cvs.fill()  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("頂点3",495,35);
  cvs.fill()

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("頂点4",470,15);
  cvs.fill() 

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("無向グラフ",385,90);
  cvs.fill()    

  cvs.stroke(); /* 描いた図形を線で表示させる */ 

  /***************************************************************************/
  var canvas = document.getElementById('graph_weight');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  var cvs = canvas.getContext('2d');


  cvs.beginPath();
  cvs.arc(70,80,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("1",65,85);

  cvs.beginPath();
  cvs.arc(30,28,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("2",25,33);

  cvs.beginPath();
  cvs.arc(130,25,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("3",125,30);

  cvs.beginPath();
  cvs.arc(230,28,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("4",225,33);

  cvs.beginPath();
  cvs.arc(210,80,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("5",205,85);

  cvs.beginPath();
  cvs.arc(360,50,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("6",355,55);

  cvs.beginPath();
  cvs.arc(460,20,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("7",455,25);

  cvs.beginPath();
  cvs.arc(560,80,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("8",555,85);

  cvs.beginPath();
  cvs.arc(560,20,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("9",555,25);

/*===================================*/

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("2",40,65);

  cvs.beginPath();
  cvs.arrow( 58, 62, 42, 43, [0, 1, 0, 0, 0, 0]);
  cvs.stroke(); 

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("7",130,95);

  cvs.beginPath();
  cvs.arrow( 90, 80, 190, 80, [0, 1,  0, 0,  0, 0]);
  cvs.stroke(); 

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("1",70,20);

  cvs.beginPath();
  cvs.arrow( 50, 28, 110, 25, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("2",180,20);

  cvs.beginPath();
  cvs.arrow(150, 25, 210, 28, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("3",228,65);

  cvs.beginPath();
  cvs.arrow(217, 62, 224, 47, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("4",170,50);

  cvs.beginPath();
  cvs.arrow(146, 40, 195, 65, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("13",290,60);

  cvs.beginPath();
  cvs.arrow(229, 77, 340, 55, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("6",405,30);

  cvs.beginPath();
  cvs.arrow(380, 43, 440, 25, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("11",460,65);

  cvs.beginPath();
  cvs.arrow(380, 57, 541, 77, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("8",565,57);

  cvs.beginPath();
  cvs.arrow(560, 60, 560, 40, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  /***************************************************************************/
  var canvas = document.getElementById('graph_tree');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  var cvs = canvas.getContext('2d');

  cvs.beginPath();
  cvs.arc(300,20,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("1",295,25);

  cvs.beginPath();
  cvs.arc(200,90,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("2",195,95);

  cvs.beginPath();
  cvs.arc(300,90,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("3",295,95);

  cvs.beginPath();
  cvs.arc(400,90,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("4",395,95);

  cvs.beginPath();
  cvs.arc(150,160,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("5",145,165);

  cvs.beginPath();
  cvs.arc(250,160,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("6",245,165);

  cvs.beginPath();
  cvs.arc(450,160,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("7",445,165);

  cvs.beginPath();
  cvs.arrow(283, 30, 217, 80, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.arrow(300, 40, 300, 70, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.arrow(317, 30, 383, 80, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.arrow(188, 107, 162, 143, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.arrow(212, 107, 238, 143, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.arrow(412, 107, 438, 143, [0, 1,  0, 0,  0, 0]);
  cvs.stroke();  

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("根",325,20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("5と6の親",110,90);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("4の子",470,165);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("葉",270,165);

   /***************************************************************************/
  var canvas = document.getElementById('two_part_graph');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  var cvs = canvas.getContext('2d'); 


  cvs.beginPath();
  cvs.arc(100,20,20, 0,360*Math.PI/180,false);
  cvs.stroke();

  cvs.beginPath();
  cvs.arc(200,20,20, 0,360*Math.PI/180,false);
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(300,20,20, 0,360*Math.PI/180,false);
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(400,20,20, 0,360*Math.PI/180,false);
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(500,20,20, 0,360*Math.PI/180,false);
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(150,130,20, 0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke();

  cvs.beginPath();
  cvs.arc(250,130,20, 0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(350,130,20, 0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke(); 

  cvs.beginPath();
  cvs.arc(450,130,20, 0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke(); 



  var canvas = document.getElementById('strongly_and_weakly_connected_graph');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  var cvs = canvas.getContext('2d'); 






}
