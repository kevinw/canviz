//#include 'Point.js'
//#include 'Polygon.js'

var Rect = exports.Rect = function(l, t, r, b, options) {
		this.l = l;
		this.t = t;
		this.r = r;
		this.b = b;
		Polygon.call(this, [], options);
};
Rect.prototype = new Polygon();
Rect.prototype.constructor = Rect;
Rect.prototype.offset = function(dx, dy) {
		this.l += dx;
		this.t += dy;
		this.r += dx;
		this.b += dy;
		return this;
};
Rect.prototype.inset = function(ix, iy) {
		this.l += ix;
		this.t += iy;
		this.r -= ix;
		this.b -= iy;
		return this;
};
Rect.prototype.expandToInclude = function(rect) {
		this.l = Math.min(this.l, rect.l);
		this.t = Math.min(this.t, rect.t);
		this.r = Math.max(this.r, rect.r);
		this.b = Math.max(this.b, rect.b);
};
Rect.prototype.getWidth = function() {
		return this.r - this.l;
};
Rect.prototype.getHeight = function() {
		return this.b - this.t;
};
Rect.prototype.setupSegments = function() {
		var w = this.getWidth();
		var h = this.getHeight();
		this.points = [
			new Point(this.l, this.t),
			new Point(this.l + w, this.t),
			new Point(this.l + w, this.t + h),
			new Point(this.l, this.t + h)
		];
		Polygon.prototype.setupSegments.call(this);
};
Rect.prototype.toString = function() {
    return '<Rect (' + [this.l, this.t, this.r, this.b].join(", ") + ')>';
};
