

// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDsSYn7CFlt2KiDCFPUmISUvtNgkV3qU2Y",
    authDomain: "rrewards-4fa56.firebaseapp.com",
    projectId: "rrewards-4fa56",
    storageBucket: "rrewards-4fa56.appspot.com",
    messagingSenderId: "360752236436",
    appId: "1:360752236436:web:9afc9edd966e8d4ec27181",
    measurementId: "G-LTL2WRRER2"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
      const messaging = firebase.messaging();
      messaging.useServiceWorker(registration);
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
}
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message KD_--------', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // Close the notification
  console.log('Received notificationclick message KD_--------', event);

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      // Check if the URL is already open and focus it
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url === event.notification.data.url && 'focus' in client) {
          return client.focus();
        }
      }
      // If the URL is not open, open a new window
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
    })
  );
});

// importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// firebase.initializeApp({
//     // apiKey: "AIzaSyAhb8Lsuf6P01mE9zmqrp1MZqFgPuCsfro",
//     // authDomain: "autolync-d9505.firebaseapp.com",
//     // projectId: "autolync-d9505",
//     // storageBucket: "autolync-d9505.appspot.com",
//     // messagingSenderId: "697729106051",
//     // appId: "1:697729106051:web:fcf3a0179e5191f87a9bb6",
//     apiKey: "AIzaSyDsSYn7CFlt2KiDCFPUmISUvtNgkV3qU2Y",
//     authDomain: "rrewards-4fa56.firebaseapp.com",
//     projectId: "rrewards-4fa56",
//     storageBucket: "rrewards-4fa56.appspot.com",
//     messagingSenderId: "360752236436",
//     appId: "1:360752236436:web:9afc9edd966e8d4ec27181",
//     measurementId: "G-LTL2WRRER2"

    
// });
//Old FCM
// firebase.initializeApp({
//     apiKey: "AIzaSyBmVjstfKv4TaDcqCc7axKmontUPRJvY5Q",
//     authDomain: "aft-pms.firebaseapp.com",
//     databaseURL: "https://aft-pms.firebaseio.com",
//     projectId: "aft-pms",
//     storageBucket: "aft-pms.appspot.com",
//     messagingSenderId: "1021012108805",
//     appId: "1:1021012108805:web:2798585d73aa620db75e6c"
// });
// var firebaseConfig = {
//     apiKey: "AIzaSyAhb8Lsuf6P01mE9zmqrp1MZqFgPuCsfro",
//     authDomain: "autolync-d9505.firebaseapp.com",
//     projectId: "autolync-d9505",
//     storageBucket: "autolync-d9505.appspot.com",
//     messagingSenderId: "697729106051",
//     appId: "1:697729106051:web:fcf3a0179e5191f87a9bb6",
//     measurementId: "G-00B2HJ9X0T"
//   };

// (function() {
//         'use strict';

//         self.addEventListener('notificationclick', (event) => {
           
//             // Write the code to open//&& event.notification.data.url
//             if (clients.openWindow) {
//                 event.waitUntil(clients.openWindow('')); //chnage this to notification data when url is pass in notification

//             }
//         });
//     }
//     ());
// const messaging = firebase.messaging();
// // Handle incoming FCM messages
// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log('Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/firebase-logo.png'
//     };

//     return self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });

// self.addEventListener('notificationclick', (event) => {
//     event.notification.close();
//     console.log('Received background message ', event);

//     const urlToOpen = new URL('/', self.location.origin).href;

//     event.waitUntil(clients.matchAll({
//         type: 'window'
//     }).then((windowClients) => {
//         // Check if there is already a window/tab open with the same URL
//         for (let i = 0; i < windowClients.length; i++) {
//             const client = windowClients[i];
//             if (client.url === urlToOpen && 'focus' in client) {
//                 return client.focus();
//             }
//         }

//         // If not, open a new window/tab
//         if (clients.openWindow) {
//             return clients.openWindow(urlToOpen);
//         }
//     }));
// });
// Handle incoming messages
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
// });
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// self.addEventListener('notificationclick', function (event) {

//   event.notification.close();
//   event.waitUntil(clients.openWindow(event.notification.data.url));
//   const url = "https://google.com";
//   window.open(url, '_blank');
//   // switch (event.action) {
//   //   case 'open_url':
//   //     window.open(event.notification.data.url);
//   //     break;
//   //   case 'any_other_action':
//   //     window.open(event.notification.data.url);
//   //     break;
//   // }
// }, false);