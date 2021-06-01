let poStoredData = {};

async function removePO(po) {
  var po_number = po;
  const response = await fetch(`/api/po/` + po_number, {
    method: 'delete',
    body: JSON.stringify({
      po_number,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log('Deleted PO number is ',po_number);
    //disabled so no other PO's can be gotten on this login cylce
    var enterButton = document.querySelector("#enter");
    //enterButton.disabled = true;  // <-- not working still...
  } else {
    //now we can save multiple times with the po removed
    saveRecord(poStoredData);
    alert(response.statusText);
  }
}

async function storeData(po, company, emp) {
  var po_number = parseInt(po);
  var company_name = company.trim();
  var emp_number = emp.trim();

  //But still...
  console.log("Got all the details! ", po_number, company_name, emp_number);

  //needed for the indexedDB to work
  poStoredData = {company_name, po_number, emp_number};

  if (company_name && po_number && emp_number) {
    const response = await fetch('/api/companies/', {
      method: 'post',
      body: JSON.stringify(poStoredData),
      headers: { "Content-Type": "application/json" },
    });

    removePO(po_number);
    // if (response.ok) {
    //   //remove the used/shown PO# for the list
    //   removePO(po_number);
    //   //document.location.replace("/");
    // } else {
    //   //it's saved into the indexedDB database from here
    //   saveRecord(poStoredData);
      
    //   alert(response.statusText);
    // }
  }
}

async function newCompany(number, emp) {
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
    storeData(spanEl.textContent, Company_name, emp);
  }
}
