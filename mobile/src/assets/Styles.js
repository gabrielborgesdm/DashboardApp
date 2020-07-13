import {StyleSheet} from 'react-native'
import {dimensions, components, colors, spacing, fonts } from "./Components" 
import { color } from 'react-native-reanimated'
export {dimensions, colors, spacing, fonts } 

  
export const styles = StyleSheet.create({...components, ...{
  /* AUTHENTICATION */
  signUpContainer: {
    flex: 1,
    alignItems: "center", 
    alignContent: "center", 
    justifyContent: "center", 
    flexGrow: 1,
    backgroundColor: colors.lightBlue,
  },

  minimalistInputGroup: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 30,
  },

  minimalistRadioGroup: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 30,
    justifyContent: "center",
  },

  minimalistRadioControl: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 35,
    justifyContent: "center",
  },

  minimalistInputControl: {
    flexGrow: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingLeft: 25,
    borderColor: colors.lightGrey,
  },

  minimalistInputIcon: {
    position: "absolute",
    bottom: 18,
    color: colors.darkGrey
  },
  
  buttonMinimalist: {
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 3
    
  },

  lightGreyLogoImage: {
    width: dimensions.quarterWidth + 50,
    height: dimensions.quarterWidth + 50,
    resizeMode: "contain",
    alignSelf: "center",
  }
}})
  