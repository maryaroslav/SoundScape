document.getElementById('userPanel').addEventListener('click', function (event) {
    event.stopPropagation();
    let dialog = document.getElementById('customDialogUser');
    if (dialog.style.display === 'flex') {
        dialog.style.display = 'none';
    } else {
        dialog.style.display = 'flex';
    }
});

window.addEventListener('click', function (event) {
    let dialog = document.getElementById('customDialogUser');
    if (!dialog.contains(event.target) && dialog.style.display === 'flex') {
        dialog.style.display = 'none';
    }
});

window.onload = function() {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            fetch('/auth/logout')
                .then(response => {
                    if (response.ok) {
                        window.location.href = '/';
                    } else {
                        alert('Exit error.');
                    }
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    alert('Exit error.');
                });
        });
    } else {
        console.error('The element with id "logoutButton" was not found.');
    }
};