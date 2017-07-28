(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory;
	} else {
		root.dchart = factory;
	}
}(this, function() {
	/**
	 * [extend 合并原生对象]
	 * @param  {[type]} orig   [description]
	 * @param  {[type]} option [description]
	 * @return {[type]}        [description]
	 */
	function extend(orig, option) {
		var orig = orig || {},
			option = option || {};
		for (var name in option) {
			if (typeof option[name] === "object" && orig[name]) {
				for (var namec in option[name]) {
					orig[name][namec] = option[name][namec];
				}
			} else {
				orig[name] = option[name];
			}
		}
		return orig;
	}
	/**
	 * [getColor 随机颜色]
	 * @param  {[type]} idx [随机ID]
	 * @return {[type]}     [颜色值]
	 */
	function getColor(idx) {
		var palette = [
			'#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
			'#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
			'#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
			'#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
		]
		return palette[idx % palette.length];
	}

	function dchart(a) {
		//step1：初始化数据
		var options = {
			el: 'body',
			data: Array.apply(0, Array(10)).map(function() {
				return  Math.floor(Math.random()*40+200);
			}),
			width: 600,
			height: 400,
			padding: {
				top: 10,
				bottom: 10,
				left: 10,
				right: 10
			},
			margin: {
				top: 10,
				bottom: 10,
				left: 10,
				right: 10
			},
			color: ['#2177BB'],
			barSpace: 10,
		}
		var opts = extend(options, a)

		var maxval = Math.max.apply(null, opts.data)

		function sum() {
			var data = opts.data,
				sum = 0;
			for (var i = 0; i < data.length; i++) {
				sum += parseInt(data[i]);
			}
			return sum;
		}

		// console.log(sum()/opts.data.length)
		// console.log(maxval)
		//step2：创建SVG容器
		var chart = opts.d3.select(opts.el)
			.append('svg')
			.attr('width', opts.width + opts.margin.left + opts.margin.right)
			.attr('height', opts.height + opts.margin.top + opts.margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + opts.margin.left + ', ' + opts.margin.top + ')');
		//step3：画柱状图
		// 计算每根柱状物体的宽度
		var barWidth = opts.width / opts.data.length;
		// 用g作每根柱状物体的容器，即生成占位符，等待填充svg图形
		var bar = chart.selectAll('g')
			.data(opts.data)
			.enter()
			.append('g')
			.attr('transform', function(d, i) {
				return 'translate(' + i * barWidth + ', 0)';
				// return 'translate(' + i * barWidth + ', '+(-opts.padding.bottom - opts.padding.top- opts.margin.bottom - opts.margin.top)+')';
			});
		//填充颜色
		bar.append('rect')
			.attr('fill', function(d, i) {
				return getColor(i);
			})
			.attr('y', function(d) {
				// return opts.height - d - opts.margin.top;
				return opts.height - d - opts.padding.bottom - opts.padding.top- opts.margin.bottom - opts.margin.top
			})
			.attr('height', function(d) {
				return d;
			})
			.attr('width', barWidth - opts.barSpace);
		//step3：添加坐标
		var x = opts.d3.scaleBand()
			.domain(opts.data)
			.range([0, opts.width]);

		  var y = opts.d3.scaleLinear()
		    .domain([0, opts.d3.max(opts.data)])
		    .range([opts.height, 0]);


		var xAxis = opts.d3.axisBottom(x);
		var yAxis = opts.d3.axisLeft(y);
		//添加x坐标轴
		chart.append('g')
			.attr('transform', 'translate(0,' + (opts.height- opts.padding.bottom - opts.padding.top- opts.margin.bottom - opts.margin.top) + ')')
			.call(xAxis);
		// 添加y坐标轴
		chart.append('g')
			.call(yAxis);
		console.log(opts)
	}
	return dchart;
}));