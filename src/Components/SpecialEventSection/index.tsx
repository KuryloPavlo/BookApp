import React from "react";
import { ScrollView } from "react-native";
import SpecialEventCard from "../SpecialEventCard";

const SpecialEventSection = () => {
  return (
    <ScrollView horizontal>
      <SpecialEventCard />
      <SpecialEventCard />
      <SpecialEventCard />
    </ScrollView>
  );
};

export default SpecialEventSection;
