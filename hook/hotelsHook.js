import { useEffect,useState } from "react";
import axios from "axios";

const hotelsHook = () => {
 
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

 const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/hotels/list",
    params: {
      location_id: "293919",
      adults: "1",
      rooms: "1",
      nights: "2",
      offset: "0",
      currency: "USD",
      order: "asc",
      limit: "30",
      sort: "recommended",
      lang: "en_US"
    },
    headers: {
      "X-RapidAPI-Key": "05e9284f43msh760d12ccb1f882cp1d6f38jsna81cd7199ad5",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
    }
  };

    const fetchData = async () => {
        setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // console.log(data)
        setIsLoading(false);
    } catch (error) {
        setError(error);
        alert(error);
    } finally {
      setIsLoading(false); 
    }
    };
    
    useEffect(() => {
      fetchData();
      //  data.map((item, id) => console.log(item?.photo?.images?.medium?.url));
    }, []);

  return { data, error, isLoading};
}

export default hotelsHook;