import { View, Text, SafeAreaView, ImageBackground, StatusBar, ScrollView } from "react-native";
import { Stack, useLocalSearchParams,useRouter } from "expo-router";
import { COLORS } from "../../constants/thems";
import images from "../../constants/images";
import icons from "../../constants/icons";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import Header from "../../components/itemDetails/header/header";
import Body from "../../components/itemDetails/body/Body";
import Footer from "../../components/itemDetails/footer/Footer";

const hotels = [
  {
    id: "0",
    name: "Alila Kothaifaru Maldives",
    location: "Kothaifaru Island, Maldives",
    review: "4.5",
    number_review: "2k",
    description:
      "Unwind in peaceful seclusion with awe-inspiring views at this all-pool-villa sanctuary. Our 11.2 hectare private island retreat lies at the northern edge of the Maldives in Raa Atoll, accessible via a scenic 45-minute seaplane journey from Malé. Lush vegetation, turquoise waters and abundant marine life set the scene for a relaxing stay interspersed with adventure.",
    sunny: "20",
    direction: "200",
    price: "$765",
    link: "https://www.alilahotels.com/kothaifaru-maldives/",
    url_image: images.AlilaKothaifaruMaldives
  },
  {
    id: "2",
    name: "Shangri LaThe ShardLondon",
    location: "London",
    review: "4.7",
    number_review: "1.5k",
    description:
      "Unwind in peaceful seclusion with awe-inspiring views at this all-pool-villa sanctuary. Our 11.2 hectare private island retreat lies at the northern edge of the Maldives in Raa Atoll, accessible via a scenic 45-minute seaplane journey from Malé. Lush vegetation, turquoise waters and abundant marine life set the scene for a relaxing stay interspersed with adventure.",
    sunny: "20",
    direction: "200",
    price: "$765",
    link: "https://www.alilahotels.com/kothaifaru-maldives/",
    url_image: images.ShangriLaTheShardLondon
  },
  {
    id: "3",
    name: "Capella Ubud",
    location: "Bali",
    review: "4.9",
    number_review: "2.5k",
    description:
      "Breakfast served at Mads LangeHigh-speed Wi-Fi access Complimentary refreshment trunk with soft drinks and local alcoholic beverages - replenished daily Welcome duffel bag containing camp essentials upon arrival 24 hour service of a Capella Culturist Daily seasonal fruit and infused spring water Daily camp turndown ritual Illy espresso machine and tea-making facilities",
    sunny: "20",
    direction: "200",
    price: "$765",
    link: "https://capellahotels.com/en/capella-ubud/offers/advance-purchase?gclid=CjwKCAjwpJWoBhA8EiwAHZFzflfFLM8ijkdSGmhuFBcO7Xzn1f8nwj-f6ca2IdYXy-joPeVZIeNVfRoCQOMQAvD_BwE",
    url_image: images.CapellaUbudBali
  },
  {
    id: "1",
    name: "Atlantis Paradise Island Bahamas",
    location: "Nassau",
    review: "4.3",
    number_review: "1.3k",
    description:
      "Atlantis, Paradise Island - the most popular resort destination in The Bahamas - features the world's largest open-air marine habitat; Aquaventure water park, including the iconic Mayan Temple's Leap of Faith slider; 11 unique pools; renowned beaches; 18-hole golf course; the largest casino in the Caribbean; over 21 restaurants, 19 bars & lounges and Aura nightclub. Atlantis also offers a multitude of unique accommodations, including the iconic Royal Towers and the stylish Cove Atlantis.",
    sunny: "30",
    direction: "150",
    price: "525",
    link: "https://www.bahamas.com/hotels/atlantis?gclid=CjwKCAjwpJWoBhA8EiwAHZFzflkz_D0UjG0e8DAS4KBkrp1yzcvqi-92C8nkYSoNVuM0p08O2eySYxoC1qwQAvD_BwE",
    url_image: images.AtlantisParadiseIslandBahamas
  },
  {
    id: "5",
    name: "Belmond Hotel Splendido",
    location: "Kothaifaru Island, Maldives",
    review: "4.7",
    number_review: "2.7k",
    description:
      "Splendido is one of the most enchanting hotels in Portofino. Gaze across the rugged coastline, enjoying prime position above the bay. Delve into the spirit of irresistible glamour at the finest of all Italy resorts as you embrace all that's best about the Ligurian Riviera. Experience Italian dining at its best.",
    sunny: "25",
    direction: "250",
    price: "500",
    link: "https://www.belmond.com/hotels/europe/italy/portofino/belmond-hotel-splendido/about",
    url_image: images.BelmondHotelSplendido
  },
  {
    id: "7",
    name: "Alila Kothaifaru Maldives",
    location: "Kothaifaru Island, Maldives",
    review: "4.4",
    number_review: "2.4k",
    description:
      "Unwind in peaceful seclusion with awe-inspiring views at this all-pool-villa sanctuary. Our 11.2 hectare private island retreat lies at the northern edge of the Maldives in Raa Atoll, accessible via a scenic 45-minute seaplane journey from Malé. Lush vegetation, turquoise waters and abundant marine life set the scene for a relaxing stay interspersed with adventure.",
    sunny: "20",
    direction: "200",
    price: "$765",
    link: "https://www.alilahotels.com/kothaifaru-maldives/",
    url_image: images.anew
  },
  {
    id: "8",
    name: "Shangri LaThe ShardLondon",
    location: "London",
    review: "4.6",
    number_review: "2.6k",
    description:
      "Unwind in peaceful seclusion with awe-inspiring views at this all-pool-villa sanctuary. Our 11.2 hectare private island retreat lies at the northern edge of the Maldives in Raa Atoll, accessible via a scenic 45-minute seaplane journey from Malé. Lush vegetation, turquoise waters and abundant marine life set the scene for a relaxing stay interspersed with adventure.",
    sunny: "20",
    direction: "200",
    price: "$765",
    link: "https://www.alilahotels.com/kothaifaru-maldives/",
    url_image: images.bnew
  },
  {
    id: "9",
    name: "Capella Ubud",
    location: "Bali",
    review: "4.2",
    number_review: "1k",
    description:
      "Breakfast served at Mads LangeHigh-speed Wi-Fi access Complimentary refreshment trunk with soft drinks and local alcoholic beverages - replenished daily Welcome duffel bag containing camp essentials upon arrival 24 hour service of a Capella Culturist Daily seasonal fruit and infused spring water Daily camp turndown ritual Illy espresso machine and tea-making facilities",
    sunny: "20",
    direction: "200",
    price: "$765",
    link: "https://capellahotels.com/en/capella-ubud/offers/advance-purchase?gclid=CjwKCAjwpJWoBhA8EiwAHZFzflfFLM8ijkdSGmhuFBcO7Xzn1f8nwj-f6ca2IdYXy-joPeVZIeNVfRoCQOMQAvD_BwE",
    url_image: images.cnew
  },
  {
    id: "10",
    name: "Atlantis Paradise Island Bahamas",
    location: "Nassau",
    review: "4.1",
    number_review: "1.1k",
    description:
      "Atlantis, Paradise Island - the most popular resort destination in The Bahamas - features the world's largest open-air marine habitat; Aquaventure water park, including the iconic Mayan Temple's Leap of Faith slider; 11 unique pools; renowned beaches; 18-hole golf course; the largest casino in the Caribbean; over 21 restaurants, 19 bars & lounges and Aura nightclub. Atlantis also offers a multitude of unique accommodations, including the iconic Royal Towers and the stylish Cove Atlantis.",
    sunny: "30",
    direction: "150",
    price: "525",
    link: "https://www.bahamas.com/hotels/atlantis?gclid=CjwKCAjwpJWoBhA8EiwAHZFzflkz_D0UjG0e8DAS4KBkrp1yzcvqi-92C8nkYSoNVuM0p08O2eySYxoC1qwQAvD_BwE",
    url_image: images.ShangriLaTheShardLondon
  }
];

const details = () => {

  const params = useLocalSearchParams();

  const hotel = hotels.find((item) => item.id == params.id);

  const router = useRouter()

  const handlePress = () => {
    router.back();
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        overflow: "hidden"
      }}
    >
      <Stack.Screen
        options={{
          title: "",
          headerBackVisible: false,
          headerShown: false
        }}
      />
      <View style={{ width: "100%", height: 400 }}>
        <ImageBackground
          source={hotel.url_image}
          style={{
            width: "100%",
            height: "100%"
          }}
          resizeMode="cover"
        >
          <View style={{ marginTop: 40,paddingHorizontal:20 ,flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-between"}}>
            <ScreenHeaderBtn
              handlePress={handlePress}
              dimention="50%"
              iconUrl={icons.left}
            />
            <ScreenHeaderBtn
              handlePress={handlePress}
              dimention="50%"
              iconUrl={icons.heart}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{padding:20}} >
        <Header name={hotel.name} location={hotel.location} rating={hotel.review} numreview={hotel.number_review} />
        <Body description={hotel.description} /> 
        <Footer link={hotel.link} price={hotel.price} />
      </View>
      <StatusBar barStyle="light-content"/>
    </SafeAreaView>
  );
};

export default details;
