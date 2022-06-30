import React from 'react'
import { Image,View,Text, TouchableOpacity } from 'react-native'
const BACK_ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABSUlEQVRoge3YMU4UYRjH4Xc2WoiFHZUVB/AA3IBgLAzewB56pOMIBg8ACT1GD6CRUmorSAhaaOxsTMhjsWwM8G0yMyF52eR9yql+/0lm9puNKKWUUkop5S7hBS7wCxvZPaNgDX/99zO7aTCs4o/rfmR3DYJn+H1jxCVeZbf1hhV8d9tmdltvWMa3xog32W294QlOGiPeZrf1hiV8bozYxyS7rxc8xMfGiCM8yO7rBRMcNkZ8wVJ2X2/Ya4y4706xFhHRXY3YjYjt1Ds53kXXdU9nD6/UlDswiYjoum4nIt4lt4xxGhGvr10x/2E/xuOczpFMX78fGmPeW5TX7wwe4VNjzIFF+UGcMT2ifG2MWZwjyoz5h8ad7LbBzD/Gb2W3DWb+h9XL7LbBtD91z7K7RnH7z4fz7KbR8Nz0oHaO9eyeUkoppZRSBvkHYKW2Ll8n764AAAAASUVORK5CYII=";
const SHARE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEoElEQVR4nO2aXYhVVRTH1/EjZpQgB02wDyhqJH0qTQiGDJqHSqei8CGSqV6CiOpFrYggipjoKQkRH/oaiKhkMiIIy3pICkLow4YiEsrAidRKLGfUGX897HW4+972OXPO2eecfR3O/+Xee/Zae/3/++y79zprH5EGDRo0aNBgzgFYCTwOvANcG5pP5QAiYC3wPDBOO95M8ltQJ8myAcwXkRtEZKOI3C0iVyWYflsbqaoB9ACDwHbgd7JhZWjeXgCWAJuB3cA/DoFngL3Ah4628dD8CwFYBgwDHwCnHcJOaduDwMXALcCkw+650FoyA+gHtgFfAjMOMceA14E7gF7LbwMwpTZTHTNhbUhNswJYDTwDHHAIBjgM7AKGgIUOf/vOnwZuBz7R378BUQhdiQDmAwPAC8BPCaIPYRa5gTQBCeIvwqwJANvr1JYI2lfuiQTR4zoTVmXs83/i9fqw1edN1SpLJ7hYp+0ocMIheBrYDzwGXJqzb6d4bRvT68eAevMcYCnpK/ck1spdMEaa+F5a2+Sr5SlLJ3SF3sX9uFfuPzH5+DBwoWesRPHafqcVd8hPWTqR2VbuPzBTfwi4oKSYqeLV5g1t/xdYVEbcuOPSVu6C8bOIXwAcVZvdZQTNs3Kv8Q6YzGNW8Wp3s8XrXt+gW3Hn3GeBfcAjwGVeQbLx6MzwNqTYvqx2Z4AlvoF/dYgfA5Z7dZyPQx7xESbrA9hbRvBbgW8cg3AEGAGu9g6SHj+zeLW/3uL4UJlEVmMWvuOOwTiA2c8XlxZQsv/nO3xG1H4GWFEmnzhAD7AJ+Bg41zEQJzAPKwMlxMktXv1+UJ8vfDlkCdavs8JVjRnHFCKXFui3qPhrrPjb8isqCExuMIjJ8s52DMSUXh8kQ05QVLz6PmnFDVP6Albonf/ZMSsO64y5PMG3sHj1/0p9vy9HjQeAeZhMcBcmHbUxg1lDNqGFjRLEX0JrTequ0hfQBzwKfOeYFUeAneTY6hJiPGz1WVk26g1gDSaldm2nue+81e8+7eMXuq305QKmSHI/5tE5xs6CffXRbaWvPLAGYQJHsTOD/33WIK6vgmOlAB6wBOQuXgB71Lf+0lcZ0L9DXCvck9N3Ea1dpp7SVxXAbJdgEqnMOTxwl8/s6RoA6ywhT+TwG1Wfk1gnROclaD12H8qylQELaW2n7/rGn+fbQQl4TT+vFJEbM9ivF5E+/f5eJYzqhO7ncTo8msF+h9r6l766BcBbKupUmijaS18flRG7G/4CIiKv6GeviNyTYrdOROJjtFxbZ1dD72z8KJ34Pg/msRqqKn2FBPC0tSVel2Dzo7ZXX/qqG5hn+2kVuMPRvsoaoK0hOFYOWq+2/E3H2R7wlDUA/aE4VgraU9zNHW3xQezBUPwqB+aAMz6H/My6bpe+ng3JsXIAL6rQc+gJFOYsMsbcfu8Xc+4Q3+0Rvfap/j4/Sl++AD5XwRPAclrnDi+F5lYLaC93jVnfw731VScwLzv9RTsqKX11y7NAG6IomhSRtzsuvx9F0XQIPkFA+5k/wMbQnGoH8LWKPwn0hOZTO4DbMK/rbAnNpUGDBg3mJP4DLNE41UD9bJoAAAAASUVORK5CYII=";

const CommentHeader = ({navigation}) => {
  return (
    <View style={{backgroundColor:"black"}}>
      <View style={{flexDirection:"row",height:50,justifyContent:"space-between",margin:5}}>
         <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity onPress={() => navigation.push("home")}>
                <Image style={{height:30,width:30}} source={{uri: BACK_ICON}} />
            </TouchableOpacity>
            <Text style={{color:"white",fontSize:22,fontWeight:"bold",textAlign:"center"}}>Comments</Text>
         </View>
         <View style={{flex:1,alignItems:"flex-end"}}>
            <Image style={{height:30,width:30}} source={{uri : SHARE}} />
         </View>
      </View>
       
      </View>
  )
}

export default CommentHeader