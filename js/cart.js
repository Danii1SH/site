let cart = [];
function add(id) {
    buffer = JSON.parse(localStorage.getItem("cart-items"));
    if (buffer != null) {
        cart = JSON.parse(localStorage.getItem("cart-items"));
    }
    if (cart === undefined || cart.length == 0) {
        cart.push([id,1]);
    } else {
        let isadd = false;
        for (let i = 0; i < cart.length; i++) {
            let temp = cart[i];
            if (temp[0] == id) {
                temp[1]++;
                isadd = true;
            }
        }
        if (!isadd) {
            cart.push([id,1]);
        }   
    }
    console.log(cart);
    localStorage.setItem("cart-items", JSON.stringify(cart));
    cartP.render();
}

function remove(idB) {
    buffer = JSON.parse(localStorage.getItem("cart-items"));
    if (buffer != null)
        cart = JSON.parse(localStorage.getItem("cart-items"));
    for (let a = 0; a < cart.length; a++) {
        let temp = cart[a]
        if (idB == temp[0]) 
            cart.splice(a,1);
    }
    localStorage.setItem("cart-items", JSON.stringify(cart));
    console.log(idB);
    cartP.render();
}

function minus(idB) {
    cart1 = JSON.parse(localStorage.getItem("cart-items"));
    cart1.forEach((element) => {
        if (element[0] == idB) {
            if (element[1] == 1) {
                remove(idB);
            } else {
                element[1]--;
                localStorage.setItem("cart-items", JSON.stringify(cart1));   
            }
        }
    });
    cartP.render();
}


class cart_prod {

    render() {
        let htmlCatalog = ''; 
        let countArr = parseInt(0);
        let allPrice = 0;
        let cart1 = {};
        cart1 = JSON.parse(localStorage.getItem("cart-items"));
        cart1.forEach((element) => {
            CATALOG_DRESSES.forEach(({id, img, name, price, desc}) => {
                if (element[0] == id) {
                        htmlCatalog += `
                        <div class="cart-item d-flex">
                        <img src="../images/index/${img}.jpg" alt="">
                        <div class="text-block">
                            <h4>${name}</h4>
                            <p>${desc}</p>
                        </div>
                        <div class="price-box">
                            <h5>${price} рублей</h5>
                            <div class="count-controll d-flex">
                                <button onclick="minus('${id}')">-</button>
                                <p>${element[1]}</p>
                                <button onclick="add('${id}')">+</button>
                            </div>
                        </div>
                        <button class="item-trash-btn" onclick="remove('${id}')">
                            <img src="../images/icon/trash.svg" alt="" style="width: 30px">
                        </button>
                    </div>
                    `;
                    allPrice += parseInt(price * element[1]);
                }
            });
            countArr+= parseInt(1 * element[1]);
        });
        const NavCount = document.getElementById("countNav");
        NavCount.innerText = countArr;
        const Price = document.getElementById("sumPrice");
        const Count = document.getElementById("count");
        const Root = document.getElementById("root");
        Root.innerHTML = htmlCatalog;
        Count.innerText = 'Количество товара: ' + countArr + ' штук';
        Price.innerText = allPrice + ' рублей';
    }
}

const cartP = new cart_prod();
cartP.render();