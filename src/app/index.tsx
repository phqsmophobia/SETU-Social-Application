import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={globalstyle.container}>
        <Text style={globalstyle.title}>SETU Social</Text>
        <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Email</Text></View>
        <TextInput style={globalstyle.loginput} placeholder="SETUuser@setu.ie" placeholderTextColor="#6a6a6a" keyboardType="email-address"/>
        <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Password</Text></View>
        <TextInput style={globalstyle.loginput} placeholder="password" placeholderTextColor="#6a6a6a" keyboardType="default"/>
        <Pressable onPress={() => router.push("/homepage")}><Text style={globalstyle.loginbutton}>Login</Text></Pressable>
        <Pressable onPress={() => alert("under construction")}><Text style={globalstyle.signupbutton}>not registered? Signup here</Text></Pressable>
    </SafeAreaView>
  );
}

