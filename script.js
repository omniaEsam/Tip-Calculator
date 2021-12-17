let $billInput = document.querySelector("#bill-input");
let $select = document.querySelector(".sel-class");
let $numPeople = document.querySelector("#num-people");
let $btn = document.querySelector(".btn");
let $tipResult = document.querySelector("#tip-result");

$btn.addEventListener("click" , function(e){
    e.preventDefault();
let result= Number( ($billInput.value/$numPeople.value)*$select.value);
$tipResult.innerHTML= ` $ ${result.toFixed(2)}
                            each`
});
