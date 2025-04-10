const BASE_URL = "https://open.er-api.com/v6/latest";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button")
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select")
const msg=document.querySelector(".msg");

//printing currency code and country code
// for(code in countryList)
// {
//     console.log(code,countryList[code]);
// }


for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");//creating a new options
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if( select.name==="to"&& currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}
 
//to change flag
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
};

const updateExchangeRate=async()=>{
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;

    if(amtVal===""||amtVal<1){
        amtVal=1;
        amount.value="1";
    }

    // making costum url 
    const from = fromCurr.value;
      const to = toCurr.value;
      const URL = `${BASE_URL}/${from}`;
      
    let response=await fetch(URL);
    let data =await response.json();
    let rate = data.rates[to];
    
    let finalAmount=amtVal*rate;
    msg.innerText =`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;




}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    
});

window.addEventListener("load",()=>{
    updateExchangeRate();
});

