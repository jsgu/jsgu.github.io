/*  初始化css */
function addCSS(cssText) {
    var style = document.createElement('style'),head = document.head || document.getElementsByTagName('head')[0];
	    style.type = 'text/css';
	    if (style.styleSheet) {var func = function() {try {style.styleSheet.cssText = cssText;} catch (e) {}};if (style.styleSheet.disabled) {setTimeout(func, 10);} else {func();}} else {var textNode = document.createTextNode(cssText);style.appendChild(textNode);}
	    head.appendChild(style);
}
addCSS('html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}a{background-color:transparent}a:active,a:hover{outline:0}body{font-family:"Helvetica Neue",Helvetica,Arial,serif;font-size:15px;font-weight:400;line-height:1.5;color:#666;background:#fafafa url(./img/body-bg.jpg) 0 0 repeat}p{margin-top:0}a{color:#2879d0}a:hover{color:#2268b2}header{padding-top:40px;padding-bottom:40px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;background:#2e7bcf url(./img/header-bg.jpg) 0 0 repeat-x;border-bottom:solid 1px #275da1}header h1{width:540px;margin-top:0;margin-bottom:0.2em;font-size:72px;font-weight:normal;line-height:1;color:#fff;letter-spacing:-1px}header h2{width:540px;margin-top:0;margin-bottom:0;font-size:26px;font-weight:normal;line-height:1.3;color:#9ddcff;letter-spacing:0}.inner{position:relative;width:940px;margin:0 auto}#content-wrapper{padding-top:30px;border-top:solid 1px #fff}#main-content{float:left;width:690px}#main-content img{max-width:100%}aside#sidebar{float:right;width:200px;min-height:504px;padding-left:20px;font-size:12px;line-height:1.3;background:transparent url(./img/sidebar-bg.jpg) 0 0 no-repeat; overflow: auto;height: 450px;}}aside#sidebar p.repo-owner,aside#sidebar p.repo-owner a{font-weight:bold;}#downloads{margin-bottom:40px}a.button{width:134px;height:58px;padding-top:22px;padding-left:68px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:23px;line-height:1.2;color:#fff}a.button small{display:block;font-size:11px}header a.button{position:absolute;top:0;right:0;background:transparent url(./img/github-button.png) 0 0 no-repeat}aside a.button{display:block;width:138px;padding-left:64px;margin-bottom:20px;font-size:21px;background:transparent url(./img/download-button.png) 0 0 no-repeat}code,pre{margin-bottom:30px;font-family:Monaco,"Bitstream Vera Sans Mono","Lucida Console",Terminal,monospace;font-size:13px;color:#222}code{padding:0 3px;background-color:#f2f8fc;border:solid 1px #dbe7f3}pre{padding:20px;overflow:auto;text-shadow:none;background:#fff;border:solid 1px #f2f2f2}pre code{padding:0;color:#2879d0;background-color:#fff;border:none}ul,ol,dl{margin-bottom:20px}hr{height:0;margin-top:1em;margin-bottom:1em;border:0;border-top:solid 1px #ddd}table{width:100%;border:1px solid #ebebeb}th{font-weight:500}td{font-weight:300;text-align:center;border:1px solid #ebebeb}form{padding:20px;background:#f2f2f2}#main-content h1{margin-top:0;margin-bottom:0;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:2.8em;font-weight:normal;color:#474747;text-indent:6px;letter-spacing:-1px}#main-content h1:before{padding-right:0.3em;margin-left:-0.9em;color:#9ddcff;content:"/"}#main-content h2{margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:22px;font-weight:bold;color:#474747;text-indent:4px}#main-content h2:before{padding-right:0.3em;margin-left:-1.5em;content:"//";color:#9ddcff}#main-content h3{margin-top:24px;margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:18px;font-weight:bold;color:#474747;text-indent:3px}#main-content h3:before{padding-right:0.3em;margin-left:-2em;content:"///";color:#9ddcff}#main-content h4{margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:15px;font-weight:bold;color:#474747;text-indent:3px}h4:before{padding-right:0.3em;margin-left:-2.8em;content:"////";color:#9ddcff}#main-content h5{margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:14px;color:#474747;text-indent:3px}h5:before{padding-right:0.3em;margin-left:-3.2em;content:"/////";color:#9ddcff}#main-content h6{margin-bottom:8px;font-family:"Architects Daughter","Helvetica Neue",Helvetica,Arial,serif;font-size:.8em;color:#474747;text-indent:3px}h6:before{padding-right:0.3em;margin-left:-3.7em;content:"//////";color:#9ddcff}p{margin-bottom:20px}a{text-decoration:none}p a{font-weight:400;overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}blockquote{padding:0 0 0 30px;margin-bottom:20px;font-size:1.6em;border-left:10px solid #e9e9e9}ul{list-style-position:inside;list-style:disc;padding-left:20px}ol{list-style-position:inside;list-style:decimal;padding-left:3px}dl dd{font-style:italic;font-weight:100}footer{padding-top:20px;padding-bottom:30px;margin-top:40px;font-size:13px;color:#aaa;background:#f4f4f4}footer a{color:#666}footer a:hover{color:#444}.clearfix:after{display:block;height:0;clear:both;visibility:hidden;content:"."}.clearfix{display:inline-block}* html .clearfix{height:1%}.clearfix{display:block}svg{width:690px;height:400px}@media only screen and (min-width:768px) and (max-width:959px){.inner{width:740px}header h1,header h2{width:340px}header h1{font-size:60px}header h2{font-size:30px}#main-content{width:490px}#main-content h1:before,#main-content h2:before,#main-content h3:before,#main-content h4:before,#main-content h5:before,#main-content h6:before{padding-right:0;margin-left:0;content:none}}@media only screen and (max-width:767px){.inner{width:93%}header{padding:20px 0}header .inner{position:relative}header h1,header h2{width:100%}header h1{font-size:48px}header h2{font-size:24px}header a.button{position:relative;display:inline-block;width:auto;height:auto;padding:5px 10px;margin-top:15px;font-size:13px;line-height:1;color:#2879d0;text-align:center;background-color:#9ddcff;background-image:none;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px}header a.button small{display:inline;font-size:13px}#main-content,aside#sidebar{float:none;width:100%!important}aside#sidebar{min-height:0;padding:20px 0;margin-top:20px;background-image:none;border-top:solid 1px #ddd}aside#sidebar a.button{display:none}#main-content h1:before,#main-content h2:before,#main-content h3:before,#main-content h4:before,#main-content h5:before,#main-content h6:before{padding-right:0;margin-left:0;content:none}}#sidebar{position:fixed;left:50%;margin-left:250px}#sidebar p{margin-bottom:0px;line-height:20px}canvas{margin:0 auto}.highlight{word-wrap: break-word;word-break: break-all;}'.replace(/url\((.*?)\)/igm,function(a,b){return 'url('+require(b+'')+')'}));
/* 初始化骨架 */
(function(title,pathName){
	document.getElementById('app').innerHTML='<header><div class="inner"><a href="https://jsgu.github.io/"><h1>jsgu.github.io</h1></a><h2>'+title+'---实例源码</h2><a href="https://github.com/jsgu/jsgu.github.io/tree/master/src/'+pathName+'" class="button"><small>Follow me on</small> GitHub</a></div></header><div id="content-wrapper"><div class="inner clearfix"><section id="main-content"></section><aside id="sidebar"></aside></div></div>';
}('Canvas','canvas'))

/* 基本结构 */
function tpl(id,title,code,tpStr){
	var str='';if(tpStr){str=tpStr;}
	return '<h4 id="'+title+'">'+title+'</h4><canvas id="'+id+'"></canvas>'+str+'<div class="highlighter-rouge"><pre class="highlight"><code>' +(code+'').replace(';',';</br>') +'</code></pre></div>';
}
/*===================================实例员源码===============================================*/
import * as src from './img/p1.jpg'
var canvasBase={
	roundedRect:function(ctx,x,y,width,height,radius){
	  ctx.beginPath();
	  ctx.moveTo(x,y+radius);
	  ctx.lineTo(x,y+height-radius);
	  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
	  ctx.lineTo(x+width-radius,y+height);
	  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
	  ctx.lineTo(x+width,y+radius);
	  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
	  ctx.lineTo(x+radius,y);
	  ctx.quadraticCurveTo(x,y,x,y+radius);
	  ctx.stroke();
	},
	draw:function(id){
		 var canvas = document.getElementById(id);
		  if (canvas.getContext) {
		    var ctx = canvas.getContext("2d");
		    ctx.fillStyle = "rgb(200,0,0)";
		    ctx.fillRect (10, 10, 55, 50);
		    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
		    ctx.fillRect (30, 30, 55, 50);
		  }
	},
	Drawing_shapes:function(id){
		var canvas = document.getElementById(id);
		  if (canvas.getContext) {
		    var ctx = canvas.getContext('2d');
		    ctx.fillRect(25,25,100,100);
		    ctx.clearRect(45,45,60,60);
		    ctx.strokeRect(50,50,50,50);
		  }
	},
	Drawing_shapes1:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    ctx.beginPath();
	    ctx.moveTo(75,50);
	    ctx.lineTo(100,75);
	    ctx.lineTo(100,25);
	    ctx.fill();
	  }
	},
	Drawing_shapes2:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    ctx.beginPath();
	    ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
	    ctx.moveTo(110,75);
	    ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
	    ctx.moveTo(65,65);
	    ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
	    ctx.moveTo(95,65);
	    ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
	    ctx.stroke();
	  }
	},
	Drawing_shapes3:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    // 填充三角形
	    ctx.beginPath();
	    ctx.moveTo(25,25);
	    ctx.lineTo(105,25);
	    ctx.lineTo(25,105);
	    ctx.fill();

	    // 描边三角形
	    ctx.beginPath();
	    ctx.moveTo(125,125);
	    ctx.lineTo(125,45);
	    ctx.lineTo(45,125);
	    ctx.closePath();
	    ctx.stroke();
	  }
	},
	Drawing_shapes4:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
		   	for(var i=0;i<4;i++){
		      for(var j=0;j<3;j++){
		        ctx.beginPath();
		        var x              = 25+j*50;               // x 坐标值
		        var y              = 25+i*50;               // y 坐标值
		        var radius         = 20;                    // 圆弧半径
		        var startAngle     = 0;                     // 开始点
		        var endAngle       = Math.PI+(Math.PI*j)/2; // 结束点
		        var anticlockwise  = i%2==0 ? false : true; // 顺时针或逆时针
		        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		        if (i>1){
		          ctx.fill();
		        } else {
		          ctx.stroke();
		        }
		      }
		    }
	  }
	},
	Drawing_shapes5:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    // 二次贝尔赛曲线
	    ctx.beginPath();
	    ctx.moveTo(75,25);
	    ctx.quadraticCurveTo(25,25,25,62.5);
	    ctx.quadraticCurveTo(25,100,50,100);
	    ctx.quadraticCurveTo(50,120,30,125);
	    ctx.quadraticCurveTo(60,120,65,100);
	    ctx.quadraticCurveTo(125,100,125,62.5);
	    ctx.quadraticCurveTo(125,25,75,25);
	    ctx.stroke();
	  }
	},
	Drawing_shapes6:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	     //三次贝塞尔曲线
	    ctx.beginPath();
	    ctx.moveTo(75,40);
	    ctx.bezierCurveTo(75,37,70,25,50,25);
	    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
	    ctx.bezierCurveTo(20,80,40,102,75,120);
	    ctx.bezierCurveTo(110,102,130,80,130,62.5);
	    ctx.bezierCurveTo(130,62.5,130,25,100,25);
	    ctx.bezierCurveTo(85,25,75,37,75,40);
	    ctx.fill();
	  }
	},
	Drawing_shapes7:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    	this.roundedRect(ctx,12,12,150,150,15);
		    this.roundedRect(ctx,19,19,150,150,9);
		    this.roundedRect(ctx,53,53,49,33,10);
		    this.roundedRect(ctx,53,119,49,16,6);
		    this.roundedRect(ctx,135,53,49,33,10);
		    this.roundedRect(ctx,135,119,25,49,10);

		    ctx.beginPath();
		    ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
		    ctx.lineTo(31,37);
		    ctx.fill();

		    for(var i=0;i<8;i++){
		      ctx.fillRect(51+i*16,35,4,4);
		    }

		    for(i=0;i<6;i++){
		      ctx.fillRect(115,51+i*16,4,4);
		    }

		    for(i=0;i<8;i++){
		      ctx.fillRect(51+i*16,99,4,4);
		    }

		    ctx.beginPath();
		    ctx.moveTo(83,116);
		    ctx.lineTo(83,102);
		    ctx.bezierCurveTo(83,94,89,88,97,88);
		    ctx.bezierCurveTo(105,88,111,94,111,102);
		    ctx.lineTo(111,116);
		    ctx.lineTo(106.333,111.333);
		    ctx.lineTo(101.666,116);
		    ctx.lineTo(97,111.333);
		    ctx.lineTo(92.333,116);
		    ctx.lineTo(87.666,111.333);
		    ctx.lineTo(83,116);
		    ctx.fill();

		    ctx.fillStyle = "white";
		    ctx.beginPath();
		    ctx.moveTo(91,96);
		    ctx.bezierCurveTo(88,96,87,99,87,101);
		    ctx.bezierCurveTo(87,103,88,106,91,106);
		    ctx.bezierCurveTo(94,106,95,103,95,101);
		    ctx.bezierCurveTo(95,99,94,96,91,96);
		    ctx.moveTo(103,96);
		    ctx.bezierCurveTo(100,96,99,99,99,101);
		    ctx.bezierCurveTo(99,103,100,106,103,106);
		    ctx.bezierCurveTo(106,106,107,103,107,101);
		    ctx.bezierCurveTo(107,99,106,96,103,96);
		    ctx.fill();

		    ctx.fillStyle = "black";
		    ctx.beginPath();
		    ctx.arc(101,102,2,0,Math.PI*2,true);
		    ctx.fill();

		    ctx.beginPath();
		    ctx.arc(89,102,2,0,Math.PI*2,true);
		    ctx.fill();
	  }
	},
	Drawing_shapes8:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');

	    var rectangle = new Path2D();
	    rectangle.rect(10, 10, 50, 50);
	    var circle = new Path2D();
	    circle.moveTo(125, 35);
	    circle.arc(100, 35, 25, 0, 2 * Math.PI);
	    ctx.stroke(rectangle);
	    ctx.fill(circle);
	  }
	},
	StyleColor:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	      for (var i=0;i<6;i++){
		    for (var j=0;j<6;j++){
		      ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +Math.floor(255-42.5*j) + ',0)';
		      ctx.fillRect(j*25,i*25,25,25);
		    }
		  }
	  }
	},
	StyleColor2:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    	for (var i=0;i<6;i++){
		      for (var j=0;j<6;j++){
		        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ','+Math.floor(255-42.5*j) + ')';
		        ctx.beginPath();
		        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
		        ctx.stroke();
		      }
		    }
	  }
	},
	StyleColor3:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    	 // 画背景
			  ctx.fillStyle = '#FD0';
			  ctx.fillRect(0,0,75,75);
			  ctx.fillStyle = '#6C0';
			  ctx.fillRect(75,0,75,75);
			  ctx.fillStyle = '#09F';
			  ctx.fillRect(0,75,75,75);
			  ctx.fillStyle = '#F30';
			  ctx.fillRect(75,75,75,75);
			  ctx.fillStyle = '#FFF';
			  // 设置透明度值
			  ctx.globalAlpha = 0.2;
			  // 画半透明圆
			  for (var i=0;i<7;i++){
			      ctx.beginPath();
			      ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
			      ctx.fill();
			  }
	  }
	},
	StyleColor4:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	      // 画背景
		  ctx.fillStyle = 'rgb(255,221,0)';
		  ctx.fillRect(0,0,150,37.5);
		  ctx.fillStyle = 'rgb(102,204,0)';
		  ctx.fillRect(0,37.5,150,37.5);
		  ctx.fillStyle = 'rgb(0,153,255)';
		  ctx.fillRect(0,75,150,37.5);
		  ctx.fillStyle = 'rgb(255,51,0)';
		  ctx.fillRect(0,112.5,150,37.5);
		  // 画半透明矩形
		  for (var i=0;i<10;i++){
		    ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
		    for (var j=0;j<4;j++){
		      ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
		    }
		  }
	  }
	},
	StyleColor5:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	     for (var i = 0; i < 10; i++){
		    ctx.lineWidth = 1+i;
		    ctx.beginPath();
		    ctx.moveTo(5+i*14,5);
		    ctx.lineTo(5+i*14,140);
		    ctx.stroke();
		  }
	  }
	},
	StyleColor6:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	   	var lineCap = ['butt','round','square'];
		  // 创建路径
		  ctx.strokeStyle = '#09f';
		  ctx.beginPath();
		  ctx.moveTo(10,10);
		  ctx.lineTo(140,10);
		  ctx.moveTo(10,140);
		  ctx.lineTo(140,140);
		  ctx.stroke();
		  // 画线条
		  ctx.strokeStyle = 'black';
		  for (var i=0;i<lineCap.length;i++){
		    ctx.lineWidth = 15;
		    ctx.lineCap = lineCap[i];
		    ctx.beginPath();
		    ctx.moveTo(25+i*50,10);
		    ctx.lineTo(25+i*50,140);
		    ctx.stroke();
		  }
	  }
	},
	StyleColor7:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    var lineJoin = ['round','bevel','miter'];
		  ctx.lineWidth = 10;
		  for (var i=0;i<lineJoin.length;i++){
		    ctx.lineJoin = lineJoin[i];
		    ctx.beginPath();
		    ctx.moveTo(-5,5+i*40);
		    ctx.lineTo(35,45+i*40);
		    ctx.lineTo(75,5+i*40);
		    ctx.lineTo(115,45+i*40);
		    ctx.lineTo(155,5+i*40);
		    ctx.stroke();
		  }
	  }
	},
	StyleColor8:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    var lineJoin = ['miterLimit'];
		  ctx.lineWidth = 10;
		  for (var i=0;i<lineJoin.length;i++){
		    ctx.lineJoin = lineJoin[i];
		    ctx.beginPath();
		    ctx.moveTo(-5,5+i*40);
		    ctx.lineTo(35,45+i*40);
		    ctx.lineTo(75,5+i*40);
		    ctx.lineTo(115,45+i*40);
		    ctx.lineTo(255,5+i*40);
		    ctx.stroke();
		  }
	  }
	},
	StyleColor9:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    	var offset = 0;
			function drawsv() {
			  ctx.clearRect(0,0, 300,150);
			  ctx.setLineDash([4, 2]);
			  ctx.lineDashOffset = -offset;
			  ctx.strokeRect(10,10, 100, 100);
			}
			function march() {
			  offset++;
			  if (offset > 16) {
			    offset = 0;
			  }
			  drawsv();
			  setTimeout(march, 20);
			}
			march();
	  }
	},
	StyleColor10:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	      // Create gradients
		  var lingrad = ctx.createLinearGradient(0,0,0,150);
		  lingrad.addColorStop(0, '#00ABEB');
		  lingrad.addColorStop(0.5, '#fff');
		  lingrad.addColorStop(0.5, '#26C000');
		  lingrad.addColorStop(1, '#fff');
		  var lingrad2 = ctx.createLinearGradient(0,50,0,95);
		  lingrad2.addColorStop(0.5, '#000');
		  lingrad2.addColorStop(1, 'rgba(0,0,0,0)');
		  // assign gradients to fill and stroke styles
		  ctx.fillStyle = lingrad;
		  ctx.strokeStyle = lingrad2;
		  // draw shapes
		  ctx.fillRect(10,10,130,130);
		  ctx.strokeRect(50,50,50,50);
	  }
	},
	StyleColor11:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
		// 创建渐变
		  var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
		  radgrad.addColorStop(0, '#A7D30C');
		  radgrad.addColorStop(0.9, '#019F62');
		  radgrad.addColorStop(1, 'rgba(1,159,98,0)');
		  var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
		  radgrad2.addColorStop(0, '#FF5F98');
		  radgrad2.addColorStop(0.75, '#FF0188');
		  radgrad2.addColorStop(1, 'rgba(255,1,136,0)');
		  var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
		  radgrad3.addColorStop(0, '#00C9FF');
		  radgrad3.addColorStop(0.8, '#00B5E2');
		  radgrad3.addColorStop(1, 'rgba(0,201,255,0)');
		  var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
		  radgrad4.addColorStop(0, '#F4F201');
		  radgrad4.addColorStop(0.8, '#E4C700');
		  radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
		  // 画图形
		  ctx.fillStyle = radgrad4;
		  ctx.fillRect(0,0,150,150);
		  ctx.fillStyle = radgrad3;
		  ctx.fillRect(0,0,150,150);
		  ctx.fillStyle = radgrad2;
		  ctx.fillRect(0,0,150,150);
		  ctx.fillStyle = radgrad;
		  ctx.fillRect(0,0,150,150);
	  }
	},
	StyleColor12:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	     // 创建新 image 对象，用作图案
		  var img = new Image();
		  img.src = src.default;
		  img.onload = function(){
		    // 创建图案
		    var ptrn = ctx.createPattern(img,'repeat');
		    ctx.fillStyle = ptrn;
		    ctx.fillRect(0,0,150,150);
		  }
	  }
	},
	StyleColor13:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	      ctx.shadowOffsetX = 2;
		  ctx.shadowOffsetY = 2;
		  ctx.shadowBlur = 2;
		  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
		  ctx.font = "20px Times New Roman";
		  ctx.fillStyle = "#090";
		  ctx.fillText("Sample String", 5, 30);
	  }
	},
	StyleColor14:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
			ctx.beginPath(); 
			ctx.arc(50, 50, 30, 0, Math.PI*2, true);
			ctx.arc(50, 50, 15, 0, Math.PI*2, true);
			ctx.fillStyle="#f00";
			ctx.fill("evenodd");
	  }
	},
	Drawing_text:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	     ctx.font = "48px serif";
  		 ctx.fillText("Hello world", 10, 50);
	  }
	},
	Drawing_text1:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
  		 ctx.font = "48px serif";
  		 ctx.strokeText("Hello world", 10, 50);
	  }
	},
	Drawing_text2:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    ctx.font = "48px serif";
		ctx.textBaseline = "hanging";
		ctx.textAlign = "left";//文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。
		ctx.direction="rtl";//文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit
		ctx.strokeText("Hello world", 0, 100);
	  }
	},
	Drawing_text3:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
		var text = ctx.measureText("foo"); // TextMetrics object
		ctx.fillText("console.log(text.width);// 16;", 10, 50);
		  	console.log(text.width); // 16;
	  }
	},
	Using_images:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    //1.使用相同页面内的图片
	    //document.images集合
 		// document.getElementsByTagName()方法
 		// 2.使用其它域名下的图片
 		// 在 HTMLImageElement上使用crossOrigin属性，你可以请求加载其它域名上的图片。如果图片的服务器允许跨域访问这个图片，那么你可以使用这个图片而不污染canvas，否则，使用这个图片将会污染canvas。
 		//3.使用其它 canvas 元素
 		//和引用页面内的图片类似地，用 document.getElementsByTagName 或 document.getElementById 方法来获取其它 canvas 元素。但你引入的应该是已经准备好的 canvas。
 		//4. 由零开始创建图像
 		var img = new Image();   // 创建img元素
		img.onload = function(){
		  // 执行drawImage语句
		    // 创建图案
		    var ptrn = ctx.createPattern(img,'repeat');
		    ctx.fillStyle = ptrn;
		    ctx.fillRect(0,0,250,150);
		}
		img.src = src.default; // 设置图片源地址
		//5.通过 data: url 方式嵌入图像
		//img.src = 'data:image/gif;base64,R0l....
		//6. 使用视频帧
		//return document.getElementById('myvideo'); “myvideo”的<video>元素
	  }
	},
	Using_images1:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
		var img = new Image();
		    img.onload = function(){
		      ctx.drawImage(img,0,0);
		      ctx.fillStyle = "white";
		      ctx.beginPath();
		      ctx.moveTo(30,96);
		      ctx.lineTo(70,66);
		      ctx.lineTo(103,76);
		      ctx.lineTo(170,15);
		      ctx.stroke();
		    }
		    img.src = src.default;
	  }
	},
	Using_images2:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
		 var img = new Image();
		  img.onload = function(){
		    for (var i=0;i<4;i++){
		      for (var j=0;j<3;j++){
		        ctx.drawImage(img,j*50,i*38,50,38);
		      }
		    }
		  };
		  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
	  }
	},
	drawSpirograph:function(ctx,R,r,O){
			var x1 = R-O;
			var y1 = 0;
			var i  = 1;
			ctx.beginPath();
			ctx.moveTo(x1,y1);
			do {
			if (i>20000) break;
			var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
			var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
			ctx.lineTo(x2,y2);
			x1 = x2;
			y1 = y2;
			i++;
			} while (x2 != R-O && y2 != 0 );
			ctx.stroke();
	},
	Transformations:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
			ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
			ctx.save();                  // 保存默认状态
			ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
			ctx.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形
			ctx.save();                  // 保存当前状态
			ctx.fillStyle = '#FFF'       // 再次改变颜色配置
			ctx.globalAlpha = 0.5;    
			ctx.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形
			ctx.restore();               // 重新加载之前的颜色状态
			ctx.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形
			ctx.restore();               // 加载默认颜色配置
			ctx.fillRect(60,60,30,30);   // 使用加载的配置绘制一个矩形
	  }
	},
	Transformations1:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    	  ctx.fillRect(0,0,300,300);
			  for (var i=0;i<3;i++) {
			    for (var j=0;j<3;j++) {
			      ctx.save();
			      ctx.strokeStyle = "#9CFF00";
			      ctx.translate(50+j*100,50+i*100);
			      this.drawSpirograph(ctx,20*(j+2)/(j+1),-8*(i+3)/(i+1),10);
			      ctx.restore();
			    }
			  }
	  }
	},
	Transformations2:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
			ctx.translate(75,75);
			for (var i=1;i<6;i++){ // Loop through rings (from inside to out)
				ctx.save();
				ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
				for (var j=0;j<i*6;j++){ // draw individual dots
				  ctx.rotate(Math.PI*2/(i*6));
				  ctx.beginPath();
				  ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
				  ctx.fill();
				}
				ctx.restore();
			}
	  }
	},
	Transformations3:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
				ctx.strokeStyle = "#fc0";
				ctx.lineWidth = 1.5;
				ctx.fillRect(0,0,300,300);
				// Uniform scaling
				ctx.save()
				ctx.translate(50,50);
				this.drawSpirograph(ctx,22,6,5);  // no scaling
				ctx.translate(100,0);
				ctx.scale(0.75,0.75);
				this.drawSpirograph(ctx,22,6,5);
				ctx.translate(133.333,0);
				ctx.scale(0.75,0.75);
				this.drawSpirograph(ctx,22,6,5);
				ctx.restore();
				// Non-uniform scaling (y direction)
				ctx.strokeStyle = "#0cf";
				ctx.save()
				ctx.translate(50,150);
				ctx.scale(1,0.75);
				this.drawSpirograph(ctx,22,6,5);
				ctx.translate(100,0);
				ctx.scale(1,0.75);
				this.drawSpirograph(ctx,22,6,5);
				ctx.translate(100,0);
				ctx.scale(1,0.75);
				this.drawSpirograph(ctx,22,6,5);
				ctx.restore();
				// Non-uniform scaling (x direction)
				ctx.strokeStyle = "#cf0";
				ctx.save()
				ctx.translate(50,250);
				ctx.scale(0.75,1);
				this.drawSpirograph(ctx,22,6,5);
				ctx.translate(133.333,0);
				ctx.scale(0.75,1);
				this.drawSpirograph(ctx,22,6,5);
				ctx.translate(177.777,0);
				ctx.scale(0.75,1);
				this.drawSpirograph(ctx,22,6,5);
				ctx.restore();
	  }
	},
	Transformations4:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
		 var sin = Math.sin(Math.PI/6);
		  var cos = Math.cos(Math.PI/6);
		  ctx.translate(100, 100);
		  var c = 0;
		  for (var i=0; i <= 12; i++) {
		    c = Math.floor(255 / 12 * i);
		    ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
		    ctx.fillRect(0, 0, 100, 10);
		    ctx.transform(cos, sin, -sin, cos, 0, 0);
		  }
		  ctx.setTransform(-1, 0, 0, 1, 100, 100);
		  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
		  ctx.fillRect(0, 50, 100, 100);
	  }
	},
	drawStar:function(ctx,r){
		ctx.save();
		ctx.beginPath()
		ctx.moveTo(r,0);
		for (var i=0;i<9;i++){
		ctx.rotate(Math.PI/5);
		if(i%2 == 0) {
			ctx.lineTo((r/0.525731)*0.200811,0);
		} else {
			ctx.lineTo(r,0);
		}
		}
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	},
	Compositing:function(id){
		//更多参考： https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    ctx.fillRect(0,0,150,150);
		ctx.translate(75,75);
		// Create a circular clipping path
		ctx.beginPath();
		ctx.arc(0,0,60,0,Math.PI*2,true);
		ctx.clip();
		// draw background
		var lingrad = ctx.createLinearGradient(0,-75,0,75);
		lingrad.addColorStop(0, '#232256');
		lingrad.addColorStop(1, '#143778');
		ctx.fillStyle = lingrad;
		ctx.fillRect(-75,-75,150,150);
		// draw stars
		for (var j=1;j<50;j++){
		ctx.save();
		ctx.fillStyle = '#fff';
		ctx.translate(75-Math.floor(Math.random()*150),75-Math.floor(Math.random()*150));
		this.drawStar(ctx,Math.floor(Math.random()*4)+2);
		ctx.restore();
		}
	  }
	},
	Compositing1:function(id){
		//通过lobalCompositeOperation 属性来改变
		// source-over (default)：这是默认设置，新图形会覆盖在原有内容之上。
		// destination-over:会在原有内容之下绘制新图形。
		// source-in:新图形会仅仅出现与原有内容重叠的部分。其它区域都变成透明的。
		// destination-in:原有内容中与新图形重叠的部分会被保留，其它区域都变成透明的。
		// source-out:结果是只有新图形中与原有内容不重叠的部分会被绘制出来。
		// destination-out:原有内容中与新图形不重叠的部分会被保留。
		// source-atop:新图形中与原有内容重叠的部分会被绘制，并覆盖于原有内容之上。
		// destination-atop:原有内容中与新内容重叠的部分会被保留，并会在原有内容之下绘制新图形
		// lighter:两图形中重叠部分作加色处理。
		// darken:两图形中重叠的部分作减色处理。
		// xor:重叠的部分会变成透明。
		// copy:只有新图形会被保留，其它都被清除掉。
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    ctx.globalCompositeOperation = 'lighter';
		ctx.fillStyle = 'blue';
		ctx.fillRect(10, 10, 100, 100);
		ctx.fillStyle = 'red';
		ctx.fillRect(50, 50, 100, 100);
		// ctx.fillStyle = 'green';
		// ctx.fillRect(100, 100, 100, 100);
	  }
	},
	Animation:function(id){
		//基本步骤:清空 canvas->保存 canvas 状态->绘制动画图形->恢复 canvas 状态
		//操控动画：可以用window.setInterval(), window.setTimeout(),和window.requestAnimationFrame()来设定定期执行一个指定函数。
		var canvas = document.getElementById("canvas39");
		  if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			ctx.globalCompositeOperation = 'destination-over';
			ctx.clearRect(0,0,300,300); // clear canvas
			ctx.fillStyle = 'rgba(0,0,0,0.4)';
			ctx.strokeStyle = 'rgba(0,153,255,0.4)';
			ctx.save();
			ctx.translate(150,150);
			// Earth
			var time = new Date();
			ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
			ctx.translate(105,0);
			ctx.fillRect(0,-12,50,24); // Shadow
			ctx.drawImage(earth,-12,-12);
			// Moon
			ctx.save();
			ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
			ctx.translate(0,28.5);
			ctx.drawImage(moon,-3.5,-3.5);
			ctx.restore();
			ctx.restore();
			ctx.beginPath();
			ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
			ctx.stroke();
			ctx.drawImage(sun,0,0,300,300);
			window.setInterval(this.Animation)
			// window.requestAnimationFrame(this.Animation());
		  }
	},
	Animation1:function(id){
	var canvas = document.getElementById('canvas40');
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    var now = new Date();
			ctx.save();
			ctx.clearRect(0,0,150,150);
			ctx.translate(75,75);
			ctx.scale(0.4,0.4);
			ctx.rotate(-Math.PI/2);
			ctx.strokeStyle = "black";
			ctx.fillStyle = "white";
			ctx.lineWidth = 8;
			ctx.lineCap = "round";
			// Hour marks
			ctx.save();
			for (var i=0;i<12;i++){
			ctx.beginPath();
			ctx.rotate(Math.PI/6);
			ctx.moveTo(100,0);
			ctx.lineTo(120,0);
			ctx.stroke();
			}
			ctx.restore();
			// Minute marks
			ctx.save();
			ctx.lineWidth = 5;
			for (i=0;i<60;i++){
			if (i%5!=0) {
			  ctx.beginPath();
			  ctx.moveTo(117,0);
			  ctx.lineTo(120,0);
			  ctx.stroke();
			}
			ctx.rotate(Math.PI/30);
			}
			ctx.restore();
			var sec = now.getSeconds();
			var min = now.getMinutes();
			var hr  = now.getHours();
			hr = hr>=12 ? hr-12 : hr;
			ctx.fillStyle = "black";
			// write Hours
			ctx.save();
			ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
			ctx.lineWidth = 14;
			ctx.beginPath();
			ctx.moveTo(-20,0);
			ctx.lineTo(80,0);
			ctx.stroke();
			ctx.restore();
			// write Minutes
			ctx.save();
			ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
			ctx.lineWidth = 10;
			ctx.beginPath();
			ctx.moveTo(-28,0);
			ctx.lineTo(112,0);
			ctx.stroke();
			ctx.restore();
			// Write seconds
			ctx.save();
			ctx.rotate(sec * Math.PI/30);
			ctx.strokeStyle = "#D40000";
			ctx.fillStyle = "#D40000";
			ctx.lineWidth = 6;
			ctx.beginPath();
			ctx.moveTo(-30,0);
			ctx.lineTo(83,0);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0,0,10,0,Math.PI*2,true);
			ctx.fill();
			ctx.beginPath();
			ctx.arc(95,0,10,0,Math.PI*2,true);
			ctx.stroke();
			ctx.fillStyle = "rgba(0,0,0,0)";
			ctx.arc(0,0,3,0,Math.PI*2,true);
			ctx.fill();
			ctx.restore();
			ctx.beginPath();
			ctx.lineWidth = 14;
			ctx.strokeStyle = '#325FA2';
			ctx.arc(0,0,142,0,Math.PI*2,true);
			ctx.stroke();
			ctx.restore();
			window.setInterval(this.Animation1)
			// window.requestAnimationFrame(this.Animation1);
	  }
	},
	Animation2Draw:function(ctx,clearX,clearY,imgW,imgH,CanvasXSize,x,y,img,dx){
		//Clear Canvas
	    ctx.clearRect(0,0,clearX,clearY);
	    //If image is <= Canvas Size
	    if (imgW <= CanvasXSize) {
	        //reset, start from beginning
	        if (x > (CanvasXSize)) { x = 0; }
	        //draw aditional image
	        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
	    }
	    //If image is > Canvas Size
	    else {
	        //reset, start from beginning
	        if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
	        //draw aditional image
	        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
	    }
	    //draw image
	    ctx.drawImage(img,x,y,imgW,imgH);
	    //amount to move
	    x += dx;
	},
	Animation2:function(id){
	  var canvas = document.getElementById(id);
	  var ts=this;
	  // if (canvas.getContext) {
	  	var ctx = canvas.getContext('2d');
		var img = new Image();
		// User Variables - customize these to change the image being scrolled, its
		// direction, and the speed.
		img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
		var CanvasXSize = 800;
		var CanvasYSize = 200;
		var speed = 30; //lower is faster
		var scale = 1.05;
		var y = -4.5; //vertical offset
		// Main program
		var dx = 0.75;
		var imgW;
		var imgH;
		var x = 0;
		var clearX;
		var clearY;
		var ctx;
		img.onload = function() {
		imgW = img.width*scale;
		imgH = img.height*scale;
		if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
		if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
		else { clearX = CanvasXSize; }
		if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
		else { clearY = CanvasYSize; }
		//Get Canvas Element
		//Set Refresh Rate
		return setInterval(ts.Animation2Draw(ctx,clearX,clearY,imgW,imgH,CanvasXSize,x,y,img,dx), speed);
		}
	  // }
	},
	Animation3:function(id){
		// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			var raf;
			var ball = {x: 100,y: 100,vx: 5,vy: 2,radius: 25,color: 'blue',
			draw: function() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.fillStyle = this.color;
				ctx.fill();
			}
			};
			function draw() {
				ctx.clearRect(0,0, canvas.width, canvas.height);
				ball.draw();
			   // Adding velocity
				ball.x += ball.vx;
				ball.y += ball.vy;
				//Boundaries
				// if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
				//   ball.vy = -ball.vy;
				// }
				// if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
				//   ball.vx = -ball.vx;
				// }
				// Acceleration
				// ball.vy *= .99;
				// ball.vy += .25;
				// Trailing effect
				ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				raf = window.requestAnimationFrame(draw);
			}
			canvas.addEventListener('mouseover', function(e) {
				raf = window.requestAnimationFrame(draw);
			});
			canvas.addEventListener('mouseout', function(e) {
				window.cancelAnimationFrame(raf);
			});
			ball.draw();
	  }
	},
	Animation4:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	  	var ctx = canvas.getContext('2d');
	    var raf;
		var running = false;
		var ball = {
		  x: 100,
		  y: 100,
		  vx: 5,
		  vy: 1,
		  radius: 25,
		  color: 'blue',
		  draw: function() {
		    ctx.beginPath();
		    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
		    ctx.closePath();
		    ctx.fillStyle = this.color;
		    ctx.fill();
		  }
		};
		function clear() {
		  ctx.fillStyle = 'rgba(255,255,255,0.3)';
		  ctx.fillRect(0,0,canvas.width,canvas.height);
		}
		function draw() {
		  clear();
		  ball.draw();
		  ball.x += ball.vx;
		  ball.y += ball.vy;
		  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
		    ball.vy = -ball.vy;
		  }
		  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
		    ball.vx = -ball.vx;
		  }
		  raf = window.requestAnimationFrame(draw);
		}
		canvas.addEventListener('mousemove', function(e){
		  if (!running) {
		    clear();
		    ball.x = e.clientX;
		    ball.y = e.clientY;
		    ball.draw();
		  }
		});
		canvas.addEventListener("click",function(e){
		  if (!running) {
		    raf = window.requestAnimationFrame(draw);
		    running = true;
		  }
		});
		canvas.addEventListener("mouseout",function(e){
		  window.cancelAnimationFrame(raf);
		  running = false;
		});

		ball.draw();
	  }
	},
	ImageData:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
		var img = new Image();
		img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
		img.onload = function() {
		  ctx.drawImage(img, 0, 0);
		  img.style.display = 'none';
		};
		var color = document.getElementById('color');
		function pick(event) {
		  var x = event.layerX;
		  var y = event.layerY;
		  var pixel = ctx.getImageData(x, y, 1, 1);
		  var data = pixel.data;
		  var rgba = 'rgba(' + data[0] + ',' + data[1] +
		             ',' + data[2] + ',' + (data[3] / 255) + ')';
		  color.style.background =  rgba;
		  color.textContent = rgba;
		}
		canvas.addEventListener('mousemove', pick);
	  }
	},
	ImageData1:function(id){
	var canvas = document.getElementById(id);
		canvas.width=600;
		canvas.height=350;
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
			var img = new Image();
			img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
			img.onload = function() {
			  draw(this);
			};
			function draw(img) {
			  ctx.drawImage(img, 0, 0);
			  img.style.display = 'none';
			  var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
			  var data = imageData.data;
			  var invert = function() {
			    for (var i = 0; i < data.length; i += 4) {
			      data[i]     = 225 - data[i];     // red
			      data[i + 1] = 225 - data[i + 1]; // green
			      data[i + 2] = 225 - data[i + 2]; // blue
			    }
			    ctx.putImageData(imageData, 0, 0);
			  };
			  var grayscale = function() {
			    for (var i = 0; i < data.length; i += 4) {
			      var avg = (data[i] + data[i +1] + data[i +2]) / 3;
			      data[i]     = avg; // red
			      data[i + 1] = avg; // green
			      data[i + 2] = avg; // blue
			    }
			    ctx.putImageData(imageData, 0, 0);
			  };
			  var invertbtn = document.getElementById('invertbtn');
			  invertbtn.addEventListener('click', invert);
			  var grayscalebtn = document.getElementById('grayscalebtn');
			  grayscalebtn.addEventListener('click', grayscale);
			}
	  }
	},
	ImageData2:function(id){
		// https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    	var img = new Image();
			img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
			img.onload = function() {
			  draw(this);
			};
			function draw(img) {
			  ctx.drawImage(img, 0, 0);
			  img.style.display = 'none';
			  var zoomctx = document.getElementById('zoom').getContext('2d');
			  var smoothbtn = document.getElementById('smoothbtn');
			  var toggleSmoothing = function(event) {
			    zoomctx.imageSmoothingEnabled = this.checked;
			    zoomctx.mozImageSmoothingEnabled = this.checked;
			    zoomctx.webkitImageSmoothingEnabled = this.checked;
			    zoomctx.msImageSmoothingEnabled = this.checked;
			  };
			  smoothbtn.addEventListener('change', toggleSmoothing);
			  var zoom = function(event) {
			    var x = event.layerX;
			    var y = event.layerY;
			    zoomctx.drawImage(canvas,
			                      Math.abs(x - 5),
			                      Math.abs(y - 5),
			                      10, 10,
			                      0, 0,
			                      200, 200);
			  };

			  canvas.addEventListener('mousemove', zoom);
			}
	  }
	},
	HitRegion:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');
	    ctx.beginPath();
		ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
		ctx.fill();
		console.log(ctx)
		// ctx.addHitRegion({id: "circle"});
		// canvas.addEventListener("mousemove", function(event){
		//   if(event.region) {
		//     alert("hit region: " + event.region);
		//   }
		// });
	  }
	},
	getpixelcolour:function(canvas,x, y) {
		//在画布中获取某一个像素的颜色
		var cx = canvas.getContext('2d');
		var pixel = cx.getImageData(x, y, 1, 1);
		return {
			r: pixel.data[0],
			g: pixel.data[1],
			b: pixel.data[2],
			a: pixel.data[3]
		};
	},
	getpixelamount:function(canvas,r, g, b) {
		//在画布中获取特定颜色的像素数量
		var cx = canvas.getContext('2d');
		  var pixels = cx.getImageData(0, 0, canvas.width, canvas.height);
		  var all = pixels.data.length;
		  var amount = 0;
		  for (var i = 0; i < all; i += 4) {
		    if (pixels.data[i] === r &&
		        pixels.data[i + 1] === g &&
		        pixels.data[i + 2] === b) {
		      amount++;
		    }
		  }
		  return amount;
	},
	CanvasCode:function(id){
	var canvas = document.getElementById(id);
		canvas.width=0;
		canvas.height=0;
	  if (canvas.getContext) {
		//代码实例
		function Canvas2DContext(canvas) {
		    if (typeof canvas === 'string') {
		        canvas = document.getElementById(canvas);
		    }
		    if (!(this instanceof Canvas2DContext)) {
		        return new Canvas2DContext(canvas);
		    }
		    this.context = this.ctx = canvas.getContext('2d');
		    if (!Canvas2DContext.prototype.arc) {
		        Canvas2DContext.setup.call(this, this.ctx);
		    }
		}
		Canvas2DContext.setup = function() {
		    var methods = ['arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'drawImage', 'fill', 'fillRect', 'fillText', 'lineTo', 'moveTo', 'quadraticCurveTo', 'rect', 'restore', 'rotate', 'save', 'scale', 'setTransform', 'stroke', 'strokeRect', 'strokeText', 'transform', 'translate'];
		    var getterMethods = ['createPattern', 'drawFocusRing', 'isPointInPath', 'measureText', 'createImageData', 'createLinearGradient', 'createRadialGradient', 'getImageData', 'putImageData'];
		    var props = ['canvas', 'fillStyle', 'font', 'globalAlpha', 'globalCompositeOperation', 'lineCap', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor', 'strokeStyle', 'textAlign', 'textBaseline'];
		    for (let m of methods) {
		        let method = m;
		        Canvas2DContext.prototype[method] = function() {
		            this.ctx[method].apply(this.ctx, arguments);
		            return this;
		        };
		    }
		    for (let m of getterMethods) {
		        let method = m;
		        Canvas2DContext.prototype[method] = function() {
		            return this.ctx[method].apply(this.ctx, arguments);
		        };
		    }
		    for (let p of props) {
		        let prop = p;
		        Canvas2DContext.prototype[prop] = function(value) {
		            if (value === undefined) return this.ctx[prop];
		            this.ctx[prop] = value;
		            return this;
		        };
		    }
		};
		var canvas = document.getElementById('canvas');
		var ctx = Canvas2DContext(canvas).strokeStyle('rgb(30, 110, 210)').transform(10, 3, 4, 5, 1, 0).strokeRect(2, 10, 15, 20).context;
		var strokeStyle = Canvas2DContext(canvas).strokeStyle('rgb(50, 110, 210)').strokeStyle();
		//代码实例 end
	  }
	},
	saveCanvas:function(canvas, path, type, options) {
		//Saving a canvas image to a file
	    return Task.spawn(function *() {
	        var reader = new FileReader;
	        var blob = yield new Promise(accept => canvas.toBlob(accept, type, options));
	        reader.readAsArrayBuffer(blob);

	        yield new Promise(accept => { reader.onloadend = accept });

	        return yield OS.File.writeAtomic(path, new Uint8Array(reader.result),
	                                         { tmpPath: path + '.tmp' });
	    });
	},
	aaaaaaaaa:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');

	  }
	},
	aaaaaaaaa:function(id){
	var canvas = document.getElementById(id);
	  if (canvas.getContext) {
	    var ctx = canvas.getContext('2d');

	  }
	},
}

/*===================================渲染视图===============================================*/
function $(id){	return document.getElementById(id);}

$('main-content').innerHTML=[
	tpl('canvas1','Canvas的基本用法',canvasBase.draw),
	tpl('canvas2','Canvas来绘制图形-矩形',canvasBase.Drawing_shapes),
	tpl('canvas3','Canvas来绘制图形-三角形',canvasBase.Drawing_shapes1),
	tpl('canvas4','Canvas来绘制图形-移动笔触',canvasBase.Drawing_shapes2),
	tpl('canvas5','Canvas来绘制图形-线',canvasBase.Drawing_shapes3),
	tpl('canvas6','Canvas来绘制图形-圆弧',canvasBase.Drawing_shapes4),
	tpl('canvas7','Canvas来绘制图形-二次贝塞尔曲线',canvasBase.Drawing_shapes5),
	tpl('canvas8','Canvas来绘制图形-三次贝塞尔曲线',canvasBase.Drawing_shapes6),
	tpl('canvas9','Canvas来绘制图形-组合使用',canvasBase.roundedRect+canvasBase.Drawing_shapes7),
	tpl('canvas10','Canvas来绘制图形-Path2D',canvasBase.Drawing_shapes8),
	tpl('canvas11','样式和颜色[色彩]-fillStyle',canvasBase.StyleColor),
	tpl('canvas12','样式和颜色[色彩]-strokeStyle',canvasBase.StyleColor2),
	tpl('canvas13','样式和颜色[透明度]-globalAlpha',canvasBase.StyleColor3),
	tpl('canvas14','样式和颜色[透明度]-rgba()',canvasBase.StyleColor4),
	tpl('canvas15','样式和颜色[线型]-lineWidth',canvasBase.StyleColor5),
	tpl('canvas16','样式和颜色[线型]-lineCap',canvasBase.StyleColor6),
	tpl('canvas17','样式和颜色[线型]-lineJoin',canvasBase.StyleColor7),
	tpl('canvas18','样式和颜色[线型]-miterLimit',canvasBase.StyleColor8),
	tpl('canvas19','样式和颜色[虚线]-setLineDash和lineDashOffset',canvasBase.StyleColor9),
	tpl('canvas20','样式和颜色[渐变]-createLinearGradient',canvasBase.StyleColor10),
	tpl('canvas21','样式和颜色[渐变]-createRadialGradient',canvasBase.StyleColor11),
	tpl('canvas22','样式和颜色[图案样式]-createPattern',canvasBase.StyleColor12),
	tpl('canvas23','样式和颜色[阴影]-文字阴影',canvasBase.StyleColor13),
	tpl('canvas24','样式和颜色[填充规则]-evenodd',canvasBase.StyleColor14),
	tpl('canvas25','绘制文本-填充文本fillText',canvasBase.Drawing_text),
	tpl('canvas26','绘制文本-文本边框strokeText',canvasBase.Drawing_text1),
	tpl('canvas27','绘制文本[有样式文本]-textBaseline',canvasBase.Drawing_text2),
	tpl('canvas28','绘制文本[先进文本测量]-measureText',canvasBase.Drawing_text3),
	tpl('canvas29','使用图像[获得需要绘制的图片]-API图片源',canvasBase.Using_images),
	tpl('canvas30','使用图像[绘制图片]-折线图',canvasBase.Using_images1),
	tpl('canvas31','使用图像[缩放]-平铺图像',canvasBase.Using_images2),
	tpl('canvas32','变形Transformations[保存和恢复]-save和restore',canvasBase.Transformations),
	tpl('canvas33','变形Transformations[移动Translating]-translate ',canvasBase.Transformations1),
	tpl('canvas34','变形Transformations[旋转Rotating]-rotate ',canvasBase.Transformations2),
	tpl('canvas35','变形Transformations[缩放Scaling]-scale ',canvasBase.Transformations3),
	tpl('canvas36','变形Transformations[变形Transforms]-transform与setTransform  ',canvasBase.Transformations4),
	tpl('canvas37','组合Compositing[裁切路径 ]-clip',canvasBase.Compositing),
	tpl('canvas38','组合Compositing-globalCompositeOperation',canvasBase.Compositing1),
	tpl('canvas39','基本的动画animation-动画太阳系',canvasBase.Animation),
	tpl('canvas40','基本的动画animation-动画时钟',canvasBase.Animation1),
	tpl('canvas41','基本的动画animation-循环全景照片',canvasBase.Animation2),
	tpl('canvas42','基本的动画animation-Drawing a ball',canvasBase.Animation3),
	tpl('canvas43','基本的动画animation-Adding mouse control',canvasBase.Animation4),
	tpl('canvas44','像素操作ImageData-颜色选择器',canvasBase.ImageData),
	tpl('canvas45','像素操作ImageData-图片灰度和反相颜色',canvasBase.ImageData1),
	tpl('canvas46','像素操作ImageData-缩放和反锯齿',canvasBase.ImageData2,'<canvas id="zoom" width="300" height="227"></canvas><div><label for="smoothbtn"><input type="checkbox" name="smoothbtn" checked="checked" id="smoothbtn">  Enable image smoothing</label></div>'),
	tpl('canvas47','点击区域和无障碍访问HitRegion-点击区域（hit region）',canvasBase.HitRegion),
	tpl('canvas48','Canvas代码片段[网页代码]-Chaining methods',canvasBase.getpixelamount),
].join('');
/*===================================自动生成目录树===============================================*/
(function(){var mh=document.getElementById('main-content').getElementsByTagName('h4'),
	mhArr=[];for (var i = 0; i < mh.length; i++) {
		mhArr.push('<p><a href="#'+mh[i].id+'">'+mh[i].id+'</a></p>')}
		document.getElementById('sidebar').innerHTML=mhArr.join('');
}())

/*===================================渲染视图-canvas===============================================*/
$('canvas1') &&	canvasBase.draw('canvas1');
$('canvas2') &&	canvasBase.Drawing_shapes('canvas2');
$('canvas3') &&	canvasBase.Drawing_shapes1('canvas3');
$('canvas4') &&	canvasBase.Drawing_shapes2('canvas4');
$('canvas5') &&	canvasBase.Drawing_shapes3('canvas5');
$('canvas6') &&	canvasBase.Drawing_shapes4('canvas6');
$('canvas7') &&	canvasBase.Drawing_shapes5('canvas7');
$('canvas8') &&	canvasBase.Drawing_shapes6('canvas8');
$('canvas9') &&	canvasBase.Drawing_shapes7('canvas9');
$('canvas10') && canvasBase.Drawing_shapes8('canvas10');
$('canvas11') && canvasBase.StyleColor('canvas11');
$('canvas12') && canvasBase.StyleColor2('canvas12');
$('canvas13') && canvasBase.StyleColor3('canvas13');
$('canvas14') && canvasBase.StyleColor4('canvas14');
$('canvas15') && canvasBase.StyleColor5('canvas15');
$('canvas16') && canvasBase.StyleColor6('canvas16');
$('canvas17') && canvasBase.StyleColor7('canvas17');
$('canvas18') && canvasBase.StyleColor8('canvas18');
$('canvas19') && canvasBase.StyleColor9('canvas19');
$('canvas20') && canvasBase.StyleColor10('canvas20');
$('canvas21') && canvasBase.StyleColor11('canvas21');
$('canvas22') && canvasBase.StyleColor12('canvas22');
$('canvas23') && canvasBase.StyleColor13('canvas23');
$('canvas24') && canvasBase.StyleColor14('canvas24');
$('canvas25') && canvasBase.Drawing_text('canvas25');
$('canvas26') && canvasBase.Drawing_text1('canvas26');
$('canvas27') && canvasBase.Drawing_text2('canvas27');
$('canvas28') && canvasBase.Drawing_text3('canvas28');
$('canvas29') && canvasBase.Using_images('canvas29');
$('canvas30') && canvasBase.Using_images1('canvas30');
$('canvas31') && canvasBase.Using_images2('canvas31');
$('canvas32') && canvasBase.Transformations('canvas32');
$('canvas33') && canvasBase.Transformations1('canvas33');
$('canvas34') && canvasBase.Transformations2('canvas34');
$('canvas35') && canvasBase.Transformations3('canvas35');
$('canvas36') && canvasBase.Transformations4('canvas36');
$('canvas37') && canvasBase.Compositing('canvas37');
$('canvas38') && canvasBase.Compositing1('canvas38');

var sun = new Image();
var moon = new Image();
var earth = new Image();
sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
$('canvas39') && canvasBase.Animation('canvas39');
$('canvas40') && canvasBase.Animation1('canvas40');
$('canvas41') && canvasBase.Animation2('canvas41');
$('canvas42') && canvasBase.Animation3('canvas42');
$('canvas43') && canvasBase.Animation4('canvas43');
$('canvas44') && canvasBase.ImageData('canvas44');
$('canvas45') && canvasBase.ImageData1('canvas45');
$('canvas46') && canvasBase.ImageData2('canvas46');
$('canvas47') && canvasBase.HitRegion('canvas47');
$('canvas48') && canvasBase.CanvasCode('canvas48');//不执行只展示



// /*===================================将一个远程页面加载到画布元素上===============================================*/
// // 方法运用:
// // var remoteCanvas = new RemoteCanvas();
// // remoteCanvas.load();
// RemoteCanvas = function() {
//     this.url = 'http://developer.mozilla.org';
// };

// RemoteCanvas.CANVAS_WIDTH = 300;
// RemoteCanvas.CANVAS_HEIGHT = 300;

// RemoteCanvas.prototype.load = function() {
//     var windowWidth = window.innerWidth - 25;
//     var iframe;
//     iframe = document.createElement('iframe');
//     iframe.id = 'test-iframe';
//     iframe.height = '10px';
//     iframe.width = windowWidth + 'px';
//     iframe.style.visibility = 'hidden';
//     iframe.src = this.url;
//     // Here is where the magic happens... add a listener to the
//     // frame's onload event
//     iframe.addEventListener('load', this.remotePageLoaded, true);
//     //append to the end of the page
//     window.document.body.appendChild(iframe);
//     return;    
// };

// RemoteCanvas.prototype.remotePageLoaded = function() {
//     // Look back up the iframe by id
//     var ldrFrame = document.getElementById('test-iframe');
//     // Get a reference to the window object you need for the canvas
//     // drawWindow method
//     var remoteWindow = ldrFrame.contentWindow;

//     //Draw canvas
//     var canvas = document.createElement('canvas');
//     canvas.style.width = RemoteCanvas.CANVAS_WIDTH + 'px';
//     canvas.style.height = RemoteCanvas.CANVAS_HEIGHT + 'px';
//     canvas.width = RemoteCanvas.CANVAS_WIDTH;
//     canvas.height = RemoteCanvas.CANVAS_HEIGHT;
//     var windowWidth = window.innerWidth - 25;
//     var windowHeight = window.innerHeight;

//     var ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0,
//                   RemoteCanvas.CANVAS_WIDTH,
//                   RemoteCanvas.CANVAS_HEIGHT);
//     ctx.save();
//     ctx.scale(RemoteCanvas.CANVAS_WIDTH / windowWidth,
//               RemoteCanvas.CANVAS_HEIGHT / windowHeight);
//     ctx.drawWindow(remoteWindow,
//                    0, 0,
//                    windowWidth, windowHeight,
//                    'rgb(255, 255, 255)');
//     ctx.restore();
// };


// /*===================================将图像文件转换为base64字符串===============================================*/
// // 方法运用:
// // loadImageFile('myimage.jpg').then(string64 => { alert(string64); });
// var canvas = document.createElement('canvas');
// var ctxt = canvas.getContext('2d');
// function loadImageFile(url, callback) {
//   var image = new Image();
//   image.src = url;
//   return new Promise((accept, reject) => {
//     image.onload = accept;
//     image.onerror = reject;
//   }).then(accept => {
//     canvas.width = this.width;
//     canvas.height = this.height;
//     ctxt.clearRect(0, 0, this.width, this.height);
//     ctxt.drawImage(this, 0, 0);
//     accept(canvas.toDataURL());
//   });
// }