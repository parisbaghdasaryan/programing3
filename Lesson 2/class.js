

// class Grass {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;

//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//         this.multiply = 0

//     } yntrelVandak(ch) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == ch) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     bazmanal() {
//         this.multiply++;
//         var norVandak = random(this.yntrelVandak(0));

//         if (this.multiply >= 6 && norVandak) {
//             var norXot = new Grass(norVandak[0], norVandak[1]);
//             grassArr.push(norXot);
//             matrix[norVandak[1]][norVandak[0]] = 1;
//             this.multiply = 0;
//         }
//     }
// }

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
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
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

class gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energi = 5;
        this.directions = [];
        this.index = 4;
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
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(2);
        var norvandak = random(datarkvandakner);

        if (norvandak) {

            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
            for (var c in xotakerArr) {
                if (xotakerArr[c].x == this.x && xotakerArr[c].y == this.y) {
                    xotakerArr.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
        
                this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norvandak = random(datarkvandakner);

        if (norvandak) {

            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
            for (var c in grassArr) {
                if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
                    grassArr.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
                this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(5);
        var norvandak = random(datarkvandakner);

        if (norvandak) {

            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
            for (var c in jurarr) {
                if (jurarr[c].x == this.x && jurarr[c].y == this.y) {
                    jurarr.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
}










class Pat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;

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
    yntrelVandak(chh) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == chh) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    veracnel() {
        var vandak = random(this.yntrelVandak(2));
        if (vandak) {

            matrix[vandak[1]][vandak[0]] = 0;
            xotakerArr.splice(matrix[vandak[1]][vandak[0]], 1)
        }

        var vandak = random(this.yntrelVandak(1));
        if (vandak) {

            matrix[vandak[1]][vandak[0]] = 0;
            grassArr.splice(matrix[vandak[1][vandak[0]]], 1)
        }

    }
   



}
class jur {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;

        this.directions = [
           
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1]
        ];
        this.multiply = 0

    } yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 20 && norVandak) {
            var norjur = new jur(norVandak[0], norVandak[1]);
            jurarr.push(norjur);matrix[this.y][this.x] = 5;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.multiply = 0;
        }
    }

}




















