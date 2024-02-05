import { View,SafeAreaView, ScrollView, StatusBar } from "react-native";
import {Stack } from "expo-router";
import { COLORS, SIZES } from "../../constants/thems";
import images from "../../constants/images";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import Welcome from "../../components/home/welcome/Welcome";
import Popular from "../../components/home/popular/Popular";
import NewArticle from "../../components/home/new/NewArticle";

const Home = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}} >
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: COLORS.lightWhite
          },
          headerShadowVisible: false,
          headerBackVisible:false,
          headerLeft: () => (
            <ScreenHeaderBtn  iconUrl={images.menu} dimention="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimention="100%" />
          ),
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{flex:1,padding:SIZES.medium}} >
          <Welcome />
          <Popular />
          <NewArticle/>
        </View>
      </ScrollView>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}

export default Home;