import { Link } from "expo-router";
import { View, Text, TouchableOpacity,Linking } from "react-native";
import { COLORS, SIZES } from "../../../constants/thems";

const Footer = ({ link, price }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: COLORS.lightWhite,
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "baseline"
      }}
    >
      <Text style={{ fontSize: SIZES.medium, color: COLORS.gray2 }}>
        {price}$
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.tertiary,
          width: "50%",
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10
        }}
        onPress={() => Linking.openURL(link)}
      >
        <Text style={{color:COLORS.white}} >book now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
