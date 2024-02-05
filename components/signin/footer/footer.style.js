import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../../constants/thems";

const styles = StyleSheet.create({
  btnlink: {
    flexDirection: "row",
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: COLORS.gray2,
    borderWidth: 1
  },
  footer: {
    // marginTop:50,
    height: 100,
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    justifyContent: "space-around",
    padding: SIZES.small
  }
});

export default styles;