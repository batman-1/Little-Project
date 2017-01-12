function Waterfall(wrap,item){
	this.wrap = wrap;
	this.item = item;
	this.init();
}

Waterfall.prototype = {
	init:function(){
		this.render();
		this.onResize()
	},

	render:function(){
		var ctWidth = this.wrap.width(),
			itemWidth = this.item.outerWidth(true),
			colNuM = parseInt(ctWidth/itemWidth);

		var colSumHeight =[];
		for (var i = 0; i < colNuM; i++) {
			colSumHeight.push(0);
		}
		
		this.item.each(function(){
			var cur = $(this);
			var idx = 0,
				minHeight = colSumHeight[0];
			for (var i = 0; i < colSumHeight.length; i++) {
				if (colSumHeight[i] < minHeight ) {
					minHeight = colSumHeight[i];
					idx = i;
				}
			};

			cur.css({
				top: minHeight ,
				left: itemWidth*idx ,
				opacity:1
			})
			colSumHeight[idx] += cur.outerHeight(true);			
		})
		this.wrap.height(Math.max.apply(null,colSumHeight))
	},

	onResize:function(){
		var _this = this;
		$(window).on('resize',function(){
			_this.render();
		})
	}
}