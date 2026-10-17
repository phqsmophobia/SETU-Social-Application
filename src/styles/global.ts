import { StyleSheet } from "react-native";

export const colours = {
    mainSETU:'#435465',
    maindarkSETU:'#2c3742',
    textSETU:'#eef0f2',
}



export const globalstyle = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize:42,
        color: colours.mainSETU,
        fontWeight: 'bold',
        marginBottom:30,
        textAlign: 'center',
    },

    loginput: {
        borderWidth:0.5,
        borderRadius:18,
        marginVertical:10,
        color:colours.maindarkSETU,
        padding:10,
        width:240,
    },

    loginbutton: {
        borderRadius:18,
        padding:10,
        paddingHorizontal:40,
        marginTop:12,
        borderColor:'transparent',
        backgroundColor: colours.mainSETU,
        color:colours.textSETU,
    },

    loginbuttonpress: {
        backgroundColor: colours.maindarkSETU,
        color:colours.textSETU,
    },

    signupbutton: {
        padding:10,
        paddingTop:35,
        paddingHorizontal:40,
        backgroundColor: 'transparent',
        color:colours.maindarkSETU,
    },

    inputabovetext: {
        fontSize:15,
        color: colours.mainSETU,
    },

    rowflow: {
        flexDirection:'row',
        width:225,
        justifyContent:'flex-start',
    }
  });