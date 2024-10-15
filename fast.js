document.addEventListener("DOMContentLoaded", function() {
    let amaal = document.getElementById('amal');
    let peso = document.getElementById('peso');
    let btn_login = document.getElementById('btn_login');
    
    console.log("Amaal Element:", amaal);
    btn_login.onclick = function(event) {
        event.preventDefault();

        let USERS = JSON.parse(localStorage.getItem('INFODATA')) || [];
        
      let user=USERS.find(function(OO){
        return OO.password===peso.value&&OO.email===amaal.value
      })

        if (user) {
            window.location.href = './MAIN.html';
        } else {
            return alert('الايميل أو الباسورد غلط يكبير');
        }
      
    };
   
});