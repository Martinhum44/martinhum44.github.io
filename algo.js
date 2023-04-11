var i = 1
var image = ["./assets/imagen.png" ,"./assets/imagen2.png", "./assets/imagen3.png", "./assets/imagen4.png" ]
var a = ["https://studio.code.org/projects/spritelab/qj-J13pTd923W7RkvGIoAqd-q3c4VrQdxFg3jpWmg70" ,"https://studio.code.org/projects/applab/3WxTxIbPceBTwxoV7Jm9-FsnubObHICBa0hmD8jh9zg", "https://studio.code.org/projects/applab/gqGaNpe-nMTS6WO1JSyWDvswFer9skM6Yzyd_czQhVQ", "" ]
function cambiod(){
  document.getElementById("imagen").src=image[i];
  document.getElementById("a").href=a[i];
  i++;
  if (i > 3){
    i = 0
  }
  if (i < 0){
    i = 3
  }
}
function cambioi(){
  document.getElementById("imagen").src=image[i];
  i--;
  if (i > 3){
    i = 0
  }
  if (i < 0){
    i = 3
  }
}
