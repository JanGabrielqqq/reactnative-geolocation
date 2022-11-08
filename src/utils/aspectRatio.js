import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height

export { width, height, ASPECT_RATIO }