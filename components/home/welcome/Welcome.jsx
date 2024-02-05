import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import styles from "./welcome.style";
import images from "../../../constants/images";
import { SIZES } from "../../../constants/thems";
import { useRouter } from "expo-router";
import { useState } from "react";

const categories = ["Hotels", "Restaurant", "attractions", "flights"];

const Welcome = () => {
  const router = useRouter();
  const [activeCountry, setActiveCountry] = useState("Hotels");
  const [searchTerm, setSearchTerm] = useState("");
 
  const handleSearchItem = () => {
    if (searchTerm) {
       router.push(`/search/${searchTerm}`)
    } else {
      alert("pelase enter search item")
    }
   
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.username}>Hello,Fares</Text>
        <Text style={styles.welcomeMessage}>Where you wanna go ?</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="where do you wanna go ?"
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearchItem}>
          <Image
            source={images.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={categories}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tabs(activeCountry, item)}
              onPress={() => {
                setActiveCountry(item);
                router.push(`../search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeCountry, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Welcome;
