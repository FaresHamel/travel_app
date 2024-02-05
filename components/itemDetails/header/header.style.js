import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contianer: { width: "100%" },
  textName: { fontSize: 20, fontWeight: "900" },
  containerLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  textLocation: { fontSize: 13, fontWeight: "400" },
  containerInformation: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10
  }
});

export default styles;