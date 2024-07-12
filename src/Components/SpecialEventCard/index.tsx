import React from "react";
import { View, Text, Image } from "react-native";
import { specialEvent1 } from "../../../assets/images";
import styles from "./styles";

const SpecialEventCard = () => {
  return (
    <View style={styles.specialEventContainer}>
      <Text style={styles.specialEventSubtitle}>FREE</Text>
      <Text style={styles.specialEventTitle}>Special Event</Text>
      <Image source={specialEvent1} style={styles.eventImage} />
    </View>
  );
};

export default SpecialEventCard;
