import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { arrowRight } from "../../../assets/images";

const CategorySection = ({
  title,
  books,
  onItemPress,
}: {
  title: string;
  books: BookI[] | null;
  onItemPress: (item: BookI) => void;
}) => {
  return (
    <View style={styles.categorySection}>
      <View style={styles.categoryTitleContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Image source={arrowRight} style={styles.arrowImage} />
      </View>

      <FlatList
        horizontal
        data={books}
        style={{ flex: 1 }}
        renderItem={({ item, index }: { item: BookI; index: number }) => (
          <TouchableOpacity
            key={index}
            style={styles.bookContainer}
            onPress={() => onItemPress(item)}
          >
            <Image source={{ uri: item.cover }} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{item.bookName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategorySection;
