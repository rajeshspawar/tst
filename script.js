let deferredPrompt;
const installBtn = document.createElement('button');
installBtn.textContent = 'Install RajApp';
installBtn.style.display = 'none';
document.body.appendChild(installBtn);

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';
});

installBtn.addEventListener('click', () => {
  installBtn.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') {
      console.log('User installed the app');
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt = null;
  });
});
