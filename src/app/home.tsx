import { colours, globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { Alert, Linking, Pressable, ScrollView, Text, View } from "react-native";
import Ico from "react-native-ico-dazzle-line";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
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
        <Text style={{textAlign:"left",marginHorizontal:8,fontSize:15,color:colours.maindarkSETU,marginBottom:10}}>Find events and meet new people here within the SETU community!</Text>
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
        <View style={globalstyle.recttile}>
          <View style={{flexDirection:"row"}}>
            <View style={{width:"15%",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:100}}>
              <Ico width={50}height={50}colors={{ "#000000": colours.maindarkSETU }} name="clipboard-list-alt"/>
            </View>
            <View style={{width:"85%",flexDirection:"column",alignSelf: "flex-start",}}>
              <Text style={globalstyle.notice}>University Notice</Text>
              <Text style={globalstyle.titlenote}>SETU Student Hub</Text>
              <Text style={globalstyle.datenotes}>Find all there is to know about Student Fees, Study Support and so much more.</Text>
              <Text style={globalstyle.notelink} onPress={() => Linking.openURL("https://www.setu.ie/current-students/student-hub")}>Find out more details here</Text>
            </View>
          </View>
        </View>
        <View style={globalstyle.recttile}>
          <View style={{flexDirection:"row"}}>
            <View style={{width:"15%",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:100}}>
              <Ico width={50}height={50}colors={{ "#000000": colours.maindarkSETU }} name="address-book"/>
            </View>
            <View style={{width:"85%",flexDirection:"column",alignSelf: "flex-start",}}>
              <Text style={globalstyle.notice}>University Notice</Text>
              <Text style={globalstyle.titlenote}>SETU Examination Results</Text>
              <Text style={globalstyle.datenotes}>Find out your exam results, request to view your scripts and more.</Text>
              <Text style={globalstyle.notelink} onPress={() => Linking.openURL("https://www.setu.ie/current-students/examinations/carlow-wexford-examinations/exam-results")}>Find how to access your results here</Text>
            </View>
          </View>
        </View>
        <View style={globalstyle.recttile}>
            <View style={{flexDirection:"row"}}>
              <View style={{width:"15%",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:100}}>
                <Ico width={50}height={50}colors={{ "#000000": colours.maindarkSETU }} name="calendar-alt"/>
              </View>
              <View style={{width:"85%",flexDirection:"column",alignSelf: "flex-start",}}>
                <Text style={globalstyle.notice}>University Notice</Text>
                <Text style={globalstyle.titlenote}>Conferring of Awards 2026</Text>
                <Text style={globalstyle.datenotes}>Tuesday - Wednesday</Text>
                <Text style={globalstyle.datenote}>27 October 2026 - 28 October 2026</Text>
                <Text style={globalstyle.notelink} onPress={() => Linking.openURL("https://www.setu.ie/events/conferring-of-awards-2026-carlow-campus")}>Find out more details here</Text>
              </View>
            </View>
        </View>
      </ScrollView>
      <View style={globalstyle.homebottomnav}>
        <Pressable style={globalstyle.botflowholder}>
          <Ico width={25}height={25}colors={{ "#000000": "#4597f5" }} name="house-line"/>
          <Text style={globalstyle.botnavtxtsel}>Home</Text>
        </Pressable>
        <Pressable style={globalstyle.botflowholder}>
          <Ico width={25}height={25}colors={{ "#000000": colours.mainSETU }} name="chirstmas-star"/>
          <Text style={globalstyle.botnavtxt}>FYP</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}