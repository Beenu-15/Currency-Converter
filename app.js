const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = docunment.querySelectorALL(".dropdown select");
const btn = docunment.querySelector("from button");
const fromCurr = docunment.querySelector(".from select ");
const toCurr = docunment.querySelector(".to select");
const msg = docunment.querySelector(".msg");

 

for(let select of dropdowns){
    for( let code in countryList){
        let newOption = docunment.creatElement("option");
        newOption.innerText =Code;
        newOption.value = Code;
        if(select.name ==="from" && Code ==="USD"){
            newOption.selected ="selected";
        }else{
            (select.name === "to" && Code ==="INR")
                newOption.selected = "selected";
            }
           select.append(newOption);
        }
        select.addEventListener("change" ,(evt) =>{
            updateFlag(evt.target);
        });
    
    
    }



const updateExchangeRate =async() => {
 let  amount = docunment.querySelector(".amount input");
 let amtVal = amount.value;
  if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value="1";
    }

   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase()}.json`;
   let response  = await fetch(URL);
   let data = data[toCurr.value.toLowerCase()];
   let rate = data[toCurr.value.toLowerCase()];

   let finalAmount = amtValue * rate;
     Msg.innerText = ` ${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};




const updateFlag = (element) => {
let currCode = Element.value;
let countryCode = countryList(currCode); //IN ,EU
let newSrc="https://flagsapi.com/${countrycode}/flat/64.png"
let img=element.parentElement.querySelector("img");
img.src = newSrc;
}

btn.addEventListener("click",(evt) =>{
    evt.preventDefault();
    updateExchangeRate();
});


docunment.addEventListener("load" ,() => {
    updateExchangeRate();
});









