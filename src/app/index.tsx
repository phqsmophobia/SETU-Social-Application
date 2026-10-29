import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { useState } from "react";
import { ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from "../lib/supabase";

export default function Index() {
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const checkforuser = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        alert(error.message);
        return;
      }
      router.replace("/home");
  }
  return (
    <ImageBackground source={require("@/assets/images/background/loginbg.png")} style={globalstyle.containersignup} resizeMode="cover">
      <SafeAreaView style={globalstyle.container}>
          <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Email</Text></View>
          <TextInput style={globalstyle.loginput} placeholder="SETUuser@setu.ie" value={email} onChangeText={setemail} placeholderTextColor="#6a6a6a" keyboardType="email-address"/>
          <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Password</Text></View>
          <TextInput style={globalstyle.loginput} placeholder="password" autoCapitalize="none" value={password} onChangeText={setpass} secureTextEntry placeholderTextColor="#6a6a6a" keyboardType="default"/>
          <Pressable onPress={checkforuser}><Text style={globalstyle.loginbutton}>Login</Text></Pressable>
          <Pressable onPress={() => router.push("/signup")}><Text style={globalstyle.signupbutton}>not registered? Signup here</Text></Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}

