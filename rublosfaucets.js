var s=[
"http://paginaavisos.blogspot.com/2018/03/inicio-rublosfaucet.html",
"http://bonget.pw/?i=SMakvLNv",
"http://bonpark.pw/?i=SMakvLNv",
"http://bonbar.pw/?i=SMakvLNv",
"http://bonsad.pw/?i=SMakvLNv",
"http://bongard.pw/?i=SMakvLNv",
"http://bondar.pw/?i=SMakvLNv",
"http://boniks.pw/?inv=jahdfcgf",
"http://bonustok.pw/?inv=jahdfcgf",
"http://rubbon.pw/?i=2257",
"http://rubdar.pw/?i=2027",
"http://slotbox.ru/ref/PJFUJtJUaF",
"http://bonus-slot.ru/ref/V43qEUhY0m"
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
