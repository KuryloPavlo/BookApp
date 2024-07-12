import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../Utility/theme";

const styles = StyleSheet.create({
  categorySection: {
    padding: 16,
  },
  categoryTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  arrowImage: {
    marginLeft: 4,
    width: 20,
    height: 20,
  },
  categoryTitle: {
    fontSize: fontSizes.extraLarge,
    lineHeight: 28,
    fontWeight: "800",
  },
  bookContainer: {
    marginRight: 16,
    marginBottom: 10,
  },
  bookImage: {
    width: 150,
    height: 220,
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: fontSizes.small,
    fontWeight: "500",
    marginTop: 8,
    lineHeight: 16,
    color: colors.lightGrey,
  },
});

export default styles;
