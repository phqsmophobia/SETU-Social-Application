import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView style={globalstyle.container}>
        <Text style={globalstyle.title}>Home</Text>
        <Pressable onPress={() => router.push("/")}><Text style={globalstyle.loginbutton}>Back</Text></Pressable>
    </ScrollView>
  );
}