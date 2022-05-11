    // debut active button using javascript
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
     // fin active button using javascript

    //affiche la page produit
    function showSportDiv() {
    const pdts = document.querySelector("#divSport");
    if (pdts.style.display === "none") {
        pdts.style.display = "block";
    } else {
        pdts.style.display = "none";
    }
    }

    function showVilleDiv() {
        const pdtsVille = document.querySelector("#divVille");
        if (pdtsVille.style.display === "none") {
            pdtsVille.style.display = "block";
        } else {
            pdtsVille.style.display = "none";
        }
        }

        function ShowDiv(){
          document.getElementById('text').hidden = false
       }
       
       function HideDiv(){
          document.getElementById('text').hidden = true
       }    
       

  const moins = document.querySelector(".moins");
  moins.addEventListener("click",decreaseQuantity);
      
  function decreaseQuantity(){
    
    var i = document.querySelector(".qt").innerText;
    console.log(i)
    if(i == 0)
    {
      alert("supprimer l'\article")
    }
    else 
    {
      i--;
      document.querySelector(".qt").innerText = i;
    }
}

const plus = document.querySelector(".plus");
plus.addEventListener("click",increaseQuantity);
    
function increaseQuantity(){
  
  var i = document.querySelector(".qt").innerText; 
  {
    i++;
    document.querySelector(".qt").innerText = i;
  }
}

const product = {
  id : Number(document.querySelector(".idProduit1")),
  nom : document.querySelector(".nomProduit1"),
  description : document.querySelector(".descriptionProduit1"),
  categorie : document.querySelector(".categorieProduit1"),
  prix : document.querySelector(".prixProduit1")
}

getBasket(product);


function saveBasket(basket){
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket(){
  let basket = localStorage.getItem("basket");
  if(JSON.parse(basket) != null)
  {
      return JSON.parse(basket);
  }
  else{
    return [];
  }
}

function addBasket(product){
  let basket = getBasket(); 
  let foundProduct = basket.find(p=> p.id == product.id);
  if(foundProduct!= undefined){
    foundProduct.quantity++;
  }
  else{
    product.quantity = 1;
    basket.push(product);
  }
  basket.push(product);
  saveBasket(basket);

}

function removeFromBasket(){
  let basket = getBasket();
  basket = basket.filter(p=> p.id != product.id);
  saveBasket(basket);
}

function deleteLocalStorage(){
  localStorage.clear;
}

function changeQuantity(){
  let basket = getBasket(); 
  let foundProduct = basket.find(p=> p.id == product.id);
  if(foundProduct!= undefined){
    foundProduct.quantity += quantity;
  }
  saveBasket(basket);
}


