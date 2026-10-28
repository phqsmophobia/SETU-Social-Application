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

    containertopflow: {
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start"
    },

    containersignup: {
        flex:1,
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
        marginBottom:15,
        color:colours.maindarkSETU,
        padding:10,
        width:280,
    },

    loginbutton: {
        borderRadius:18,
        padding:10,
        paddingHorizontal:48,
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

    skipbutton: {
        padding:10,
        paddingTop:18,
        paddingHorizontal:40,
        fontSize:14,
        backgroundColor: 'transparent',
        color:"#0054a9",
    },

    inputabovetext: {
        fontSize:15,
        color: colours.mainSETU,
    },

    rowflow: {
        flexDirection:'row',
        width:265,
        justifyContent:'flex-start',
    },

    scrollview: {
        flex: 1,
    },

    scrollviewsetup: {
        alignItems: "center",
        paddingVertical: 25,
    },

    nextbutton: {
        borderRadius:18,
        padding:10,
        paddingHorizontal:125,
        marginTop:12,
        borderColor:'transparent',
        backgroundColor: colours.mainSETU,
        color:colours.textSETU,
    },

    nextbuttonpress: {
        backgroundColor:colours.maindarkSETU,
        color:colours.textSETU,
    },

    signinput: {
        borderWidth:0.5,
        borderRadius:18,
        marginVertical:10,
        marginBottom:10,
        color:colours.maindarkSETU,
        padding:10,
        width:280,
    },

    categoriesContainer: {
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        rowGap:4,
    },

    catbtn: {
        width:"48%",
        minHeight:52,
        backgroundColor:"#eef0f2",
        borderRadius:5,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10,
        justifyContent:"center",
    },

    catbtnsel: {
        backgroundColor:colours.maindarkSETU,
    },

    cattxt: {
        color:colours.maindarkSETU,
        fontSize:13,
        fontStyle:"italic",
        fontWeight:"600",
    },

    catsel: {
        color:"#ffffff",
    },

    hometopnav:{
        height: 60,
        flexDirection: "row",
        width:"100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    hometitle:{
        fontSize: 20,
        fontWeight: "bold",
        color: colours.maindarkSETU,
    }
  });