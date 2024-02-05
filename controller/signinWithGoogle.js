import auth from "../connection/db";
import { signInWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";

const siginWithGoogle = async (values) => {
  const email = values.email;
  const password = values.password;

  var result;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const uerIdTo = userCredential.user.getIdToken().then((idTo) => {
      //   storeData(idTo);
      // });
      result = true;
    })
    .catch((error) => {
      result = error.code;
    });

  return result;
};

export default siginWithGoogle;
