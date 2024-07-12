import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./styles";

const FORMAT_SIZE = 3;

const SeriesSection = ({ data }: { data: BookI[] | null }) => {
  const formatedData = () => {
    if (data) {
      const result = [];
      for (let i = 0; i < data?.length; i += FORMAT_SIZE) {
        result.push(data?.slice(i, i + FORMAT_SIZE));
      }
      return result;
    }
    return [];
  };

  return (
    <View style={styles.seriesSection}>
      <Text style={styles.sectionTitle}>Top Series</Text>
      <FlatList
        data={formatedData()}
        horizontal
        renderItem={({ item, index }) => (
          <View key={index} style={{ marginHorizontal: 8 }}>
            <FlatList
              data={item}
              scrollEnabled={false}
              renderItem={({ item: book, index: bookIndex }) => (
                <View key={bookIndex} style={styles.seriesContainer}>
                  <Image
                    source={{ uri: book.cover }}
                    style={styles.seriesImage}
                  />
                  <Text style={styles.seriesRank}>{book.id}</Text>
                  <View>
                    <Text>{book.genre}</Text>
                    <Text style={styles.seriesTitle}>{book.bookName}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

export default SeriesSection;
