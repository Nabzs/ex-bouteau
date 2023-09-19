
class Point {
    private abs: number;
    private ord: number;
    
    constructor(abs: number, ord: number) {
      this.abs = abs;
      this.ord = ord; 
    }

   sePresenter() {
    console.log("Mon abscice est " + this.abs + " et mon ordonnée est " + this.ord);
  }

  calculerDistance(p: Point, x: number, y: number) {
    const distanceX = this.abs - p.abs ;
    const distanceY = this.ord - p.ord;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    return distance;

  }
  

  calculerMilieu(p: Point): Point {
    const milieuX = (this.abs + p.abs) / 2;
    const milieuY = (this.ord + p.ord) / 2;
    const milieu = new Point(milieuX, milieuY);
    return milieu;
  }

}

const milieuX = new Point(100, 100);
const milieuY = new Point(200, 200);
const milieu = milieuX.calculerDistance(milieuY, 100, 100);
console.log("Le milieu est : "+ milieu);



const point1 = new Point(0, 10);
const point2 = new Point(10, 0);
const distance = point1.calculerDistance(point2, 0, 0);
console.log("Distance entre les deux points :", distance);


  const p1 = new Point(10, 20);
  const p2 = new Point(20, 30);
  p1.sePresenter();


