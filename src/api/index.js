import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { db } from "../utils/firebase";
import { Timestamp, doc, setDoc, getDoc } from "firebase/firestore";
import { usersCollection } from "../utils/firebase";

export const registerUser = async ({ email, password, name, lastname }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = response;
    const userProfile = {
      uid: user.uid,
      email:email,
      name:name,
      lastname:lastname,
      role: 1,
    };
    const docRef = doc(db, 'users', user.uid);
    const payload = userProfile;

    await setDoc(docRef,payload);
    sendEmailVerification(auth.currentUser);

    return { isAuth: true, user: userProfile };
  } catch (error) {
    return { error: error.message };
  }
};

export const loginUser =  async ({email, password}) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const {user} = response;
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
       
        return {isAuth: true, user: docSnap.data()}
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
    } catch (error) {
      return {error:error.message}
      
    }
    

    }