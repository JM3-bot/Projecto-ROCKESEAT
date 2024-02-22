function clicar(){
  const body = document.body
  const img = document.querySelector("#profile img")
  if(body.classList.contains("claro")){
    body.classList.remove("claro")
    img.setAttribute("src","./assets/assets/avatar-dark.png")
    
  }
  else{
    body.classList.add("claro")
    img.setAttribute("src","./assets/assets/avatar-dark1.png")
  }
}