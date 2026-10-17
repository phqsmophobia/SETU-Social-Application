import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={globalstyle.container}>
        <Text style={globalstyle.title}>Home</Text>
        <Pressable onPress={() => router.push("/")}><Text style={globalstyle.loginbutton}>Back</Text></Pressable>
    </SafeAreaView>
  );
}