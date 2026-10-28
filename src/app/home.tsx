import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import Ico from "react-native-ico-dazzle-line";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={globalstyle.containertopflow}>
      <View style={globalstyle.hometopnav}>
        <Text style={globalstyle.hometitle}>SETU Social</Text>
        <Pressable onPress={() => Alert.alert("Settings","User settings, soon to implement!",[{ text: "Back", style: "cancel" },{text: "Log Out", onPress: () => router.push("/"),},])}>
          <Ico width={25}height={25}style={{ marginRight: 7 }}colors={{ "#000000": "#2c3742" }} name="user" />
        </Pressable>
      </View>
      <ScrollView>
        <Text>hi</Text>
      </ScrollView>
    </SafeAreaView>
  );
}