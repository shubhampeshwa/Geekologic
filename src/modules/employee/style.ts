import { StyleSheet } from "react-native";
import { colors } from "../../constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  cardStyle: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
    borderColor: 'grey',
    overflow: 'hidden'
  },
  employeRowStyle: {
    width: '100%',
    paddingVertical: 12,
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    backgroundColor: colors.lightblue,
    justifyContent: 'space-between',
  },
  rowStyle: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sepratorStyle: {
    height: 1,
    width: '90%',
    marginBottom: 3,
    marginHorizontal: 18,
    backgroundColor: 'lightgrey',
  },
  empDetailsStyle: {
    fontSize: 16,
    color: colors.darkBlue
  },
  labelTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: '#777777'
  },
  valueTxt: {
    fontSize: 16,
    color: colors.darkBlue
  }
})