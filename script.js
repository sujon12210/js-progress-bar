function start(){
  let width = 0;
  const progress = document.getElementById('progress');

  const interval = setInterval(()=>{
    if(width >= 100){
      clearInterval(interval);
    }else{
      width++;
      progress.style.width = width + '%';
    }
  }, 50);
}
