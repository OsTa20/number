        //  input
let dicem = document.getElementById('dicem');
let binar = document.getElementById('binar');
let octem = document.getElementById('octem');
let dexel = document.getElementById('dexel');
        //  button
let dicembtn = document.getElementById('dicembtn');
let binarbtn = document.getElementById('binarbtn');
let octembtn = document.getElementById('octembtn');
let dexelbtn = document.getElementById('dexelbtn');

let dicemvar1;
let dicemvar2 = [];
let dicemvar3;
let dicemvar4;

let binarvar1;
let binarvar2;
let binarvar3 = 0;
let binarvar4;
let binarvar5 = [];
let binarvar6 = '';
let binarvar7 = 0;
let binarvar8 = [];
let binarvar9;
let binarvar10 = '';
let binarvar11 = '';
let binarvar12;

let octemvar1;
let octemvar2 = '';
let octemvar3 = '';
let octemvar4 = '';
let octemvar5 = '';
let octemvar6;
let baki;

let dexelvar1;
let dexelvar2 = ['A','B','C','D','E','F'];
let dexelvar4 = ['1010','1011','1100','1101','1110','1111'];
let dexelvar3 = '';
let dexelvar5;
let dexelvar6;

function fdicem(){
  dicemvar1 = dicem.value ;
//    التحويل من العشري إلى ثنائي
  dicemvar2 = [];
  f10t2(dicemvar1);
  binar.type = 'text';
  binar.value = dicemvar3;
  dicemvar4 = dicemvar3;
  dicemvar2 = [];
  binar.type = 'number';
  
//  التحويل من الثنائي إلى ثماني
  binarvar5 = [];
  binarvar6 = '';
  binarvar7 = 0;
  f2t8(dicemvar3);
  octem.value = binarvar7;
  binarvar5 = [];
  binarvar6 = '';
  binarvar7 = 0;
  
//  التحويل من الثنائي إلى السداسي عشر
  binarvar8 = [];
  binarvar11 = '';
  f2t16(dicemvar3);
  dexel.value = binarvar11;
  binarvar8 = [];
  binarvar11 = '';
}
function fbinar(){
  binarvar1 = binar.value;
  binarvar4 = binarvar1;
  binarvar12 = binarvar1;
  
//  التحويل إلى عشري
  binarvar3 = 0;
  f2t10(binarvar1);
  dicem.value = binarvar3;
  binarvar3 = 0;
  
//  التحويل إلى ثماني
  binarvar3 = 0;
  binarvar5 = [];
  binarvar7 = 0;
  f2t8(binarvar4);
  octem.value = binarvar7;
  binarvar3 = 0;
  binarvar5 = [];
  binarvar7 = 0;
  
//   التحويل إلى سداسي عشر
  binarvar8 = [];
  binarvar11 = '';
  f2t16(binarvar12);
  dexel.value = binarvar11;
  binarvar8 = [];
  binarvar11 = '';
}
function foctem(){
  octemvar1 = octem.value;
  
//  التحويل إلى ثنائي  
  octemvar4 = '';
  f8t2(octemvar1);
  binar.type = 'text';
  binar.value = octemvar4;
  octemvar5 = octemvar4;
  octemvar6 = octemvar4;
  binar.type = 'number';
  octemvar4 = '';
  
//  التحويل من ثنائي إلى عشري
  binarvar3 = 0;
  f2t10(octemvar5);
  dicem.value = binarvar3;
  binarvar3 = 0;
  
//  التحويل من الثنائي إلى السداسي عشر
  binarvar8 = [];
  binarvar11 = '';
  f2t16(octemvar6);
  dexel.value = binarvar11;
  binarvar8 = [];
  binarvar11 = '';
}
function fdexel(){
  dexelvar1 = dexel.value;
  
//  التحويل إلى ثنائي
  dexelvar3 = '';
  f16t2(dexelvar1);
  binar.type = 'text';
  binar.value = dexelvar3;
  dexelvar5 = dexelvar3;
  dexelvar6 = dexelvar3;
  binar.type = 'number';
  dexelvar3 = '';
  
//  التحويل من الثنائي إلى عشري
  binarvar3 = 0;
  f2t10(dexelvar5);
  dicem.value = binarvar3;
  binarvar3 = 0;
  binarvar5 = '';
  
//    التحويل من الثنائي إلى ثماني
  binarvar3 = 0;
  binarvar5 = [];
  binarvar7 = 0;
  f2t8(dexelvar6);
  octem.value = binarvar7;
  binarvar3 = 0;
  binarvar5 = [];
  binarvar7 = 0;
  dexelvar6 = '';
}

function f10t2(num){
//    التحويل من عشري لثنائي
  if(num == Math.floor(num)){
    while ((num/2 >= 1) && (num != 0)){
      if (num % 2 == 0){
        dicemvar2.push(0);
      }
      else {
        dicemvar2.push(1);
      }
      num = Math.floor(num/2);
    }
    dicemvar2.push(1);
    if(num == 0){
      dicemvar2.push(0);
      dicemvar2.shift();
    }
  }
  dicemvar2.reverse();
  dicemvar3 = dicemvar2.join('');
}
function f2t10(num){
//  التحويل من الثنائي إلى عشري
  if(num == Math.floor(num)){
    for(let i=0; i<num.length; i++){
      binarvar2 = num[i] * Math.pow(2,num.length-1-i);
      binarvar3 += binarvar2;
    }
  }
}
function f8t2(num){
//   التحويل من الثماني إلى لثنائي
  if(num == Math.floor(num)){
    for(let i=0; i<num.length; i++){
      dicemvar2 = [];
      f10t2(num[i]);
      octemvar2 = dicemvar3;
      dicemvar2 = [];
      if(octemvar2.length == 2){
        octemvar3 = '0' + octemvar2;
      }
      else if(octemvar2.length == 1){
        octemvar3 = '00' + octemvar2;
      }
      else {
        octemvar3 = octemvar2;
      }
      octemvar4 += octemvar3;
    }  
  }
}
function f2t8(num){
  if(num == Math.floor(num)){
    baki = num.length % 3;
    if(baki != 0){
      if(baki == 1){    // +2
        binarvar5.unshift('00');
        binarvar5.push(num);
        binarvar4 = binarvar5.join('').toString();
        num = binarvar4;
      }
      if(baki == 2){        //  +1
        binarvar5.unshift('0');
        binarvar5.push(num);
        binarvar4 = binarvar5.join('').toString();
        num = binarvar4;
      }
    }
    for(let i=0; i<num.length; i++){
      let j=i;
      for(; j<i+3; j++){
        binarvar6 += num[j];
      }
      i = j-1;
      binarvar3 = 0;
      f2t10(binarvar6);
      binarvar7 *= 10;
      binarvar7 += binarvar3;
      binarvar3 = 0;
      binarvar6 = '';
    }
  }
}
function f16t2(num){
  for(let i=0; i<num.length; i++){
    if(dexelvar2.indexOf(num[i]) == -1){
      dicemvar2 = [];
      f10t2(num[i]);
      dicemvar2 = [];
      let dilen = dicemvar3.length;
      if(dilen < 4){
        if(dilen == 1){
          dicemvar3 = '000' + dicemvar3;
        }
        if(dilen == 2){
          dicemvar3 = '00' + dicemvar3;
        }
        if(dilen == 3){
          dicemvar3 = '0' + dicemvar3;
        }
      }
      dexelvar3 += dicemvar3;
    }
    else {
      dexelvar3 += dexelvar4[dexelvar2.indexOf(num[i])];
    }
  }
}
function f2t16(num){
  if(num == Math.floor(num)){
    baki = num.length % 4;
    if(baki != 0){
      if(baki == 1){    // +3
        binarvar8.unshift('000');
        binarvar8.push(num);
        binarvar9 = binarvar8.join('').toString();
        num = binarvar9;
      }
      if(baki == 2){        //  +2
        binarvar8.unshift('00');
        binarvar8.push(num);
        binarvar9 = binarvar8.join('').toString();
        num = binarvar9;
      }
      if(baki == 3){        //  +1
        binarvar8.unshift('0');
        binarvar8.push(num);
        binarvar9 = binarvar8.join('').toString();
        num = binarvar9;
      }
    }
    for(let i=0; i<num.length; i++){
      let j=i;
      for(; j<i+4; j++){
        binarvar10 += num[j];
      }
      i = j-1;
      if(dexelvar4.indexOf(binarvar10) == -1){
         binarvar3 = 0;
         f2t10(binarvar10);
         binarvar11 += binarvar3;
         binarvar3 = 0;
      }
      else {
        binarvar11 += dexelvar2[dexelvar4.indexOf(binarvar10)];
      }
      binarvar10 = '';
    }
  }
}

dicembtn.addEventListener('click',fdicem);
binarbtn.addEventListener('click',fbinar);
octembtn.addEventListener('click',foctem);
dexelbtn.addEventListener('click',fdexel);