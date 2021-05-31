async function storeData(po, company, emp) {
  console.log("Got all the details! ", po, company, emp);
  var po_number = parseInt(po);
  var company = company.trim();
  var emp_number = emp.trim();

  if (company && po_number && emp_number) {
    const response = await fetch('/api/companies/', {
      method: 'post',
      body: JSON.stringify({
        company,
        po_number,
        emp_number,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

async function result(number, emp) {
  var spanEl = document.querySelector("#po_number");
  var inputEl = document.querySelector("#company_name_input");
  Company_name = inputEl.value;

  //Get access to error message display
  var p_error = document.querySelector("#error_message");

  if (Company_name === "") {
    p_error.textContent =
      "Enter a Company name above to get a PO number please.";
    spanEl.textContent = "xxxxx";
  } else {
    p_error.textContent = "Thank you!";
    spanEl.textContent = number;
  }

  storeData(spanEl.textContent, Company_name, emp);
}

async function newCompany(number, emp) {
  await result(number, emp);
}

//document.querySelector('#enter').addEventListener('click',newCompany);
