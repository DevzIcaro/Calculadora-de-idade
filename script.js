let isValid = false;
const input_ano = document.querySelector("#ano");
const input_mes = document.querySelector("#mes");
const input_dia = document.querySelector("#dia");
const submit_btn = document.querySelector(".submit-btn");
//ERROR ELEMENTS
const error_day = document.querySelector(".error-day");
const error_monthly = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
//OUTPUT ELEMENTS
const output_dia = document.querySelector(".output-dia");
const output_mes = document.querySelector(".output-mes");
const output_ano = document.querySelector(".output-ano");

submit_btn.addEventListener('click', CalculateDate);

input_dia.addEventListener("input", (e) =>{
     if (+input_dia.value > 31){
        error_day.textContent = "Must be a valid date";
        isValid = false;
        return;
     }else{
        isValid = true;
        error_day.textContent="";
     }
     if (+input_dia.value === 0){
        isValid = false;
        error_day.textContent = "This field is required";
        isValid = false;
        return;
     }else{
        isValid = true;
        error_day.textContent = "";
     }
});


input_mes.addEventListener("input", (e) =>{
    if (+input_mes.value > 12){
        error_monthly.textContent = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_monthly.textContent = "";
    }
    if (+input_mes.value === 0){
        isValid = false;
        error_monthly.textContent = "This field is required";
        isValid = false;
        return;
    }else{
        isValid=true;
        error_monthly.textContent = "";
    }
});

input_ano.addEventListener("input", (e) =>{
    if (+input_ano.value > 2023){
        error_year.textContent = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_year.textContent = "";
    }
    if(+input_ano.value === 0){
        isValid = false;
        error_year.textContent = "This is required";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_year.textContent = "";
    }
});

function CalculateDate(){
    if(isValid){
        let aniversario = `${input_mes.value}/${input_dia.value}/${input_ano.value}`;
        console.log(aniversario);
        let aniversarioOBJ = new Date(aniversario);
        let ageDiferencaData = Date.now() - aniversarioOBJ;
        let idadeData = new Date(ageDiferencaData);
        let idadeAno = idadeData.getUTCFullYear() - 1970;
        let idadeMes = idadeData.getUTCMonth();
        let idadeDia = idadeData.getUTCDay();
        output_dia.textContent = idadeDia;
        output_mes.textContent = idadeMes;
        output_ano.textContent = idadeAno;
    }else{
        alert("error");
    }
}