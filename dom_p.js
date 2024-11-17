console.log(window.document);


const hii = document.getElementById("hii");
//console.log(hii.textContent);//reads the text within tag and gives the 
//text which is not visible on webpage.
//
//hii.textContent="this is contact";
//console.log(hii.textContent );
//(((((((((((((((((((((((((((((((((((((NEXT)))))))))))))))))))))))))))))))))))))
const a=document.querySelector("#hii");
console.log(a);//to print content of inside of tag
//to only print text
console.log(a.textContent);
// rule =>there should be only 1 id on a page but classes can be multiple;
////const b=document.querySelector(".p");
//console.log(b);//it will give result the first element which have the said class;
const c =document.querySelectorAll(".p");
//console.log(b);//gives all the content with same class name
//(((((((((((((((((((((((((((((((((((((((((((((((((next)))))))))))))))))))))))))))))))))))))))))))))))))
//inner text =>displays the text b/w the tags.

const d =document.getElementById("hii");
//console.log(d.innerText);
////////////////////////////////////////////////////////////////////////////
const e =document.querySelector("div.Contact-me p");
//console.log(e.style);//style is a property.
//e.style.backgroundColor="green";
//e.style.border="10px solid yellow";

//(((((((((((((((((((((((((((((((((((((((((((GET AND SET )))))))))))))))))))))))))))))))))))))))))))
const l= document.querySelector("a");
//console.log(l);
const li =document.querySelector("a")
//console.log(li.getAttribute("href"));//gives content inside of href .


//#######################################################################################################
//get multiple elements using getElements by class name;
//get multiple element item using querySelectorAll
const m =document.getElementsByClassName("p");
////console.log(m);
//console.log(typeof m);// it has array indexing only this. rest property not possible
//it is a object
const n = document.querySelectorAll(".p");
//console.log(n);                                     



//loop
//for loop
for(let i=0;i<n.length;i++)
{
    //console.log(i);
}