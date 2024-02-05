import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./newarticle.style";
import { useRouter } from "expo-router";

const NewArticle = ({ item }) => {

  const router = useRouter();

  const handlePress = () => {
   router.push(`../details/${item.id}`);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} >
      <ImageBackground
        source={item.url_image}
        resizeMode="cover"
        style={styles.imgBckground}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.locationText}>{item.location}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <View>
              <Text style={{ fontSize: 13 }}> Rating: {item.review}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 13 }}>{item.price}$</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default NewArticle;
