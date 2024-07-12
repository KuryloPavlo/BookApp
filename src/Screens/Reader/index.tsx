import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Header } from "../../Components";
import { RootStackParamList } from "../../Navigation";
import styles from "./styles";

const Reader = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList>>();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const sections = params?.sections;

  const onButtonPress = () => {
    setCurrentSectionIndex(currentSectionIndex + 1);
  };
  const onArrowPress = () => {
    if (currentSectionIndex === 0) {
      goBack();
    } else {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Header
        title={sections[currentSectionIndex].name}
        onArrowPress={onArrowPress}
      />
      <ScrollView style={styles.textContainer}>
        <Text style={styles.text}>{sections[currentSectionIndex].text}</Text>
      </ScrollView>
      {currentSectionIndex !== sections.length - 1 && (
        <Button title="Next Chapter" onButtonPress={onButtonPress} />
      )}
    </View>
  );
};

export default Reader;
