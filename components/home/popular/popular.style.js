import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/thems";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary
  },
  headerBtn: {
    fontSize: SIZES.medium,
    color: COLORS.gray
  },
    cardsContainer:{
      marginTop:SIZES.medium
  }
});

export default styles;