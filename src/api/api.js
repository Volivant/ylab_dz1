export const userAuth = (loginUser, passwordUser) => {
    fetch("/api/users/")
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(json => {
            const usersList = json.filter(json => json.user === loginUser && json.password === passwordUser);
            if (usersList.length >0) {
                alert("Успешная аутентификация");
            } else {
                alert("Неверный логин или пароль");
            }
        });
}