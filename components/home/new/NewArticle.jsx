import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./newarticle.style";
import images from "../../../constants/images";
import NewArticleComponent from "../../common/cards/new/NewArticle";

const newArticlData = [
  {
    id: "7",
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
    url_image: images.anew
  },
  {
    id: "8",
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
    url_image: images.bnew
  },
  {
    id: "9",
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
    url_image: images.cnew
  },
  {
    id: "10",
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
    url_image: images.ShangriLaTheShardLondon
  }
];

const NewArticle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New article</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {newArticlData.map((item) => {
          return (
            <View style={{ marginTop: 20 }} key={item.id} >
              <NewArticleComponent item={item} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default NewArticle;
