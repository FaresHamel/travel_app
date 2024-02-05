import { Stack } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import images from "../constants/images";
import { COLORS, SIZES } from "../constants/thems";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();
const redirecturi = AuthSession.makeRedirectUri();

const index = () => {
 
  const router = useRouter();
  // const discovery = AuthSession.useAutoDiscovery("");
  const discovery = AuthSession.useAutoDiscovery("https://mail.google.com/mail/u/0/");

  const [request, response, promptAync] = AuthSession.useAuthRequest({
    clientId:
      "593268558631-g1lnkr0r31gufqafuff1584qsi7bnakh.apps.googleusercontent.com ",
    redirecturi,
    scopes:['email','profile','image']
    
  },
    discovery
  );

  // const discovery = AuthSession.useAutoDiscovery(
  //   "https://www.google.com/search"
  // );
  // const [request, response, promptAsync] = AuthSession.useAuthRequest();

  // const opernWebBroser = async () => {
  //   https://mail.google.com/mail/u/0/
  //   const result = await WebBrowser.openBrowserAsync("https://www.google.co/");
  //   console.log(result);

  // }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={styles.stack} />
      <ImageBackground
        source={images.welcome}
        resizeMode="cover"
        style={styles.imgBackground}
      >
        <View style={styles.contentBox}>
          <View style={{ justifyContent: "space-between", width: "80%" }}>
            <Text style={styles.textHeader}>Get ready for next trip</Text>
            <Text style={styles.textInfo}>
              Find thousands of tourist destination ready for you to visit
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btnsignup}
            onPress={() => router.push("./signup/signup")}
          >
            <Text style={{ color: COLORS.tertiary }}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnsignin}
            onPress={() => router.push("./signin/signin")}
            // onPress={promptAync}
            // onPress={promptAsync}
          >
            <Text style={{ color: COLORS.lightWhite }}>Login In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar backgroundColor={"transparent"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  stack: {
    title: "",
    headerShow: false,
    headerShadowVisible: false,
    headerShown: false
  },
  imgBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 70
  },
  contentBox: {
    width: "70%",
    height: 250,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  textHeader: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.xxLarge,
    textAlign: "left",
    marginBottom: 10
  },
  textInfo: {
    fontSize: SIZES.small,
    color: COLORS.gray2,
    width: "90%",
    lineHeight: 20
  },
  btnsignup: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  btnsignin: {
    backgroundColor: COLORS.tertiary,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});

export default index;
