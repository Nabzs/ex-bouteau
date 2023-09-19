var Point = /** @class */ (function () {
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    Point.prototype.sePresenter = function () {
        console.log("Mon abscice est " + this.abs + " et mon ordonnée est " + this.ord);
    };
    Point.prototype.calculerDistance = function (p, x, y) {
        var distanceX = this.abs - p.abs;
        var distanceY = this.ord - p.ord;
        var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance;
    };
    Point.prototype.calculerMilieu = function (p) {
        var milieuX = (this.abs + p.abs) / 2;
        var milieuY = (this.ord + p.ord) / 2;
        var milieu = new Point(milieuX, milieuY);
        return milieu;
    };
    return Point;
}());
var milieuX = new Point(100, 100);
var milieuY = new Point(200, 200);
var milieu = milieuX.calculerDistance(milieuY, 100, 100);
console.log("Le milieu est : " + milieu);
var point1 = new Point(0, 10);
var point2 = new Point(10, 0);
var distance = point1.calculerDistance(point2, 0, 0);
console.log("Distance entre les deux points :", distance);
var p1 = new Point(10, 20);
var p2 = new Point(20, 30);
p1.sePresenter();
