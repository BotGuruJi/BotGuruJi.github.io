// sw.js
self.addEventListener("install", event => {
  console.log("SW installed ✅");
});

self.addEventListener("activate", event => {
  console.log("SW activated ✅");
});

// frontend se messages receive karke notification dikhana
self.addEventListener("message", event => {
  if (event.data.type === "SHOW_NOTIFICATION") {
    self.registration.showNotification("📩 Admin Reply", {
      body: event.data.message,
      icon: "https://cdn-icons-png.flaticon.com/512/306/306473.png"
    });
  }
});
