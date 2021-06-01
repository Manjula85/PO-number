async function signupFormHandler(event) {
  event.preventDefault();

  const emp_number = document.querySelector("#emp_number-signup").value.trim();
  const title = document.querySelector("#title-signup").value.trim();
  const first_name = document.querySelector("#first_name-signup").value.trim();
  const last_name = document.querySelector("#last_name-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (emp_number && title && first_name && last_name && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        emp_number,
        title,
        first_name,
        last_name,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response);
    });

    //check the response status
    if(response.ok){
        console.log('success');
    } else {
        alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);