import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/thems";

const styles = StyleSheet.create({
  container: {
    borderRadius: 20, // Adjust the value to change the amount of rounding
    overflow: "hidden", // Clip the contents to the rounded border
    width: 250,
    height: 250
  },
  imageBackground: {
    width: 250, // Adjust the width and height as needed
    height: 250,
    justifyContent: "flex-end", // Center content within the rounded border
    alignItems: "flex-start",
    paddingVertical: 20,
    paddingHorizontal:10
  },
  textName: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    marginBottom: SIZES.xSmall,
    fontWeight:"bold"
  },
  textLocalisation: {
    color: COLORS.lightWhite,
    fontSize: SIZES.small,
    fontWeight:"bold"
  },
  locationImg: {
    width: SIZES.medium,
    height: SIZES.medium,
    tintColor: COLORS.white,
    marginRight: 6,
  }
});

export default styles;
