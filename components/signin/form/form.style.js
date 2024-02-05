import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/thems";

const styles = StyleSheet.create({
  containerForm: {
    height: 350,
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    backgroundColor: COLORS.lightWhite,
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    padding: SIZES.small
  },
  inpputWrapper: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    padding: 7,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: COLORS.gray2,
    borderWidth: 1,
    paddingLeft: 30,
    textTransform: "lowercase"
  },
  errorMessage: {
    color: COLORS.tertiary,
    marginLeft: 10
  },
  submitBtn: {
    backgroundColor: COLORS.tertiary,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});

export default styles;