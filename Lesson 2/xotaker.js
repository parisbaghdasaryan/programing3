class Xotaker extends KendaniEak {
    constructor(x, y, index){
        super(x, y, index);
        this.tariq = 0;
    }
   stanalNorKordinatner() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
   }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy--;

            this.mahanal();
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norvandak = random(datarkvandakner);

        if (norvandak) {

            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
            this.bazmanal();

        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        
        if (this.energy == 10) {
            xotakerArr.push(new Xotaker(this.x, this.y));
            this.energy == 5;
        }
    }
    mahanal() {
        if (this.energy == 0) {
         matrix[this.y][this.x] = 0;

            for (var c in xotakerArr) {
                if (xotakerArr[c].x == this.x && xotakerArr[c].y == this.y) {
                    xotakerArr.splice(c, 1);
                    break;
                }
            }
        }
    }

}

