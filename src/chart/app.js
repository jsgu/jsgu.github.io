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
/* 渲染视图 */
document.getElementById('main-content').innerHTML="测试chart";
