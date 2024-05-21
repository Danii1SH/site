class Card {

    render() {
        let n;
        let viewId = localStorage.getItem("viewItem");
        let htmlCatalog = ''
        CATALOG_DRESSES.forEach(({id, name, desc, price}) => {
            if (viewId == id) {
                n = name;
                htmlCatalog += `
                    
                    <div class = "product-rating">
                    <span>4.7(21)</span>
                    </div>
        
                    <div class = "product-price">
                    <p class = "new-price">Цена: <span>${price} рублей</span></p>
                    </div>
        
                    <div class = "product-detail">
                    <h2>О товаре: </h2>
                    <p>${desc}</p>
                    <ul>
                        <li>Цвет: <span>Светлый</span></li>
                        <li>Наличие: <span>Есть</span></li>
                        <li>Категория: <span>Платье</span></li>
                    </ul>
                    </div>
                    <div class = "purchase-info">
                    <button class="button btn" onclick="add(${id})">В корзину</button>
                  </div>
                `;
                const Title = document.getElementById('product-title');
                Title.innerText = name;
            }
        });
        const Root = document.getElementById("productsCard");
        Root.innerHTML += htmlCatalog;
        const bread = document.getElementById("breadTitel");
        bread.innerText = n;
    }
}


const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}
const card = new Card();
card.render();
window.addEventListener('resize', slideImage);