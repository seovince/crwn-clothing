import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const config = {
    apiKey: "AIzaSyBdG_xKfg3GRg_i9bsE5mamXSwR5H8UnnE",
    authDomain: "crwn-db-8f0bb.firebaseapp.com",
    projectId: "crwn-db-8f0bb",
    storageBucket: "crwn-db-8f0bb.appspot.com",
    messagingSenderId: "157580477593",
    appId: "1:157580477593:web:462ca826f88c9042236408",
    measurementId: "G-8FSQJP0V30"
};

firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`);

    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;