


      function nextPage(){
        let b = document.querySelector('.final-div')
     let c = document.querySelector('.container')
        b.style.display = 'none';
        c.style.display = 'block';
      }
      function calculateTotal() {
        let age = document.querySelector(".input-age").value;
        let e = document.querySelector(".final-div");
        let f = document.querySelector(".container");
        let k = document.querySelector(".error3");
        if(age == '' || age == null){
           k.style.display = 'block'
        }
        else{
            e.style.display = "block";
            f.style.display = "none";
        }
      
        let x = document.querySelector(".input-annual").value;
        let y = document.querySelector(".input-extra").value;
        let z = document.querySelector(".input-total").value;
        let sum = Number(x) + Number(y) - Number(z);
        let total = 0;
        if (sum  < 8) {
          total = sum
        } else if (sum > 8){
          if (age < 40) {
            total = 0.3 * (sum-8);
          } else if (age >= 40 && age < 60) {
            total = 0.4 * (sum-8);
          } else if (age >= 60) {
            total = 0.1 * (sum-8);
          }
        }

       document.querySelector(".total").innerHTML = total;
document.querySelector(".input-annual").value = '';
document.querySelector(".input-extra").value = '';
document.querySelector(".input-total").value = '';
document.querySelector(".input-age").value = '';

      }

      function restrict(e) {
        let x = e.which || e.keycode;
        let y = document.querySelector(".error");
        if (x >= 48 && x <= 57) {
          y.style.display = "none";
        } else {
          y.style.display = "block";
        }
      }

      function restricts(e) {
        let x = e.which || e.keycode;
        let y = document.querySelector(".error1");
        let z = y.value;

        if (x >= 48 && x <= 57) {
          y.style.display = "none";
        } else {
          y.style.display = "block";
        }
      }
      function restricts1(e) {
        let x = e.which || e.keycode;
        let y = document.querySelector(".error2");
        if (x >= 48 && x <= 57) {
          y.style.display = "none";
        } else {
          y.style.display = "block";
        }
      }
      function ageRestrict(e) {
        let a = document.querySelector('.input-age').value
        let x = e.which || e.keycode;
        let y = document.querySelector(".error3");
        if (isNaN(x) || x < 40 || (x >= 40 && x < 60) || x >= 60) {
          y.style.display = "none";
        }else if(a==null || a=="")  {
          y.style.display = "block";
        }
      }

