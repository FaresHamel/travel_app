import auth from "../connection/db";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider} from "firebase/auth";

const Singup = async (values) => {

  const provider = new GoogleAuthProvider();

  const email = values.email;
  const password = values.password;

  var result;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      result = true;
    })
    .catch((error) => {
      result = error.code;
    });

     

  return result;
};

export default Singup;
