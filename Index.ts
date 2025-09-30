// Ask for permission
Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    new Notification("Hello!", {
      body: "You have a new message 🚀",
      icon: "http://localhost:5173/fenzo/src/assets/head.webp"
    });
  }
});


