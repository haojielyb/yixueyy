// JavaScript Document
/*
function click(e) {
if (document.all) {
  if (event.button==1||event.button==2||event.button==3) {
   oncontextmenu='return false';
  }
}
if (document.layers) {
  if (e.which == 3) {
   oncontextmenu='return false';
  }
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")

var travel=true
var hotkey=17    hotkey��Ϊ�ȼ��ļ�ֵ,��ASII��,����99����c�� 
if (document.layers)
document.captureEvents(Event.KEYDOWN)
function gogo(e)
{ if (document.layers) {
if (e.which==hotkey&&travel){
alert("��������.�������������˰���!");  } }
else if (document.all){
if (event.keyCode==hotkey&&travel){ alert("��������.�������������˰���!"); }}

}

document.onkeydown=gogo 

*/