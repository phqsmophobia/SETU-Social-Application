import { globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={globalstyle.container}>
        <Text style={globalstyle.title}>Sign Up</Text>
            <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>First Name</Text></View>
            <TextInput style={globalstyle.loginput} placeholder="Enter your first name" placeholderTextColor="#6a6a6a"/>
            <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Last Name</Text></View>
            <TextInput style={globalstyle.loginput} placeholder="Enter your last name" placeholderTextColor="#6a6a6a"/>
            <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Username</Text></View>
            <TextInput style={globalstyle.loginput} placeholder="@YourUsername" placeholderTextColor="#6a6a6a"/>
            <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Student Email</Text></View>
            <TextInput style={globalstyle.loginput} placeholder="SETUuser@setu.ie" placeholderTextColor="#6a6a6a" keyboardType="email-address"/>
            <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Password</Text></View>
            <TextInput style={globalstyle.loginput} placeholder="Create a password" placeholderTextColor="#6a6a6a" autoCapitalize="none" secureTextEntry/>
            <View style={globalstyle.rowflow}><Text style={globalstyle.inputabovetext}>Confirm Password</Text></View>
            <TextInput style={globalstyle.loginput} placeholder="Re-enter your password" placeholderTextColor="#6a6a6a" autoCapitalize="none" secureTextEntry/>
        <Pressable onPress={() => router.push("/")}><Text style={globalstyle.loginbutton}>Back</Text></Pressable>
    </SafeAreaView>
  );
}