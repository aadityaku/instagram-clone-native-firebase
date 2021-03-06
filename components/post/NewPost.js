import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import { Divider } from "@rneui/themed";
const CHECK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACd0lEQVR4nO2aS2sTURhAzxejlEbcuBC7q1YKFqTYBpdStSJa8B+4DSH+AQWlv0EQ2+5040pKwYWUggsRBI2iNFjSIOhCxcdKDVqbfG6qtENm8pg7kzvjPct55M45GTL3DgGHw+FwOBwOx/+J9PsCoubEjfV9zT16ZnMzW35x+dBb7/5MPy4qLvIL1fHGbl4rcm9XtrF2/FZ1xntMagPkF6rj2pQVhKGtTQMZoeg9LpUB/snD/p17Mu+8x6YugL88FZXGNe/xqQoQIL+m8nu6XBj94j0nNU+BNvKnyoWjH1qdl4oAvcpDCgKEkYeEBwgrDwkOYEIeEhrAlDwkMIBJeUhYANPykKAAUchDQgJEJQ8JCBClPFgeIGp5sDhAHPJgaYC45MHCAHHKg2UB4pYHiwL0Qx4sCRAkL43s1NPS8Meoxs767pnVzOSB2nWEC4o8RgavlgtDddMXECC/uqFy+lVp+JPpMbfjewdMztUugd7etumhSm7GZIS28sWRSOUh6KWo6qhny5Toj/sT8+8HTQxsgzwEvhWWu8BPz0YjEWyRh4AAz4ojqypcpEWEjNYfjN2s7O1lwDY/eNNxykMHT4GJ+fWzoiwBAztPlEf1xq/zldLY904H6+evvR8dPQZNRLBRHrqYB4SJYKs8dDkR6iWCzfLQw0ywmwi2y0OPU+FOIiRBHkKsBYIiqHIF0SUsl4eQi6H8XO2coot4IgDa4rNjn+R0QujVoN+d4MG6b/4vRpbDbSJYKw8G3wf4RLBaHgz+RaZcOLK8tXb4CiDwZEPlpM3yEMEboWN3Xuay33IHn38+/IZZaZr+fIfD4XA4HA6Hw+EwwR9I5OvJGplLGwAAAABJRU5ErkJggg==";
const BACK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABSUlEQVRoge3YMU4UYRjH4Xc2WoiFHZUVB/AA3IBgLAzewB56pOMIBg8ACT1GD6CRUmorSAhaaOxsTMhjsWwM8G0yMyF52eR9yql+/0lm9puNKKWUUkop5S7hBS7wCxvZPaNgDX/99zO7aTCs4o/rfmR3DYJn+H1jxCVeZbf1hhV8d9tmdltvWMa3xog32W294QlOGiPeZrf1hiV8bozYxyS7rxc8xMfGiCM8yO7rBRMcNkZ8wVJ2X2/Ya4y4706xFhHRXY3YjYjt1Ds53kXXdU9nD6/UlDswiYjoum4nIt4lt4xxGhGvr10x/2E/xuOczpFMX78fGmPeW5TX7wwe4VNjzIFF+UGcMT2ifG2MWZwjyoz5h8ad7LbBzD/Gb2W3DWb+h9XL7LbBtD91z7K7RnH7z4fz7KbR8Nz0oHaO9eyeUkoppZRSBvkHYKW2Ll8n764AAAAASUVORK5CYII=";
const POST_IMAGE = "https://scontent.fbom26-1.fna.fbcdn.net/v/t39.30808-6/271295773_1024563694935381_799864773430337465_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pz4L2Xs8kmIAX9SPGdi&_nc_ht=scontent.fbom26-1.fna&oh=00_AT-JmFHrPvH82atJJfD4l6czXXEsXcnYj247hnx0Z6YKoQ&oe=62AAE176"
const NewPost = () => {
  return (
    <>
      <View style={{flexDirection:"row",height:50,justifyContent:"space-between",margin:5}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <Image style={{height:30,width:30}} source={{uri: BACK_ICON}} />
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",textAlign:"center"}}>New Post</Text>
         </View>
         <View style={{flex:1,alignItems:"flex-end"}}>
            <Image style={{height:30,width:30}} source={{uri : CHECK}} />
         </View>
      </View>
      <View style={{flexDirection:"row",paddingHorizontal:12,marginBottom:5}}>
        <Image source={{uri : POST_IMAGE}} style={{height:65,width:60}}/>
          <TextInput style={{color:"white",width:"100%",flex:1}} multiline={true} placeholder="Enter Caption" placeholderTextColor="white"/>
      </View>
      <Divider style={{marginTop:5}}/>   
      </>
  )
}

export default NewPost;
