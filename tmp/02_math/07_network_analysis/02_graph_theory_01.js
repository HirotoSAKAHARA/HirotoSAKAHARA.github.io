onload = function() {
  draw();
};

function draw() {
  var canvas = document.getElementById('rectangle');
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
}
