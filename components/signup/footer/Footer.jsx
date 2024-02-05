import { View, Text, TouchableOpacity,Image } from "react-native";
import styles from "./footer.style";
import { COLORS } from "../../../constants/thems";
import icons from "../../../constants/icons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: COLORS.gray }}>other</Text>
      </View>
      <View style={{ height: 100, justifyContent: "space-around" }}>
        <TouchableOpacity style={styles.btnlink}>
          <Image
            source={icons.google}
            resizeMode="cover"
            style={{ width: 20, height: 20, marginRight: 15 }}
          />
          <Text style={{ color: COLORS.secondary }}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnlink}>
          <Image
            source={icons.apple}
            resizeMode="cover"
            style={{ width: 20, height: 20, marginRight: 15 }}
          />
          <Text style={{ color: COLORS.secondary }}>Sign in with Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Footer