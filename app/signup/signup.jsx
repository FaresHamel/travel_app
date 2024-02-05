import { View, Text, SafeAreaView,ScrollView,Image,StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../../components";
import { COLORS } from "../../constants/thems";
import icons from "../../constants/icons";
import Footer from "../../components/signup/footer/Footer";
import Form from "../../components/signup/form/Form";
import { SIZES } from "../../constants/thems";
import images from "../../constants/images";

const signup = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite
          },
          headerShadowVisible: false,
          title: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimention="60%"
              handlePress={() => router.back()}
            />
          )
        }}
      />

      <ScrollView
        style={{ flex: 1, backgroundColor: COLORS.lightWhite, width: "100%",padding:10 }}
        contentContainerStyle={{
          width: "100%",
          height: "100%",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View style={styles.headerContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <Image
                source={images.logo}
                resizeMode="contain"
                style={styles.logo}
              />
              <Text style={styles.headerTitle}>Traveling</Text>
            </View>
          </View>

          <Form />

          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    justifyContent: "space-around",
    alignItems: "center",
    padding: SIZES.small
  },
  headerContainer: {
    backgroundColor: COLORS.lightWhite,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    width: "60%"
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  headerTitle: {
    color: COLORS.secondary,
    fontSize: SIZES.xLarge,
    fontWeight: "600"
  }
});

export default signup;
