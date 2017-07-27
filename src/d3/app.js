import './base.css'
import * as d3 from './d3'
/* 初始化骨架 */
document.getElementById('app').innerHTML=[
	'<header>',
	  '<div class="inner">',
	    '<a href="https://jsgu.github.io/">',
	      '<h1>jsgu.github.io</h1>',
	    '</a>',
	    '<h2>D3可视化---实例源码</h2>',
	      '<a href="https://github.com/jsgu/jsgu.github.io" class="button"><small>Follow me on</small> GitHub</a>',
	  '</div>',
	'</header>',
	'<div id="content-wrapper">',
	  '<div class="inner clearfix">',
	    '<section id="main-content">',
	    '</section>',
	    '<aside id="sidebar">',
	    '</aside>',
	  '</div>',
	'</div>'
].join("");
/* 导航 */
const navArr=['柱状图','饼图','折线图','扇形图'];
d3.selectAll("#sidebar").append("p").selectAll("p")
  .data(navArr)
  .enter().append("p").append("a").attr('href',function(d) { return "#"+d;}).style("cursor","pointer")
  .style("color", function(d, i) {return i % 2 ? "#090" : "#f00";})
  .text(function(d) { return d + "实例"; })
  .on("click", function(d,i) {
  	console.log(d)
  })


/* 基本结构 */
function tpl(id,title,code){
	return '<h4 id="'+title+'">D3可视化('+title+')---实例源码</h4><svg width="690" height="400" id="'+id+'"></svg><div class="highlighter-rouge"><pre class="highlight"><code>' +code +'</code></pre></div>';
}

/* 渲染视图 */
document.getElementById('main-content').innerHTML=[tpl('svg1','直方图','$ npm init'),tpl('svg2','柱状图','$ npm init')].join("");

/* 导航 */
const h4=document.getElementById('main-content').getElementsByTagName('h4');
console.log(h4)
// console.log(d3.selectAll("#main-content").data([4, 8, 15, 16, 23, 42]).enter().html(function(d) { return "<p>I’m number gogo BY " + d + "!</p>"; }))


var svg = d3.select("#svg1"),
				w = parseInt(svg.style("width")),
				h = parseInt(svg.style("height"));
			var data = d3.range(0,1000).map(()=>{
				return {
					v:d3.randomBates(10)()*10
				}
			})
			var xscale = d3.scaleLinear()
				.domain([0,10])
				.range([100,w-100])
			svg.append("g").attr("class","axis")
				.attr("transform","translate(0,"+(h-100)+")")
				.call(d3.axisBottom(xscale))
			var histogram = d3.histogram()
				.value((d)=>{return d.v})
				.domain(xscale.domain())
				.thresholds(20)
			var yscale = d3.scaleLinear()
				.range([h-100,100])
			draw();
			function draw(){
				var bins = histogram(data);
				yscale.domain([0,d3.max(bins,(d)=>{
					return d.length;
				})])
				// console.log(bins)
				var update = svg.selectAll(".bin")
					.data(bins)
				update.exit().remove()
				update.enter().append("rect")
					.merge(update)
					.attr("class","bin")
					.attr("x",(d)=>{
						return xscale(d.x0);
					})
					.attr("y",(d)=>{
						return yscale(d.length);
					})
					.attr("width",(d)=>{
						return xscale(d.x1)-xscale(d.x0);
					})
					.attr("height",(d)=>{
						return h-100-yscale(d.length);
					})
					.attr("fill", function(d, i) {return i % 2 ? "#090" : "#f00";})
					.style("cursor","pointer")
					.on("click",function(){
						console.log(window.event);
						console.log(d3.event)
					})
			}



var data = [
  {month: "Q1-2016", apples: 3840, bananas: 1920, cherries: -1960, dates: -400},
  {month: "Q2-2016", apples: 1600, bananas: 1440, cherries: -960, dates: -400},
  {month: "Q3-2016", apples:  640, bananas:  960, cherries: -640, dates: -600},
  {month: "Q4-2016", apples:  320, bananas:  480, cherries: -640, dates: -400}
];

var series = d3.stack()
    .keys(["apples", "bananas", "cherries", "dates"])
    .offset(d3.stackOffsetDiverging)
    (data);

var svg2 = d3.selectAll("#svg2"),
    margin = {top: 20, right: 30, bottom: 30, left: 30},
    width = +svg.attr("width"),
    height = +svg.attr("height");

var x = d3.scaleBand()
    .domain(data.map(function(d) { return d.month; }))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1);

var y = d3.scaleLinear()
    .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
    .rangeRound([height - margin.bottom, margin.top]);

var z = d3.scaleOrdinal(d3.schemeCategory10);

svg2.append("g")
  .selectAll("g")
  .data(series)
  .enter().append("g")
    .attr("fill", function(d) { return z(d.key); })
  .selectAll("rect")
  .data(function(d) { return d; })
  .enter().append("rect")
    .attr("width", x.bandwidth)
    .attr("x", function(d) { return x(d.data.month); })
    .attr("y", function(d) { return y(d[1]); })
    .attr("height", function(d) { return y(d[0]) - y(d[1]); })

svg2.append("g")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(d3.axisBottom(x));

svg2.append("g")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(d3.axisLeft(y));

function stackMin(serie) {
  return d3.min(serie, function(d) { return d[0]; });
}

function stackMax(serie) {
  return d3.max(serie, function(d) { return d[1]; });
}





// d3.select("body")
// 	.selectAll("#main-content")
// 	.data([4, 8, 15, 16, 23, 42])
// 	.enter().append("p").style("color", function(d, i) {return i % 2 ? "#090" : "#f00";}).text(function(d) { return "I’m number gogo BY " + d + "!"; });


