import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/thems";

const styles = StyleSheet.create({
  btnContainer: {
    width: 35,
    height: 35,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.2,
    justifyContent: "center",
    alignItems: "center"
  },
  btnImg: (dimention) => ({
    width: dimention,
    height: dimention,
    borderRadius: SIZES.small / 1.2
  })
});

export default styles;
