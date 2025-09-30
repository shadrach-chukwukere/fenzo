self.addEventListener("install", () => {
  console.log("✅ Service Worker installed");
  self.skipWaiting();
});
const baseURL = import.meta.env.VITE_API_URL;
self.addEventListener("activate", () => {
  console.log("✅ Service Worker activated");
  return self.clients.claim();
});

// ✅ Listen for messages from the page
self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data) return;

  const options = {
    body: data.message,
    icon: data.icon,
    image: data.image || undefined,
    data: { lead: data.lead }, // keep extra info for clicks
    actions: (data.lead || []).map((btn, i) => ({
      action: `action-${i}`,
      title: btn.label || `Action ${i + 1}`,
      icon: baseURL + btn.icon,
    })),
  };

  self.registration.showNotification(data.title || "New Notification", options);
});

// ✅ Handle notification click
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  // If action button clicked
  if (event.action.startsWith("action-")) {
    const index = parseInt(event.action.split("-")[1], 10);
    const lead = event.notification.data.lead;
    if (lead && lead[index]?.url) {
      event.waitUntil(clients.openWindow(lead[index].url));
    }
    return;
  }

  // Default → open root page
  event.waitUntil(clients.openWindow("/"));
});
