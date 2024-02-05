import { TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ handlePress, dimention, iconUrl }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimention)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;