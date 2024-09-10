import { StyleSheet } from "react-native";
import { colors } from "../../constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: colors.white,
  },
  card: {
    width: "48%",
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 4,
    justifyContent: 'space-evenly',

  },
  actions: {
    columnGap: 12,
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.white
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});