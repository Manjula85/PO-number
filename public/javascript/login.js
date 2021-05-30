async function loginFormHandler(event){
    event.preventDefault();

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
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);