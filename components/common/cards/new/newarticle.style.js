import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 20
  },
  imgBckground: {
    width: "100%",
    height: 290,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20
  },
  infoContainer: {
    backgroundColor: "white",
    height: 80,
    width: "80%",
    opacity: 0.7,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 6,
    paddingVertical: 6
  },
  nameText: {
    width: "100%",
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },
  locationText: { width: "100%", fontSize: 13, fontWeight: "300" }
});

export default styles;
