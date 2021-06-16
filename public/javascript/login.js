async function loginFormHandler(event){
    event.preventDefault();

    const ex = document.querySelector('#blink_message');

    const emp_number = document.querySelector('#emp_number-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(emp_number && password){
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                emp_number,
                password
            }),
            headers: {'Content-Type':'application/json'}
        });

        if(response.ok){
            document.location.replace('/');
            window.reload();   //This wasn't necessary in the my computer at home
        } else {
            ex.textContent = "Incorrect Employee number or Password";
            //alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);