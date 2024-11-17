var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer","Sophomore","Coder"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


const image =document.getElementById("myImage");
const form =document.getElementById("myform").addEventListener("submit",function(event){
    const inputs=document.querySelectorAll("#myform input[type='text']");
    let formValid=true;
    //loop through each input to validate
    inputs.forEach((input)=>{
        const errorPopup=input.nextElementsibling; //
    if(input.value.trim() ===""){
        errorPopup.style.display="block";
        errorPopup.style.left=`${input.offsetLeft}px`;
        errorPopup.style.top=`${input.offsetTop+input.offsetHeight}px`
        formValid=false;
    }else{
        errorPopup.style.display="none";
    }

});
if(!formValid){
    event.preventDefault();
}
});
