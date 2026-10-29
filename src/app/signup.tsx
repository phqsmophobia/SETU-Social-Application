import { colours, globalstyle } from "@/styles/global";
import { router } from "expo-router";
import { useState } from "react";
import { ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import Ico from 'react-native-ico-dazzle-line';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [details, update] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    campus: "",
    role_level: "Student",
    interests: [] as string[],
    faculty: "",
  });

  const updatedetail = (field: keyof typeof details, value: string | string[]) => {
    const newdetentry: typeof details = { ...details };
    if (field === "interests") {
      newdetentry.interests = value as string[];
    } else {
      newdetentry[field] = value as string;
    }
    update(newdetentry);
  };

  const check=() => {
    const charexcluder=/^[a-zA-Z0-9]+$/;
    if(details.password != details.confirmpassword){
      alert("Password and Confirm Password do not match.");
      return;
    }
    if((!charexcluder.test(details.username))||(!charexcluder.test(details.first_name))||(!charexcluder.test(details.last_name))){
        alert("names cannot include special characters.");
        return;
    }
    if (!details.email.includes("@")) {
      alert("Email is invalid.");
      return;
    }
    router.push({
    pathname: "/signup2",
    params: {...details,interests: JSON.stringify(details.interests)}});
  };
  return (
    <ImageBackground source={require("@/assets/images/background/signupbg.png")} style={globalstyle.containersignup} resizeMode="cover">
        <SafeAreaView style={globalstyle.container}>
                <Pressable onPress={() => router.push("/")}><Ico width={40} height={40} style={{marginRight:320,marginBottom:5}} colors={{"#000000":"#f1f2f3"}} name="arrow-left"/></Pressable>
                <Text style={{marginTop:110,fontSize:23, color: colours.maindarkSETU, fontWeight: 'bold',}}>Lets Get Started!</Text>
                <Text style={{marginTop:5,marginBottom:20,fontSize:16, color: colours.mainSETU}}>Join the SETU social experience.</Text>
                <View style={globalstyle.rowflow}><Ico style={{marginRight:7}} colors={{"#000000":"#2c3742"}} name='user'/><Text style={globalstyle.inputabovetext}>First Name</Text></View>
                <TextInput onChangeText={(text) => updatedetail("first_name", text)} style={globalstyle.signinput} placeholder=" Enter your first name" placeholderTextColor="#6a6a6a"/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='user'/><Text style={globalstyle.inputabovetext}>Last Name</Text></View>
                <TextInput onChangeText={(text) => updatedetail("last_name", text)} style={globalstyle.signinput} placeholder="Enter your last name" placeholderTextColor="#6a6a6a"/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='at-sign'/><Text style={globalstyle.inputabovetext}>Username</Text></View>
                <TextInput onChangeText={(text) => updatedetail("username", text)} style={globalstyle.signinput} placeholder="@YourUsername" placeholderTextColor="#6a6a6a"/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='mail'/><Text style={globalstyle.inputabovetext}>Student Email</Text></View>
                <TextInput onChangeText={(text) => updatedetail("email", text)} style={globalstyle.signinput} placeholder="SETUuser@setu.ie" placeholderTextColor="#6a6a6a" keyboardType="email-address"/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='lock'/><Text style={globalstyle.inputabovetext}>Password</Text></View>
                <TextInput onChangeText={(text) => updatedetail("password", text)} style={globalstyle.signinput} placeholder="Create a password" placeholderTextColor="#6a6a6a" autoCapitalize="none" secureTextEntry/>
                <View style={globalstyle.rowflow}><Ico colors={{"#000000":"#2c3742"}} style={{marginRight:7}} name='lock'/><Text style={globalstyle.inputabovetext}>Confirm Password</Text></View>
                <TextInput onChangeText={(text) => updatedetail("confirmpassword", text)} style={globalstyle.signinput} placeholder="Re-enter your password" placeholderTextColor="#6a6a6a" autoCapitalize="none" secureTextEntry/>
            <Pressable onPress={check}><Text style={globalstyle.nextbutton}>Next</Text></Pressable>
        </SafeAreaView>
    </ImageBackground>
  );
}