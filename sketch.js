//Inisiasi Variabel
let ketinggian1 = 100;         // ketinggian
let gravitasi1 = 10;           // gravitasi 1
let gravitasi2 = 8;            // gravitasi 2
let dt = 1;
//Gambar
let sudut;
let itera;
let mtk;


function preload(){
  itera = loadImage("ITERA.png")
  mtk = loadImage("matematika.png")
}

//Tambah dan Kurangi Ketinggian
function Tketinggian1(){
  ketinggian1 += 10;
}

function Kketinggian1(){
  ketinggian1 -= 10;
  
  if (ketinggian1 < 10) {
    ketinggian1 = 10;
 }
}

//Tambah dan Kurangi Gravitasi 1
function Tgravitasi1(){
  gravitasi1 += 1;
}

function Kgravitasi1(){
  gravitasi1 -= 1;
  
  if (gravitasi1 < 0) {
    gravitasi1 = 0;
 } 
}

//Tambah dan Kurangi Gravitasi 2
function Tgravitasi2(){
  gravitasi2 += 1;
}

function Kgravitasi2(){
  gravitasi2 -= 1;
  
  if (gravitasi2 < 0) {
    gravitasi2 = 0;
 } 
}

//Tambah dan Kurangi Waktu
function Tdt(){
  dt += 0.1;
}

function Kdt(){
  dt -= 0.1;
  
  if (dt < 0) {
    dt = 0;
 } 
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  //tomboh tambah Ketinggian
  let tketinggian1 = createButton("+");
  tketinggian1.position (30,245)
  tketinggian1.mousePressed(Tketinggian1);
  
  //Tombol Kurangi Ketinggian
  let kketinggian1 = createButton("-");
  kketinggian1.position (90,245)
  kketinggian1.mousePressed(Kketinggian1);
  
  //Tombol tambah Gravitasi 1
  let tgravitasi1 = createButton("+");
  tgravitasi1.position (30,335)
  tgravitasi1.mousePressed(Tgravitasi1);
  
  //Tombol Kurangi Gravitasi 1
  let kgravitasi1 = createButton("-");
  kgravitasi1.position (90,335)
  kgravitasi1.mousePressed(Kgravitasi1);
  
  
  //Tombol tambah Gravitasi 2
  let tgravitasi2 = createButton("+");
  tgravitasi2.position (30,425)
  tgravitasi2.mousePressed(Tgravitasi2);
  
  //Tombol Kurangi Gravitasi 2
  let kgravitasi2 = createButton("-");
  kgravitasi2.position (90,425)
  kgravitasi2.mousePressed(Kgravitasi2);
  
  //Tombol tambah dt
  let tdt = createButton("+");
  tdt.position (30,520)
  tdt.mousePressed(Tdt);
  
  //Tombol Kurangi dt
  let kdt = createButton("-");
  kdt.position (90,520)
  kdt.mousePressed(Kdt);

 } 

function draw() {
  background("#191970");
  
  //Header
  fill("white")
  textSize(25)
  text("SIMULASI GERAK JATUH BEBAS DENGAN VARIAS GRAVITASI"                 ,240,45)
  textSize(17)
  text("Mata Kuliah Visualisasi Dalam Sains"                ,475,70)

  
  image(itera,160,20,60,55)
  image(mtk,1000,20,65,65)
  
  
  //Navigation Bar
  fill("#E6E7EB")
  rect(130,103,960,85)
  
  
  //Content
  rect(20,193,200,370)
  rect(225,193,975,370)
  
  //Sidebar
  fill("black")
  ellipse(500,270,30,30);
  ellipse(930,270,30,30);
  line(450,270,450,550);
  line(880,270,880,550);

  fill("black")
  textSize(13)
  text("g="+gravitasi1+" m/s^2",  370,280);
  text("g="+gravitasi2+" m/s^2",  810,280);
  text("Gerak jatuh bebas adalah gerak jatuh benda pada arah vertikal dari ketinggian tertentu tanpa kecepatan awal. Sebuah benda jatuh bebas dengan gerak vertikal "    ,145,120)
  text("ke bawah akan mengalami pertambahan percepatan secara linier. Dengan demikian, benda tersebut dapat dikatakan mengalami Gerak Lurus Berubah Beraturan "    ,145,140)
  text("(GLBB). Percepatan gerak benda yang dimaksud disini ialah percepatan gravitasi. Percepatan konstan untuk gerak jatuh bebas adalah percepatan akibat "    ,145,160)
  text("gravitasi bumi, sehingga nilai percepatan benda pada saat mengalami gerak jatuh bebas adalah mendekati nilai percepatan gravitasi bumi."      ,145,180)
  
  
  //Fotter
  fill("white")
  textSize(13)
  text("INFORMASI KELOMPOK 1 :",22,585)
  text("1. Dinda Salsabila (122160001)"    ,22,605)
  text("2. Rizky Ahmad Rifa'i (122160002)"  ,22,625)
  text("3. Indah Lusiana (122160007)"   ,520,605)
  text("4. Anisa Fitri (122160011) "  ,520,625)
  text("5. Rida Fitriani (122160013)"      ,1000,605)
  text("6. Ratu Ajeng Fadila H (122160029)"         ,1000,625)

  
  
  //Navigation Control
  fill("black")
  textSize(16)

  
  //Menampilkan nilai variabel
  textSize(16)
  fill("black")
  text("Benda 1",    472,230);
  text("Benda 2",    900,230);
  text("Ketinggian Benda : "+ ketinggian1         ,30,240)
  text("Gravitasi Benda 1 : "+ gravitasi1       ,30,330)
  text("Gravitasi Benda 2 : "+ gravitasi2      ,30,420)
  text("Selang Waktu : "+ dt      ,30,510)
  
  //Koding Simulasi
  translate(width/2-180, 180); // Pusatkan canvas di tengah
  
  // Menghitung percepatan sudut
  posisi1 = 0.5*gravitasi1*(dt)**2;
  posisi2 = 0.5*gravitasi2*(dt)**2;

  // Menghitung kecepatan sudut
  thetaVel += thetaAcc;
  
  // Menghitung sudut
  theta += thetaVel;
  
}