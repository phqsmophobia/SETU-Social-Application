import { colours, globalstyle } from "@/styles/global";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, Linking, Pressable, ScrollView, Text, View } from "react-native";
import Ico from "react-native-ico-dazzle-line";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const {email}= useLocalSearchParams();
  return (
    <SafeAreaView style={[globalstyle.containertopflow,{backgroundColor:"#e1e1e1"}]}>
      <View style={globalstyle.hometopnav}>
        <Text style={globalstyle.hometitle}>SETU Social</Text>
        <Pressable onPress={() => Alert.alert("Settings","User settings, soon to implement!",[{ text: "Back", style: "cancel" },{text: "Log Out", onPress: () => router.push("/"),},])}>
          <Ico width={25}height={25}style={{ marginRight: 7 }}colors={{ "#000000": "#2c3742" }} name="user" />
        </Pressable>
      </View>
      <View style={{flexDirection:"column",backgroundColor:"#ebebeb"}}>
        <Text style={[globalstyle.title,{textAlign:"left",marginHorizontal:8,marginTop:12,marginBottom:3,fontSize:26}]}>What's Happening?</Text>
        <Text style={{textAlign:"left",marginHorizontal:8,fontSize:15,color:colours.maindarkSETU,marginBottom:10}}>Find events and meet new people with interests like yours!</Text>
      </View>
      <ScrollView style={{backgroundColor:"#ebebeb",width:"100%"}}>
        <View style={[globalstyle.recttile,{marginTop:20}]}>
            <View style={{flexDirection:"row"}}>
              <View style={{width:"15%",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:100}}>
                <Ico width={50}height={50}colors={{ "#000000": colours.maindarkSETU }} name="calendar-alt"/>
              </View>
              <View style={{width:"85%",flexDirection:"column",alignSelf: "flex-start",}}>
                <Text style={globalstyle.notice}>University Notice</Text>
                <Text style={globalstyle.titlenote}>Student Reading Week</Text>
                <Text style={globalstyle.datenotes}>Monday - Friday</Text>
                <Text style={globalstyle.datenote}>26 October 2026 - 30 October 2026</Text>
                <Text style={globalstyle.notelink} onPress={() => Linking.openURL("https://www.setu.ie/current-students/academic-calendar")}>Find the full Academic calendar here</Text>
              </View>
            </View>
        </View>
        <View style={[globalstyle.recttile,{marginTop:20}]}>
            <View style={{flexDirection:"row"}}>
              <View style={{width:"15%",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:100}}>
                <Ico width={50}height={50}colors={{ "#000000": colours.maindarkSETU }} name="calendar-alt"/>
              </View>
              <View style={{width:"85%",flexDirection:"column",alignSelf: "flex-start",}}>
                <Text style={globalstyle.noticefyp}>For You</Text>
                <Text style={globalstyle.titlenote}>Engineering Technology Careers Fair</Text>
                <Text style={globalstyle.datenotes}>Tuesday, 9:30 - 12:30</Text>
                <Text style={globalstyle.datenote}>03 November 2026</Text>
                <Text style={globalstyle.notelink} onPress={() => Linking.openURL("https://www.setu.ie/events/engineering-technology-careers-fair-2")}>Find out more details here</Text>
              </View>
            </View>
        </View>
      </ScrollView>
      <View style={globalstyle.homebottomnav}>
        <Pressable style={globalstyle.botflowholder} onPress={() => router.push({ pathname: "/home", params: {email: email}})}>
          <Ico width={25}height={25}colors={{ "#000000": colours.mainSETU }} name="house-line"/>
          <Text style={globalstyle.botnavtxt}>Home</Text>
        </Pressable>
        <Pressable style={globalstyle.botflowholder}>
          <Ico width={25}height={25}colors={{ "#000000": "#4597f5"}} name="chirstmas-star"/>
          <Text style={globalstyle.botnavtxtsel}>FYP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}