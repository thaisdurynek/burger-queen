//import firebase from './firebaseConfig.js';

// const x = (props) => {
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           firebase.firestore.collection("users").add({
//             first: "Ada",
//             last: "Lovelace",
//             born: 1815
//         })
//         .then(function(docRef) {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch(function(error) {
//             console.error("Error adding document: ", error);
//         });
//           var displayName = user.displayName;
//           var email = user.email;
//           var emailVerified = user.emailVerified;
//           var photoURL = user.photoURL;
//           var isAnonymous = user.isAnonymous;
//           var uid = user.uid;
//           var providerData = user.providerData;
//         } else {
//         }
//       });
// }