import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../../constants/thems";

const Body = ({ description }) => {
  return (
    <View style={{ width: "100%" ,marginTop:15}}>
          <Text style={{ fontSize: SIZES.small, color: COLORS.gray2, fontWeight: "600", lineHeight: 17 }} >{description}</Text>
    </View>
  );
};

export default Body