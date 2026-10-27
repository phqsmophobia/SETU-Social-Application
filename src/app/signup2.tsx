import { colours, globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { useState } from "react";
import { ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import Ico from 'react-native-ico-dazzle-line';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [faculty, setfaculty] = useState("Select faculty");
  const [open, set] = useState(false);
  const [location, setlocation] = useState("Select Campus");
  const [open2, set2] = useState(false);
  return (
    <ImageBackground source={require("@/assets/images/background/signupfollow.png")} style={globalstyle.containersignup} resizeMode="cover">
      <SafeAreaView style={globalstyle.containertopflow}>
          <Pressable onPress={() => router.push("/signup")}><Ico width={40} height={40} style={{marginRight:320,marginTop:15}} colors={{"#000000":"#2c3742"}} name="arrow-left"/></Pressable>
              <Text style={{marginTop:148,fontSize:23, color: colours.maindarkSETU, fontWeight: 'bold',}}>More About Your College Life!</Text>
              <Text style={{marginTop:10,marginBottom:20,fontSize:16, color: colours.mainSETU}}>Help us personalise your experience.</Text>
              <View style={globalstyle.rowflow}><Ico style={{marginRight:7}} colors={{"#000000":"#2c3742"}} name='user'/><Text style={globalstyle.inputabovetext}>Faculty</Text></View>
              <View style={{ width: 280, position: "relative" }}>
                <Pressable onPress={() => set(!open)} style={{padding: 15,backgroundColor:"#eef0f2",borderRadius: 10,marginVertical: 10,}}>
                  <Text style={{ color: colours.maindarkSETU }}>{faculty}</Text>
                </Pressable>
                {open && (<ScrollView style={{ maxHeight: 150, marginBottom:15, backgroundColor: "#f4f4f4", borderRadius: 10, }} nestedScrollEnabled>
                    {["Faculty of Arts and Humanities","Faculty of Business","Faculty of Engineering and Built Environment","Faculty of Education & Lifelong Learning","Faculty of Science and Computing","Faculty of Health Sciences",].map((i) => (
                    <Pressable key={i} onPress={() => { setfaculty(i); set(false);}} style={{padding: 15,marginVertical: 2,}}>
                      <Text style={{ color: colours.maindarkSETU }}>{i}</Text>
                    </Pressable>))}
                  </ScrollView> )}
              </View>
              <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='user'/><Text style={globalstyle.inputabovetext}>Campus</Text></View>
              <View style={{width:280,position: "relative",}}>
                <Pressable onPress={() => set2(!open2)} style={{ padding:15,backgroundColor:"#eef0f2",borderRadius: 10,marginVertical:10,}} >
                  <Text style={{color:colours.maindarkSETU}}>{location}</Text>
                </Pressable>
                {open2 && ["Carlow","Waterford","Wexford"].map((i) => (
                  <Pressable key={i} onPress={() => {setlocation(i); set2(false);}} style={{padding:15,backgroundColor:"#f4f4f4",borderRadius: 10,marginVertical:2}}>
                    <Text style={{color:colours.maindarkSETU}}>{i}</Text>
                  </Pressable>))}
              </View>
          <Pressable onPress={() => router.push("/signup3")}><Text style={globalstyle.nextbutton}>Next</Text></Pressable>
          <Pressable onPress={() => router.push("/signup3")}><Text style={globalstyle.skipbutton}>Skip for now</Text></Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}