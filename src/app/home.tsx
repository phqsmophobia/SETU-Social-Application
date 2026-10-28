import { globalstyle } from "@/styles/global";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={globalstyle.containertopflow}>
        <View style={globalstyle.hometopnav}></View>
    </SafeAreaView>
  );
}
