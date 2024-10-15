let UP = document.getElementById('UP');
UP.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 900) {
        UP.style.display = 'block';
    } else {
        UP.style.display = 'none';
    }
});

function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
}
let ARRAY=[]
fetch('https://dummyjson.com/products')
    .then(function(pro) {
        return pro.json();
    })
    .then(function(data) {
        let ContainerProducts = document.getElementById('Cats');
        ContainerProducts.innerHTML = '';

        for (let y = 0; y < data.products.length; y++) {
            ContainerProducts.innerHTML += `
                <div class="col-lg-2 col-md-4 COCOC col-sm-6 mb-3"> 
                    <div class="card text-center"> 
                        <img src="${data.products[y].thumbnail}" alt="" class="card-img-top product-image">
                        <div class="card-body">
                            <h5 class="card-title">${data.products[y].title.slice(0, 10)}</h5>
                            <p class="card-text">Price: $${data.products[y].price}</p>
                            <button class="SHOPPP" onclick="PUSHH(${y})"
>🛒 Shop Now</button>
                        </div>
                    </div>
                </div>  
            `;
        }


       
    
    });

    document.getElementById('OUT').addEventListener('click', function(event) {
        event.preventDefault();
Swal.fire({
    title: 'هل أنت متأكد؟',
    text: "لن تتمكن من التراجع بعد ذلك!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#000',
    cancelButtonColor: '000',
    confirmButtonText: 'نعم، تسجيل الخروج',
    cancelButtonText: 'إلغاء'
}).then((result) => {
    
    if (result.isConfirmed) {
       
        Swal.fire(
            
            'تم تسجيل الخروج!',
            
        
        ).then(function(){
            window.location.href='./FASTSIGN.html'
        })
    }
})
})
let ARR=JSON.parse(localStorage.getItem('DATAA'))||[];
function PUSHH(index) {
    fetch('https://dummyjson.com/products')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let product = data.products[index];
            
            // إنشاء الأوبجكت للمنتج
            let OBJ = {
                title: product.title,
                price: product.price,
                img: product.thumbnail
            };

            // افترض إن ARR مصفوفة موجودة
            ARR.push(OBJ);  // إضافة الأوبجكت للمصفوفة ARR
window.localStorage.setItem('DATAA',JSON.stringify(ARR));
          
            if (ARR.length !== 0) {  
                alert(`Your ${product.title} is Added`);
                console.log(ARR)
            } else {
                alert('Empty');
            }
        })  
}


function SHIFTTOCART(){
location.href='./CART.html'
}
