import { colours, globalstyle } from "@/styles/global";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import Ico from 'react-native-ico-dazzle-line';
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../lib/supabase";

export default function Index() {
  const details = useLocalSearchParams();
  const categories_selection = [
    { id: "Technology", icon: "technology" },
    { id: "Gaming", icon: "gaming" },
    { id: "Art", icon: "art" },
    { id: "Photography", icon: "camera" },
    { id: "Languages", icon: "talk" },
    { id: "Food & Drink", icon: "food" },
    { id: "Music", icon: "music" },
    { id: "Dancing", icon: "music" },
    { id: "Sports", icon: "sports" },
    { id: "Environment", icon: "environment" },
    { id: "Volunteering", icon: "volunteering" },
    { id: "Fitness", icon: "fitness" },
    { id: "Social Events", icon: "social" },
    { id: "Fishing", icon: "fish" },
    { id: "Cycling", icon: "bike" },
    { id: "Films & Movies", icon: "movie" },
  ];
  const [selectedinterestslist, setinterestlist] = useState<string[]>([]);
  const toggle = (id: string) => {
  if (selectedinterestslist.includes(id)) {
    setinterestlist(selectedinterestslist.filter(item => item !== id));
    } else {setinterestlist([...selectedinterestslist, id]);}
  };

  const submituser = async () => {
    const {error} = await supabase
    .from("users")
    .insert({
      fullname: details.first_name + " " + details.last_name,
      username: details.username,
      email: details.email,
      interests: selectedinterestslist,
      faculty: details.faculty,
      campus: details.campus,
      role_level: "Student",
    });

    if (error) {
      alert("Error Creating Account.");
      return;
    }
    router.push("/signup4");
};
  return (
    <ImageBackground source={require("@/assets/images/background/signupfollow.png")} style={globalstyle.containersignup} resizeMode="cover">
      <SafeAreaView style={globalstyle.containertopflow}>
          <Pressable onPress={() => router.push("/signup2")}><Ico width={40} height={40} style={{marginRight:320,marginTop:15}} colors={{"#000000":"#2c3742"}} name="arrow-left"/></Pressable>
            <Text style={{marginTop:148,fontSize:23, color: colours.maindarkSETU, fontWeight: 'bold',}}>Choose Your Interests!</Text>
            <Text style={{marginTop:10,marginBottom:20,fontSize:16, color: colours.mainSETU,textAlign:"center"}}>Select from categories below to help us better understand you.</Text>
            <ScrollView style={{maxHeight:300,maxWidth:350,marginBottom:20}}><View style={globalstyle.categoriesContainer}>
              {categories_selection.map((category) => {
                const selected =selectedinterestslist.includes(category.id);
                return (<Pressable key={category.id} style={[globalstyle.catbtn, selected && globalstyle.catbtnsel,]} onPress={() => toggle(category.id)}>
                    <Text style={[globalstyle.cattxt,selected && globalstyle.catsel,]}>{category.id}</Text>
                  </Pressable>);})}
            </View></ScrollView>
          <Pressable onPress={submituser}><Text style={globalstyle.nextbutton}>Next</Text></Pressable>
          <Pressable onPress={submituser}><Text style={globalstyle.skipbutton}>Skip for now</Text></Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}
