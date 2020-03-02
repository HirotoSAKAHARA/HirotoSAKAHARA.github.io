onload = function() {
  draw();
};


/*円の中に数字を入れて表示する関数*/
function drawCircleWithNumber(cvs, center_x, center_y, num, background_color, forward_color)
{
  cvs.fillStyle = background_color
  cvs.beginPath();
  cvs.arc(center_x,center_y,20, 0,360*Math.PI/180,false);
  cvs.fill()
  cvs.stroke();

  cvs.fillStyle = forward_color
  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText(num,center_x - 5, center_y + 5);

}

/*端点の円弧を考慮して直線の両端を削る関数*/
function getModifiedEdge(afrom_x, afrom_y, ato_x, ato_y, circle_width)
{
    theta = Math.atan2( ato_y - afrom_y, ato_x - afrom_x);
    from_x = afrom_x + circle_width * Math.cos(theta);
    from_y = afrom_y + circle_width * Math.sin(theta);
    to_x = ato_x - circle_width * Math.cos(theta);
    to_y = ato_y - circle_width * Math.sin(theta);
    return {from_x: from_x, from_y: from_y, to_x: to_x, to_y: to_y}
}

/*端点の円弧を考慮しながら直線を書く関数*/
function drawLineWithNoArrow(cvs, afrom_x, afrom_y, ato_x, ato_y, circle_width)
{
    let{from_x, from_y, to_x, to_y} 
       = getModifiedEdge(afrom_x, afrom_y, ato_x, ato_y, circle_width)

    cvs.beginPath();
    cvs.arrow( from_x, from_y, to_x , to_y, [0, 1,  0, 0,  0, 0]);
    cvs.fill();
    cvs.stroke(); 

}

/*端点の円弧を考慮しながら矢印を書く関数*/
function drawLineWithSingleArrow(cvs, afrom_x, afrom_y, ato_x, ato_y, circle_width)
{
    let{from_x, from_y, to_x, to_y} 
       = getModifiedEdge(afrom_x, afrom_y, ato_x, ato_y, circle_width)

    cvs.beginPath();
    cvs.arrow( from_x, from_y, to_x , to_y, [0, 1, -5, 1, -5, 5]);
    cvs.fill();
    cvs.stroke(); 
}

/*端点の円弧を考慮しながら双方向の矢印を書く関数*/
function drawLineWithBothArrow(cvs, afrom_x, afrom_y, ato_x, ato_y, circle_width)
{
    let{from_x, from_y, to_x, to_y} 
       = getModifiedEdge(afrom_x, afrom_y, ato_x, ato_y, circle_width)

    cvs.beginPath();
    cvs.arrow( from_x, from_y, to_x , to_y, [0, 1, -5, 1, -5, 5]);
    cvs.arrow( to_x, to_y, from_x , from_y, [0, 1, -5, 1, -5, 5]);
    cvs.fill();
    cvs.stroke(); 
}


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


  drawCircleWithNumber(cvs, 70, 80, 1, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs, 30, 28, 2, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,130, 25, 3, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,230, 28, 4, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,210, 80, 5, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,360, 50, 6, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,460, 20, 7, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,560, 80, 8, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,560, 20, 9, "rgb(255,255,255)", "rgb(0,0,0)");

/*===================================*/

  drawLineWithNoArrow (cvs, 70, 80, 30, 28, 20);
  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("2",40,65);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("7",130,95);
  drawLineWithNoArrow (cvs, 70, 80, 210 , 80, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("1",70,20);
  drawLineWithNoArrow (cvs, 30, 28, 130 , 25, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("2",180,20);
  drawLineWithNoArrow (cvs, 130, 25, 230 , 28, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("3",228,65);
  drawLineWithNoArrow (cvs, 210, 80, 230 , 28, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("4",170,50);
  drawLineWithNoArrow (cvs, 130, 25, 210 , 80, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("13",290,60);
  drawLineWithNoArrow (cvs, 210, 80, 360 , 50, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("6",405,30);
  drawLineWithNoArrow (cvs, 360, 50, 460 , 20, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("11",460,65);
  drawLineWithNoArrow (cvs, 360, 50, 560 , 80, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("8",565,57);
  drawLineWithNoArrow (cvs, 560, 20, 560 , 80, 20);


  /***************************************************************************/
  var canvas = document.getElementById('graph_tree');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  var cvs = canvas.getContext('2d');

  drawCircleWithNumber(cvs,300, 20, 1, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,200, 90, 2, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,300, 90, 3, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,400, 90, 4, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,150,160, 5, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,250,160, 6, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,450,160, 7, "rgb(255,255,255)", "rgb(0,0,0)");

  drawLineWithNoArrow (cvs, 300, 20, 200 , 90, 20);
  drawLineWithNoArrow (cvs, 300, 20, 300 , 90, 20);
  drawLineWithNoArrow (cvs, 300, 20, 400 , 90, 20);
  drawLineWithNoArrow (cvs, 200, 90, 150 ,160, 20);
  drawLineWithNoArrow (cvs, 200, 90, 250 ,160, 20);
  drawLineWithNoArrow (cvs, 400, 90, 450 ,160, 20);

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

  drawCircleWithNumber(cvs,100, 20, " ", "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,200, 20, " ", "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,300, 20, " ", "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,400, 20, " ", "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,500, 20, " ", "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,150,130, " ", "rgb(0,0,0)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,250,130, " ", "rgb(0,0,0)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,350,130, " ", "rgb(0,0,0)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,450,130, " ", "rgb(0,0,0)", "rgb(0,0,0)");

  drawLineWithNoArrow (cvs, 100, 20, 150 ,130, 20);
  drawLineWithNoArrow (cvs, 100, 20, 250 ,130, 20);
  drawLineWithNoArrow (cvs, 100, 20, 450 ,130, 20);

  drawLineWithNoArrow (cvs, 200, 20, 250 ,130, 20);
  drawLineWithNoArrow (cvs, 200, 20, 350 ,130, 20);

  drawLineWithNoArrow (cvs, 300, 20, 150 ,130, 20);
  drawLineWithNoArrow (cvs, 300, 20, 350 ,130, 20);
  drawLineWithNoArrow (cvs, 300, 20, 450 ,130, 20);

  drawLineWithNoArrow (cvs, 400, 20, 150 ,130, 20);

  drawLineWithNoArrow (cvs, 500, 20, 150 ,130, 20);
  drawLineWithNoArrow (cvs, 500, 20, 350 ,130, 20);
  drawLineWithNoArrow (cvs, 500, 20, 450 ,130, 20);


  var canvas = document.getElementById('strongly_and_weakly_connected_graph');
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  var cvs = canvas.getContext('2d'); 

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("強連結な有向グラフ",30,120);

  drawCircleWithNumber(cvs, 50, 20, 1, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs, 80, 80, 2, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,120, 30, 3, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,150, 80, 4, "rgb(255,255,255)", "rgb(0,0,0)");

  drawLineWithSingleArrow(cvs, 50, 20, 80 ,80, 20);
  drawLineWithBothArrow(cvs, 80, 80, 120 ,30,20);
  drawLineWithSingleArrow(cvs, 120, 30, 50 ,20, 20);
  drawLineWithBothArrow(cvs, 80, 80, 150 ,80, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("弱連結な有向グラフ",230,120);

  drawCircleWithNumber(cvs,250, 20, 1, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,280, 80, 2, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,320, 30, 3, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,350, 80, 4, "rgb(255,255,255)", "rgb(0,0,0)");

  drawLineWithSingleArrow(cvs, 250, 20, 280 ,80, 20);
  drawLineWithSingleArrow(cvs, 320, 30, 280 ,80,20);
  drawLineWithSingleArrow(cvs, 320, 30, 250 ,20, 20);
  drawLineWithBothArrow(cvs, 280, 80, 350 ,80, 20);

  cvs.beginPath();
  cvs.font = '16px sunserif'
  cvs.fillText("弱連結でない有向グラフ",415,120);

  drawCircleWithNumber(cvs,450, 20, 1, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,480, 80, 2, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,520, 30, 3, "rgb(255,255,255)", "rgb(0,0,0)");
  drawCircleWithNumber(cvs,550, 80, 4, "rgb(255,255,255)", "rgb(0,0,0)");

  drawLineWithBothArrow(cvs, 450, 20, 480 ,80, 20);
  drawLineWithSingleArrow(cvs, 520, 30, 550 ,80, 20);

}
