var ele = document.getElementById("scannarr");
ele.addEventListener("webkitAnimationIteration", alistener, false);
ele.addEventListener("MSAnimationIteration", alistener, false);
ele.addEventListener("oanimationiteration", alistener, false);
ele.addEventListener("animationiteration", alistener, false);

function alistener(e) {
  if (e.type.toLowerCase().indexOf("animationiteration") != -1)
  {
    var ele = document.getElementById("scannarr");
    ele.className = (ele.className.indexOf('-semi') != -1)
                  ? ele.className.replace('-semi', '-uuuuu')
                  : ele.className.replace('-uuuuu', '-semi') ;
  }
}