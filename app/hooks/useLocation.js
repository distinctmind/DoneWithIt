import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      //Get user's permission to get location
      let { status } = await Location.requestForegroundPermissionsAsync();

      //If we get permission, get the location (lat, lon)
      if (status === "granted") {
        let {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
        //User did not give us permission
      } else {
        console.log("location permission denied");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return location;
};
