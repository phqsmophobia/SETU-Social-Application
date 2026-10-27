import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <ImageBackground source={require("@/assets/images/background/loginbg.png")} style={globalstyle.containersignup} resizeMode="cover">
      <SafeAreaView style={globalstyle.container}>
          <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Email</Text></View>
          <TextInput style={globalstyle.loginput} placeholder="SETUuser@setu.ie" placeholderTextColor="#6a6a6a" keyboardType="email-address"/>
          <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Password</Text></View>
          <TextInput style={globalstyle.loginput} placeholder="password" autoCapitalize="none" secureTextEntry placeholderTextColor="#6a6a6a" keyboardType="default"/>
          <Pressable onPress={() => router.push("/homepage")}><Text style={globalstyle.loginbutton}>Login</Text></Pressable>
          <Pressable onPress={() => router.push("/signup")}><Text style={globalstyle.signupbutton}>not registered? Signup here</Text></Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}

