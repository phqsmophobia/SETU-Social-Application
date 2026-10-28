import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import Ico from 'react-native-ico-dazzle-line';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={globalstyle.containertopflow}>
        <ScrollView>
          <View style={globalstyle.hometopnav}>
            <Text style={globalstyle.hometitle}>SETU</Text>
            <Pressable onPress={() => router.push("/")}><Ico style={{marginRight:7}} colors={{"#000000":"#2c3742"}} name='user'/></Pressable>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}
