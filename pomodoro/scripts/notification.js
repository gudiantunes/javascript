const testNotification = () => {
    const notification = new Notification('JavasScript Notificarion API', {
        body : 'This is a JS Notification Demo',
        icon : './img/js.png',
        vibrate : true
    });

    setTimeout(() => {
        notification.close();
    }, 10 * 1000);

    // notification.addEventListener('click', () => {
    //     window.open(window)
    // });
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
        testNotification();
    }
}

export { requestPermission, showTestNotification };
