import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/thems";

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  username: {
    color: COLORS.gray
  },
  welcomeMessage: {
    color: COLORS.primary,
    fontSize: SIZES.xxLarge,
    width: "70%",
    fontWeight: "600",
    marginTop: 10
  },
  searchContainer: {
    flexDirection: "row",
    height: 50,

    justifyContent: "space-between",
    marginTop: SIZES.large,
    alignItems: "center"
  },
  searchWrapper: {
    backgroundColor: COLORS.white,
    flex: 1,
    height: "100%",
    marginRight: SIZES.small,
    borderRadius: SIZES.medium,
    alignItems: "center",
    justifyContent: "center"
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium
  },
  searchBtn: {
    backgroundColor: COLORS.tertiary,
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    alignItems: "center",
    justifyContent: "center"
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.lightWhite
  },
  tabsContainer: {
    width: "100%",
    backgroundColor: COLORS.lightWhite,
    marginTop: SIZES.medium
  },
  tabs: (activeCounrty, item) => ({
    backgroundColor: activeCounrty === item ? COLORS.tertiary : COLORS.white,
    padding: SIZES.small / 2,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeCounrty === item ? COLORS.tertiary : COLORS.gray2
  }),
  tabText: (activeCounrty, item) => ({
    color: activeCounrty === item ? COLORS.white : COLORS.gray2
  })
});

export default styles;
