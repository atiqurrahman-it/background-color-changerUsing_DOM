let div=null;

window.onload=() =>{
  main();
}
//  change_bd_color_div     Start 

function main(){
  let input_color_name=document.querySelector(".input_cname")
  let change_bg_color_div=document.querySelector(".change_bg_color_div")

  let form=document.querySelector(".form")

  // submit color name start 
  form.addEventListener('submit',function(e){
    e.preventDefault();
    myvalidation();
    
    color_name=input_color_name.value
    change_bg_color_div.style.backgroundColor = color_name;
 
  }); 
  function myvalidation(){
    const colorValue=input_color_name.value.trim();

    if(colorValue==""){
      // show error
      setErrorFor(input_color_name,'** Please fill up the baground color name!')
    }
    else{
      setSuccessFor(input_color_name)
    }
    
  }

  function setErrorFor(input,message){
    const small=document.querySelector('small')
    small.innerHTML=message
    // input.className="form-group error"

}
function setSuccessFor(input){
  let small=document.querySelector('small')
  small.innerHTML="" 
  // input.className="form-group success"

}

 // submit color name ENd  -----------------


  // click  bgcolor change Start  
  let btn_change_color=document.querySelector('.change-color')
  function genarator_color_code(){
   const red=Math.floor(Math.random()*255)
   const green=Math.floor(Math.random()*255)
   const blue=Math.floor(Math.random()*255)

   return `rgb(${red} ${green} ${blue})`;
  }

  btn_change_color.addEventListener('click', function(){
   bgcolor=genarator_color_code()
   change_bg_color_div.style.backgroundColor = bgcolor;

   color_code_output.value=bgcolor // show bgcolor name 

 });
 // click  bgcolor change End   


// copy show (input box)  bgcolor name (form clipbord)  Start 

let copy_btn=document.querySelector('.copy_btn')
copy_btn.addEventListener('click',function(){

  navigator.clipboard.writeText(bgcolor)
  // color name show  idv 
  if(div!=null){
    div.remove()
    div=null
  }
  genarate_tost_message(`${color_code_output.value} copied`);
});
// copy show (input box)  bgcolor name (form clipbord)  ENd


// just when copy button click then show color code name and copied massege show   Start 
function genarate_tost_message(msg){
 //global a declar kora ahce  div 
  div=document.createElement('div'); 

  div.classList.add("Tost_message_position")
  // differnce between add and toggle add just add but toggle if class jodi theke tahole remove  hobe  na thakle add hobe 
  div.classList.toggle('Tost_message_animate_in') 
  div.innerHTML=msg ;

  document.body.appendChild(div);
  div.addEventListener('click',function(){
    div.classList.remove('Tost_message_animate_in')
    div.classList.toggle('Tost_message_animate_out')

    div.addEventListener('animationend',function(){
      div.remove()
      div=null
    })
  })

 
}

// just when copy button click then show color code name and copied massege show   Start 



}//main function end 


