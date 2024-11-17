//with html collections we cant use for each method but we can use it with array 9node list 
//we can get it using document.querySelector() or using array.from("anyclass or id )
//on whichwe have to use forEach method")
//********************************************************************************************* */
const n = document.getElementsByTagName("h5");
for(let i=0;i<n.length;i++){
//console.log(n);
const ne=n[i];
ne.style.backgroundColor = "#fff";
ne.style.color="green";
}

//inner html
//the contents within a class is accessed.
const a=document.querySelector(".nav");
console.log(a.innerHTML);
a.innerHTML="<h2>hii there!, welcome to my portfolio</h2>";
a.innerHTML+="<button class=\"btn\">learn more</button>"
console.log(a.innerHTML);
//we use /"/" to avoid error which comes after we ,use double quotes inside of double quote;