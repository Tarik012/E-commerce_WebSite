    // active button using javascript

    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");


    btn.onclick = function(){
      sidebar.classList.toggle("active");

      if(btn.classList.contains("bx-menu")){
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
      }
      else{
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }


    villeLink.onclick= showCityDiv()

    function showCityDiv() {
        var x = document.getElementById(".productCity");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


    // const openNav  = document.querySelector(".icon1");
    // const closeNav  = document.querySelector(".fermer");
    // const menu  = document.querySelector(".menu");

    // const positionMenu = menu.getBoundingClientRect().left;

    // openNav.addEventListener("click", () =>{
    //     if(positionMenu < 0){
    //         menu.classList.add("show");
    //     }
    // })

    // closeNav.addEventListener("click", () =>{
    //     if(positionMenu < 0){
    //         menu.classList.remove("show");
    //     }
    // })



