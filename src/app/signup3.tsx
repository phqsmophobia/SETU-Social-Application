import { colours, globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import Ico from 'react-native-ico-dazzle-line';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ImageBackground source={require("@/assets/images/background/signupfollow.png")} style={globalstyle.containersignup} resizeMode="cover">
      <SafeAreaView style={globalstyle.containertopflow}>
          <Pressable onPress={() => router.push("/signup2")}><Ico width={40} height={40} style={{marginRight:320,marginTop:15}} colors={{"#000000":"#2c3742"}} name="arrow-left"/></Pressable>
              <Text style={{marginTop:148,fontSize:23, color: colours.maindarkSETU, fontWeight: 'bold',}}>Choose Your Interests!</Text>
              <Text style={{marginTop:10,marginBottom:20,fontSize:16, color: colours.mainSETU}}>Help us personalise your experience.</Text>
              <View style={globalstyle.rowflow}><Ico style={{marginRight:7}} colors={{"#000000":"#2c3742"}} name='user'/><Text style={globalstyle.inputabovetext}>Faculty</Text></View>
              <TextInput style={globalstyle.signinput} placeholder=" Enter your first name" placeholderTextColor="#6a6a6a"/>
              <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='user'/><Text style={globalstyle.inputabovetext}>Campus</Text></View>
              <TextInput style={globalstyle.signinput} placeholder="Enter your last name" placeholderTextColor="#6a6a6a"/>
          <Pressable onPress={() => router.push("/")}><Text style={globalstyle.nextbutton}>Next</Text></Pressable>
          <Pressable onPress={() => router.push("/")}><Text style={globalstyle.signupbutton}>Skip for now</Text></Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}