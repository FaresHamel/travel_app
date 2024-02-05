import { View, Text, Image } from "react-native";
import icons from "../../../constants/icons";
import styles from "./header.style";

const header = ({ name, location, rating, numreview }) => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.textName}>{name}</Text>
      <View style={styles.containerLocation}>
        <Image
          source={icons.location}
          style={{ width: 15, height: 15, marginRight: 7 }}
          resizeMode="cover"
        />
        <Text style={styles.textLocation}>{location}</Text>
      </View>
      <View style={styles.containerInformation}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Image
            source={icons.star}
            style={{ width: 10, height: 10, marginRight: 7 }}
            resizeMode="cover"
          />
          <Text>{rating}</Text>
        </View>
        <View>
          <Text>{numreview} review</Text>
        </View>
      </View>
    </View>
  );
};

export default header;
