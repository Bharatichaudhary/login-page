let tab =document.querySelector(".tab-form");
    let tabHeader =tab.querySelector(".tab-header");
    let tabHeaderElement =tab.querySelectorAll(".tab-header > div");
    let tabBody =tab.querySelector(".tab-body");
    let tabBodyElement =tab.querySelectorAll(".tab-body > div");

    for(let i=0;i<tabHeaderElement.length;i++){
        tabHeaderElement[i].addEventListener("click",function(){
            tabHeader.querySelector(".active").classList.remove("active");
            tabHeaderElement[i].classList.add("active");
            tabBody.querySelector(".active").classList.remove("active");
            tabBodyElement[i].classList.add("active");
        });
    }
