import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-MLAv1iiacU4Koc34EhxS8k8JzBo10YA",
  authDomain: "whatsapp-web-app-82478.firebaseapp.com",
  databaseURL: "https://whatsapp-web-app-82478.firebaseio.com",
  projectId: "whatsapp-web-app-82478",
  storageBucket: "whatsapp-web-app-82478.appspot.com",
  messagingSenderId: "307528501608",
  appId: "1:307528501608:web:88a8dac953a6d1d314aedd",
  measurementId: "G-9JB5HBJVZ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
