import styles from "./popularcards.style";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,ActivityIndicator
} from "react-native";
import { useRouter } from "expo-router";
import icons from "../../../../constants/icons";

const Popularcards = ({ item}) => {
 
  const router = useRouter();

    const handlePressItem = () => {
      router.push(`../details/${item.id}`);
    };

  return (
    <TouchableOpacity
      style={styles.container}
      key={item.id}
      onPress={handlePressItem}
    >
      <ImageBackground
        source={item.url_image}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Text style={styles.textName}>{item.name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={icons.location}
            style={styles.locationImg}
            resizeMode="contain"
          />
          <Text style={styles.textLocalisation}>{item.location}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Popularcards;
