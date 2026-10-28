import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import Ico from "react-native-ico-dazzle-line";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={[globalstyle.containertopflow,{backgroundColor:"#e1e1e1"}]}>
      <View style={globalstyle.hometopnav}>
        <Text style={globalstyle.hometitle}>SETU Social</Text>
        <Pressable onPress={() => Alert.alert("Settings","User settings, soon to implement!",[{ text: "Back", style: "cancel" },{text: "Log Out", onPress: () => router.push("/"),},])}>
          <Ico width={25}height={25}style={{ marginRight: 7 }}colors={{ "#000000": "#2c3742" }} name="user" />
        </Pressable>
      </View>
      <ScrollView style={{backgroundColor:"#ebebeb",width:"100%"}}>
        <Text>hi</Text>
      </ScrollView>
      <View style={globalstyle.homebottomnav}>
        <Pressable style={globalstyle.botflowholder}>
          <Ico width={25}height={25}colors={{ "#000000": "#2c3742" }} name="house-line"/>
          <Text style={globalstyle.botnavtxt}>Home</Text>
        </Pressable>
        <Pressable style={globalstyle.botflowholder}>
          <Ico width={25}height={25}colors={{ "#000000": "#2c3742" }} name="chirstmas-star"/>
          <Text style={globalstyle.botnavtxt}>FYP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}