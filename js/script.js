var select1 = document.querySelectorAll(".currency1"),
 select2 = document.querySelectorAll(".currency2"),
input_currency = document.getElementById('input_currency'),
output_currency = document.getElementById('output_currency');


fetch(`https://api.frankfurter.app/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    console.log(select2);
    for (var i = 0; i < entries.length; i++) {
      select1[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select2[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
});

input_currency.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  const numericRegex = /^\d*\.?\d*$/; // Regular expression for numeric input

  if (!numericRegex.test(inputValue)) {
    input_currency.value = '';
  }
});

function convert(){
  input_currency_val = input_currency.value;
  if (select1[0].value != select2[0].value) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select1[0].value}&to=${select2[0].value}`)
      .then((val) => val.json())
      .then((val) => {
        output_currency.value = Object.values(val.rates)[0];
        console.log(Object.values(val.rates)[0]);
      });
  } else {
    alert("Please select two different currencies");
  }
}

// swap.addEventListener('click', () => {
//   const temp = select1[0].value;
//   select1[0].value = select2[0].value;
//   select2[0].value = temp;
//   console.log(select1[0].value);
//   convert();
// });

function swap (){
    const temp = select1[0].value;
  select1[0].value = select2[0].value;
  select2[0].value = temp;
  console.log(select1[0].value);
  convert();
}               