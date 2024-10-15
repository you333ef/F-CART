let COCO = document.getElementById('COCO');
let COX = document.getElementById('COX');
let TOTA = document.getElementById('TOTA');

window.onload = function() {
    let CART = JSON.parse(localStorage.getItem('DATAA')) || [];
    if (CART.length == 0) {
        COCO.innerHTML = 'The cart is empty.';
        TOTA.style.display = 'none';
    } else {
        COCO.innerHTML = '';
        for (let i = 0; i < CART.length; i++) {
            let quantity = CART[i].quantity || 1; 
            let price = CART[i].price * quantity; 
            COCO.innerHTML += `
            <div class="col-12 cart-item">
                <img src="${CART[i].img}" alt="Product Image">
                <h5 id="TYITLE">${CART[i].title.slice(0, 10)}...</h5>
                <h5 class="PYPRICE" id="PYPRICE-${i}">${price.toFixed(2)}</h5>
                <div class="cart-buttons">
                    <button onclick="DECREMENT(${i})" class="btn btn-outline-secondary decrement">-</button>
                    <span class="quantity" id="quantity-${i}">${quantity}</span>
                    <button class="btn btn-outline-secondary increment" onclick="increment(${i})" id="increment">+</button>
                    <button class="btn btn-dark delete" onclick="DEL(${i})">Delete</button>
                </div>
            </div>
            `;
        }
        // استدعاء TOTAL بعد عرض المنتجات
        TOTAL(); 
    }
}

// DELETE MEMPER
function DEL(TXT) {
    let CART = JSON.parse(localStorage.getItem('DATAA')) || [];
    CART.splice(TXT, 1);
    localStorage.setItem('DATAA', JSON.stringify(CART));
    
    // تحديث الإجمالي قبل الريلود
    TOTAL();
    
    window.location.reload();  // إعادة تحميل الصفحة
}

function increment(index) {
    let CART = JSON.parse(localStorage.getItem('DATAA')) || [];
    let NumInSpan = parseInt(document.getElementById(`quantity-${index}`).textContent);
    NumInSpan += 1;

    // تحديث الكمية في الـ span
    document.getElementById(`quantity-${index}`).textContent = NumInSpan;
    
    // تحديث السعر
    let OriginalPrice = CART[index].price;
    let UpdatingPruce = OriginalPrice * NumInSpan;
    document.getElementById(`PYPRICE-${index}`).textContent = UpdatingPruce.toFixed(2);

    // تحديث الكمية في الـ CART وتخزينها في localStorage
    CART[index].quantity = NumInSpan;
    localStorage.setItem('DATAA', JSON.stringify(CART));

    // تحديث الإجمالي
    TOTAL();
}

function DECREMENT(index) {
    let CART = JSON.parse(localStorage.getItem('DATAA')) || [];
    let NumInSpan = parseInt(document.getElementById(`quantity-${index}`).textContent);

    if (NumInSpan > 1) {
        NumInSpan -= 1;

        // تحديث الكمية في الـ span
        document.getElementById(`quantity-${index}`).textContent = NumInSpan;
        
        // تحديث السعر
        let NowPrice = CART[index].price;
        let NewPrice = NowPrice * NumInSpan;
        document.getElementById(`PYPRICE-${index}`).textContent = NewPrice.toFixed(2);

        // تحديث الكمية في الـ CART وتخزينها في localStorage
        CART[index].quantity = NumInSpan;
        localStorage.setItem('DATAA', JSON.stringify(CART));
        
        // تحديث الإجمالي
        TOTAL();
    }
}

let totalPrice = document.getElementById('totalPrice');
function TOTAL() {
    let CART = JSON.parse(localStorage.getItem('DATAA')) || [];
    let EFTRADY = 0;
    let ALLPRICES = document.querySelectorAll('.PYPRICE');
    
    for (let i = 0; i < ALLPRICES.length; i++) {
        let KOLLO = parseFloat(ALLPRICES[i].textContent); // استخدام parseFloat للتعامل مع الأرقام بالكسور
        EFTRADY += KOLLO;
    }

    // تحديث الإجمالي مع عرض الكسور
    totalPrice.innerHTML = EFTRADY.toFixed(2);
}
