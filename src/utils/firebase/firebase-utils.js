import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAVGRhJ9mF-JFnBHUNWd6g1qpmsbBX9fM",
  authDomain: "salah-eshop.firebaseapp.com",
  projectId: "salah-eshop",
  storageBucket: "salah-eshop.appspot.com",
  messagingSenderId: "887829239104",
  appId: "1:887829239104:web:efd62aaaa6bcd7602756a5"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup= () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocument = async(userAuth, otherInformation) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...otherInformation
      });
    } catch (err) {
      console.log('there was an issue', err.message);
    }
  }
  return userDocRef;
};


export const createAuthUser = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUser = async(email, password) => {
  if (!email || !password) return;
  
  return await signInWithEmailAndPassword(auth, email, password);
}