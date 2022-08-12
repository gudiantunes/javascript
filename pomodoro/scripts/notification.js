const testNotification = () => {
    const notification = new Notification('JavasScript Notificarion API', {
        body : 'This is a JS Notification Demo',
        icon : './img/js.png',
        vibrate : true
    });

    setTimeout(() => {
        notification.close();
    }, 10 * 1000);

    notification.addEventListener('click', () => {
        window.focus();
    });
}

const restNotification = () => {
    const notification = new Notification ('Time to rest, budy', {
        body: 'Start the clock when ready to study again',
    });

    setTimeout(() => {
        notification.close();
    }, 10 * 1000);

    notification.addEventListener('click', () => {
        window.focus();
    });
}

function requestPermission() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission()
    } 
}

function hasPermission () {
    if (Notification.permission === 'granted') {
        return true
    }
    return false
}

function showTestNotification() {
    if (hasPermission()) {
        restNotification();
    }
}

export { requestPermission, showTestNotification };
