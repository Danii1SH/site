class Products {

    render() {
        let htmlCatalog = ''
        let cout = 0;   
        CATALOG_DRESSES.forEach(({id, name, img, price}) => {
            cout++;
            let startId = currentPage * itemsPerPage;
            let endId = startId + itemsPerPage;
            if (cout > startId && cout <= endId) {
                htmlCatalog += `
                <div class="col item-conteiner">
                    <div class="card-container">
                        <div class="d-flex flex-column small-card-image">
                            <img src="../images/index/${img}.jpg" alt="">
                            <a href="product.html" onclick="view(${id})">${name}</a>
                            <div class="footer-card d-flex justify-content-between">
                                <p class="my-auto">${price} руб.</p>
                                <button onclick="add(${id})">В корзину</button>
                            </div>
                        </div>
                        <button class="preview" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Быстрый просмотр</button>
                    </div>
                </div>
                `;
            }
        });
        const Root = document.getElementById("products");
        Root.innerHTML = htmlCatalog;
    }
}

class NavPanel {

    render() {
        let html = '';
        let x = Math.ceil(CATALOG_DRESSES.length/itemsPerPage);
        console.log(x);
        for (let i = 0; i < x; i++) {
            if (currentPage == i) {
                html += `
                <li class="page-item active" aria-current="page">
                <span class="page-link">${i + 1}</span>
              </li>
                `;
            } else {
                html += `
                <li class="page-item"><a class="page-link" href="#" onclick="update(${i})">${i + 1}</a></li>
                `;
            }
        }
        const RootNav = document.getElementById("pagination");
        RootNav.innerHTML = html;
    }
}

function view(id) {
    localStorage.setItem("viewItem", id);
}

function update(offset) {
    currentPage = offset;
    navPaner.render();
    products.render();
}

const itemsPerPage = 12;
let currentPage = 0;

const products = new Products();
const navPaner = new NavPanel();
products.render();
navPaner.render();