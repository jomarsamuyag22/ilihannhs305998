import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

window.register = async function() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const user = await createUserWithEmailAndPassword(auth, email, pass);

  await setDoc(doc(db, "users", user.user.uid), {
    email: email,
    role: role
  });

  alert("Registered!");
}

window.login = async function() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, pass);
  alert("Login Success!");
}