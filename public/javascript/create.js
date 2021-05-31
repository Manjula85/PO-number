function result(number) {
  var spanEl = document.querySelector("#po_number");
  var inputEl = document.querySelector("#company_name_input");
  Company_name = inputEl.value;

  console.log("Input box value", Company_name);
  //Get access to error message display
  var p_error = document.querySelector("#error_message");

  if (Company_name === "") {
    p_error.textContent =
      "Enter a Company name above to get a PO number please.";
      spanEl.textContent = 'xxxxx';
  } else {
    p_error.textContent = "Thank you!";
    spanEl.textContent = number;
  }
};

async function newCompany(number, event) {
  console.log("got the number", number);
  result(number);
};

//document.querySelector('#enter').addEventListener('click',newCompany);
