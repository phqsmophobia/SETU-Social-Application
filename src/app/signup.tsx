import { colours, globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import Ico from 'react-native-ico-dazzle-line';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ImageBackground source={require("@/assets/images/background/signupbg.png")} style={globalstyle.containersignup} resizeMode="cover">
        <SafeAreaView style={globalstyle.container}>
                <Text style={{marginTop:148,marginBottom:20,fontSize:23, color: colours.mainSETU, fontWeight: 'bold',}}>Lets Get Started!</Text>
                <View style={globalstyle.rowflow}><Ico style={{marginRight:7}} colors={{"#000000":"#2c3742"}} name='user'/><Text style={globalstyle.inputabovetext}>First Name</Text></View>
                <TextInput style={globalstyle.loginput} placeholder=" Enter your first name" placeholderTextColor="#6a6a6a"/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='user'/><Text style={globalstyle.inputabovetext}>Last Name</Text></View>
                <TextInput style={globalstyle.loginput} placeholder="Enter your last name" placeholderTextColor="#6a6a6a"/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='at-sign'/><Text style={globalstyle.inputabovetext}>Username</Text></View>
                <TextInput style={globalstyle.loginput} placeholder="@YourUsername" placeholderTextColor="#6a6a6a"/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='mail'/><Text style={globalstyle.inputabovetext}>Student Email</Text></View>
                <TextInput style={globalstyle.loginput} placeholder="SETUuser@setu.ie" placeholderTextColor="#6a6a6a" keyboardType="email-address"/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='lock'/><Text style={globalstyle.inputabovetext}>Password</Text></View>
                <TextInput style={globalstyle.loginput} placeholder="Create a password" placeholderTextColor="#6a6a6a" autoCapitalize="none" secureTextEntry/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='lock'/><Text style={globalstyle.inputabovetext}>Confirm Password</Text></View>
                <TextInput style={globalstyle.loginput} placeholder="Re-enter your password" placeholderTextColor="#6a6a6a" autoCapitalize="none" secureTextEntry/>
            <Pressable onPress={() => router.push("/")}><Text style={globalstyle.nextbutton}>Next</Text></Pressable>
        </SafeAreaView>
    </ImageBackground>
  );
}