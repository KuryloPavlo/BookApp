import React, { useEffect } from "react";
import { ScrollView, View, Image, Text } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchBooks } from "../../Redux/slices/bookSlice";
import { AppDispatch } from "../../Redux/store";
import {
  CategorySection,
  SeriesSection,
  SpecialEventSection,
} from "../../Components";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation";

const Discover = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector(
    ({ books }: { books: initialBookStateI }) => books.books
  );
  const genres = useSelector(
    ({ books }: { books: initialBookStateI }) => books.availableGenres
  );

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const getBooksByGenre = (genre: string) => {
    return books && books.filter((book: BookI) => book.genre === genre);
  };

  const onBookPress = (book: BookI) => {
    navigation.navigate("Reader", book);
  };

  return (
    <ScrollView style={styles.container}>
      <SpecialEventSection />
      {genres &&
        genres.map((genre: string) => (
          <CategorySection
            title={genre}
            books={getBooksByGenre(genre)}
            onItemPress={onBookPress}
          />
        ))}
      <SeriesSection data={books} />
      <CategorySection
        title="Authors You Might Know"
        books={books}
        onItemPress={onBookPress}
      />
    </ScrollView>
  );
};

export default Discover;
