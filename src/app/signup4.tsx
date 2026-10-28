import { colours, globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { ImageBackground, Pressable, Text, View } from "react-native";
import Ico from 'react-native-ico-dazzle-line';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ImageBackground source={require("@/assets/images/background/signupfollow.png")} style={globalstyle.containersignup} resizeMode="cover">
      <SafeAreaView style={globalstyle.containertopflow}>
          <Pressable onPress={() => router.push("/signup3")}><Ico width={40} height={40} style={{marginRight:320,marginTop:15}} colors={{"#000000":"#2c3742"}} name="arrow-left"/></Pressable>
            <Text style={{marginTop:148,fontSize:23, color: colours.maindarkSETU, fontWeight: 'bold',}}>Welcome To SETU Social!</Text>
            <Text style={{marginTop:10,marginBottom:20,fontSize:16, color: colours.mainSETU,textAlign:"center"}}>Your account creation has been successful.</Text>
            <View style={{height:300}}></View>
          <Pressable onPress={() => router.push("/home")}><Text style={globalstyle.nextbutton}>Continue</Text></Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}
