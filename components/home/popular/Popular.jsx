import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./popular.style";
import Popularcards from "../../common/cards/popular/Popularcards";
import { SIZES } from "../../../constants/thems";
import images from "../../../constants/images";

const hotels = [
  {
    id: "0",
    name: "Alila Kothaifaru Maldives",
    location: "Kothaifaru Island, Maldives",
    review: "4.7",
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
    number_review: "2k",
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
    review: "4.7",
    number_review: "2k",
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
    review: "4.4",
    number_review: "1.5k",
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
    number_review: "2k",
    description:
      "Splendido is one of the most enchanting hotels in Portofino. Gaze across the rugged coastline, enjoying prime position above the bay. Delve into the spirit of irresistible glamour at the finest of all Italy resorts as you embrace all that's best about the Ligurian Riviera. Experience Italian dining at its best.",
    sunny: "25",
    direction: "250",
    price: "500",
    link: "https://www.belmond.com/hotels/europe/italy/portofino/belmond-hotel-splendido/about",
    url_image: images.BelmondHotelSplendido
  }
];

const Popular = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pupular</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          data={hotels}
          horizontal
          renderItem={({ item }) => (
            <Popularcards item={item}/>
          )}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Popular;
