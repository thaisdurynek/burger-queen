// import firebase from './firebaseConfig.js';

// const authState = (obj) => {
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           firebase.firestore.collection('usuario').add(obj)
//           .then(() => {
//             if(role === ' Atendimento'){
//               history.push('/salao')
//             } else {
//               history.push('/cozinha')
//             }
//           })
//         }
//       });
// }

export default authState;