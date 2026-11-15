const canvas=document.getElementById("game"),ctx=canvas.getContext("2d");
const coinsEl=document.getElementById("coins"),toastEl=document.getElementById("toast"),hint=document.getElementById("hint");
let W=720,H=610,player={x:355,y:310},coins=Number(localStorage.getItem("neo_coins")||0),keys={},items=[];
coinsEl.textContent=coins;
function resize(){const r=canvas.getBoundingClientRect();const d=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(r.width*d);canvas.height=Math.round(r.height*d);ctx.setTransform(canvas.width/W,0,0,canvas.height/H,0,0)}
function toast(t){toastEl.textContent=t;toastEl.classList.add("show");setTimeout(()=>toastEl.classList.remove("show"),2100)}
function makeCoins(){items=[];for(let i=0;i<12;i++)items.push({x:75+(i*137)%570,y:85+(i*91)%440,taken:false})}
makeCoins();
function ellipse(x,y,rx,ry,color){ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill()}
function draw(){
 ctx.clearRect(0,0,W,H);
 // water and island
 ctx.fillStyle="#54c7c1";ctx.fillRect(0,0,W,H);
 for(let i=0;i<90;i++){let x=(i*97)%W,y=(i*61)%H;ellipse(x,y,2+(i%3),1.5,"#ffffff30")}
 ellipse(360,315,306,252,"#287f68");ellipse(360,302,292,245,"#83ce83");
 // paths
 ctx.strokeStyle="#d9bc83";ctx.lineWidth=45;ctx.lineCap="round";ctx.beginPath();ctx.moveTo(110,420);ctx.quadraticCurveTo(330,480,350,300);ctx.quadraticCurveTo(360,150,590,170);ctx.stroke();
 // trees
 for(let i=0;i<18;i++){let x=95+(i*113)%530,y=105+(i*79)%410;if(Math.hypot(x- player.x,y-player.y)>35){ellipse(x,y+12,17,9,"#28704f");ellipse(x,y,17,20,"#237a58");ellipse(x-5,y-6,9,10,"#3d9b68")}}
 // pond
 ellipse(525,385,62,39,"#46b9d1");ellipse(525,385,47,27,"#69d5e4");
 // coins
 items.forEach(c=>{if(!c.taken){ellipse(c.x,c.y+4,10,5,"#98732c");ellipse(c.x,c.y,9,9,"#ffcf45");ctx.fillStyle="#fff0a0";ctx.font="bold 12px sans-serif";ctx.fillText("$",c.x-3.5,c.y+4)}});
 // player shadow and body
 ellipse(player.x,player.y+17,17,8,"#1a634b66");
 ellipse(player.x,player.y+1,13,14,"#ffb27b");
 ellipse(player.x,player.y-12,14,13,"#263b69");
 ellipse(player.x,player.y-16,11,9,"#65d9c3");
 ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(player.x-4,player.y-13,2,0,7);ctx.arc(player.x+4,player.y-13,2,0,7);ctx.fill();
 ctx.fillStyle="#15334b";ctx.font="bold 12px sans-serif";ctx.textAlign="center";ctx.fillText("TOI",player.x,player.y+34);ctx.textAlign="left";
 requestAnimationFrame(draw)
}
function update(){let dx=(keys.right?1:0)-(keys.left?1:0),dy=(keys.down?1:0)-(keys.up?1:0);if(dx||dy){let n=Math.hypot(dx,dy);player.x=Math.max(45,Math.min(675,player.x+dx/n*3.2));player.y=Math.max(65,Math.min(550,player.y+dy/n*3.2))}
 items.forEach(c=>{if(!c.taken&&Math.hypot(c.x-player.x,c.y-player.y)<23){c.taken=true;coins+=1;coinsEl.textContent=coins;localStorage.setItem("neo_coins",coins)}});requestAnimationFrame(update)}
document.querySelectorAll("[data-dir]").forEach(b=>{let d=b.dataset.dir;b.addEventListener("pointerdown",e=>{e.preventDefault();keys[d]=true;b.setPointerCapture(e.pointerId)});["pointerup","pointercancel","lostpointercapture"].forEach(ev=>b.addEventListener(ev,()=>keys[d]=false))});
document.getElementById("daily").addEventListener("click",()=>{let today=new Date().toISOString().slice(0,10),last=localStorage.getItem("neo_daily");if(last===today){toast("Ton cadeau du jour a déjà été récupéré !");return}localStorage.setItem("neo_daily",today);coins+=25;localStorage.setItem("neo_coins",coins);coinsEl.textContent=coins;toast("🎁 +25 pièces virtuelles !")});
document.getElementById("mission").addEventListener("click",()=>{hint.textContent="Mission : récupère des pièces sur toute l'île";toast("Explore l'île pour trouver les pièces !")});
resize();window.addEventListener("resize",resize);draw();update();