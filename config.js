import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARbZEG1YOJlVAelcyZaLSXWxoVMQK3JeQ",
  authDomain: "storytelling-app-e4aa6.firebaseapp.com",
  databaseURL: "https://storytelling-app-e4aa6-default-rtdb.firebaseio.com",
  projectId: "storytelling-app-e4aa6",
  storageBucket: "storytelling-app-e4aa6.appspot.com",
  messagingSenderId: "863880083063",
  appId: "1:863880083063:web:adcbbbf6a9a8940959f872"
};
if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig)

export default firebase.database();