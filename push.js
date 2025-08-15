function subscribeToPush() {
  navigator.serviceWorker.ready.then(registration => {
    return registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: '<Your-VAPID-Public-Key>'
    });
  }).then(subscription => {
    console.log('Push subscription:', JSON.stringify(subscription));
    // Send this subscription to your server
  }).catch(err => console.error('Push subscription failed:', err));
}
