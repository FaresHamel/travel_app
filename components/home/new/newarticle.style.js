import { StyleSheet } from "react-native";
import { SIZES,COLORS } from "../../../constants/thems";

const styles = StyleSheet.create({
  container: {
    marginTop: 40
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
  cardsContainer: {
    marginTop: SIZES.medium
  }
});
export default styles;