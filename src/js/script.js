function ativar(){
    let nav = document.querySelector(".nav");
    if (nav.classList.contains("ativar")){
        nav.classList.remove("ativar")
        document.querySelector(".list").src = "./src/img/list.svg"
    }else{
        nav.classList.add("ativar")
        document.querySelector(".list").src = "./src/img/close.svg"
    }
}