import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { db } from "../utils/firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";
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
    const payload = {userProfile};

    await setDoc(docRef,payload);
    sendEmailVerification(auth.currentUser);

    return { isAuth: true, user: userProfile };
  } catch (error) {
    return { error: error.message };
  }
};
