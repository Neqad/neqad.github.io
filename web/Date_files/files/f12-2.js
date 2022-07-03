
document.onkeydown = function(){
  if (event.ctrlKey && window.event.keyCode==85){
  return false;
  }
  if (window.event && window.event.keyCode == 123) {
  event.keyCode = 0;
  event.returnValue = false;
  }
  if (event.ctrlKey && window.event.keyCode==83){
  return false;
  }
  if (window.event && window.event.keyCode == 116) {
  event.keyCode = 0;
  event.returnValue = false;
  }
};