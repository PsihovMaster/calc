    var input = document.getElementById('inpt');
    var arrBtn = document.getElementsByClassName('btn-main');
    var result = document.getElementsByClassName('result');
    var clean = document.getElementById('clean');
    var allClean =document.getElementById('cleanAll');
    var powBtn = document.getElementById('pow');
    var sqrtBtn = document.getElementById('sqrt');
    sqrtBtn.addEventListener('click',function () {
        input.value = Math.sqrt(input.value);
    } );

    powBtn.addEventListener('click',function (){
        input.value *= input.value;
    });
    clean.addEventListener('click',function() {
            var str = input.value.split("");
            str.pop();
            input.value = str.join('');
            if(input.value.length === 0){
                input.value = '0';
            }
        }
    );
    result[0].addEventListener('click',function() {
        input.value = eval(input.value);
    });
    allClean.addEventListener('click',function(){
            input.value = '0';
        }
    );

    for(var i = 0; i < arrBtn.length; i++){
       arrBtn[i].addEventListener('click', function() {
               var str = input.value.charAt(input.value.length-1);
               if((str=== '+'||str=== '-'||str === '/'||str === '*'||str === '.')&&(this.value === '+'||this.value === '-'||this.value === '/'||this.value === '*')) {
                   return
               }

               if(this.value === '.'){
                   var num = input.value.split('');
                   for(var j = 0; j < num.length; j++){
                       if(num[j] === '.'){
                           return
                       }
                   }
                   input.value += this.value;
                   return
               }
               if(input.value.charAt(0)==='0' && (input.value.length === 1)){
                   input.value = '';
               }
               if(input.value.length === 0 && (this.value === '+'||this.value === '/'||this.value === '*')){
                   input.value = '0';
                   return
               }
               input.value += this.value;
           }
       );
    }


  







