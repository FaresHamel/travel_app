import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants/thems";
import { Formik } from "formik";
import * as Yup from "yup";
import signup from "../../../controller/signup";

import styles from "./form.style";
import { useRouter } from "expo-router";

const singInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalide email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
});

const Form = () => {

  const router = useRouter();

  const signInHandle = async (values) => {
    try {
      const resul = await signup(values);

      if (resul == true) {
        setTimeout(() => {
           router.replace("../home/Home");
           console.log("welcome")
        }, 1000);
      } else {
        if (resul == "auth/user-not-found") {
          alert("you need to create account this user is not existe");
        }
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <View style={styles.containerForm}>
      <View style={{ width: "100%", height: "100%" }}>
        <Formik
          initialValues={{email: "", password: "" }}
          validationSchema={singInSchema}
          onSubmit={(values = (values) => {})}
        >
          {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
            <View style={styles.inputContainer}>
              
              <View style={{ backgroundColor: COLORS.lightWhite }}>
                <Text>Your email address</Text>
                <TextInput
                  nativeID="email"
                  textContentType="emailAddress"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="traveling@gmail.com"
                  style={styles.inpputWrapper}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                />
                {errors.email ? (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                ) : null}
              </View>
              <View>
                <Text>Choose a password</Text>
                <View>
                  <TextInput
                    nativeID="password"
                    textContentType="password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="min8. charchters"
                    style={styles.inpputWrapper}
                    textContentType="password"
                    secureTextEntry={true}
                  />
                  {errors.password ? (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  ) : null}
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  handleSubmit(values);
                  {
                    values.email && values.password
                      ? signInHandle(values)
                      : null;
                  }
                }}
                style={styles.submitBtn}
              >
                <Text style={{ color: COLORS.lightWhite }}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Form;
