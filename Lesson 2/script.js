var grassArr = [];
var xotakerArr = [];
var gishaticharr = [];
var patarr=[];
var jurarr=[];
var matrix = [];


var side = 20;
function setup() {
    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y,1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xk = new Xotaker(x, y,1);
                xotakerArr.push(xk);
            }
            else if (matrix[y][x] == 3) {
                var ds = new Pat(x,y);
                patarr.push(ds);

            }
            else if(matrix[y][x] == 4){
                var hk = new gishatich(x,y);
                gishaticharr.push(hk);
            }
            else if(matrix[y][x]== 5){
                var ghj = new jur(x,y);
                jurarr.push(ghj);
            }
        }
    }


}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3){
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4){
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5){
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            
        }


    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotakerArr) {
        if(xotakerArr[i]) {
         xotakerArr[i].eat();
        }
    }
   for(var i in patarr){
        patarr[i].veracnel();
    }
    for (var i in gishaticharr) {
         gishaticharr[i].eat();

    }
      for (var i in jurarr) {
         jurarr[i].bazmanal();

    }

}
var g = 65

for (var y = 0; y < g; y++) {
    matrix.push([])
    for (var x = 0; x < g; x++) {
        matrix[y].push(0)
    }
}


for (var i = 0; i < 300; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 1
}

for (var i = 0; i < 50; i++) {
    var a = Math.floor(Math.random() * g)
   var b = Math.floor(Math.random() * g)
   matrix[a][b] = 2
}
for (var i = 0; i < 8; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 3
}
for (var i = 0; i < 10; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 4
}

for (var i = 0; i < 10; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 5
}




