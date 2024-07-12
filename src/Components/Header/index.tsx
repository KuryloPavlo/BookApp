import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { arrowLeft, cross } from "../../../assets/images";
import { CommonActions, useNavigation } from "@react-navigation/native";

const Header = ({
  title,
  onArrowPress,
}: {
  title: string;
  onArrowPress: () => void;
}) => {
  const navigation = useNavigation();

  const onCrossPress = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Discover" }],
      })
    );
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onArrowPress} hitSlop={20}>
        <Image source={arrowLeft} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity onPress={onCrossPress} hitSlop={20}>
        <Image source={cross} style={styles.headerImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
