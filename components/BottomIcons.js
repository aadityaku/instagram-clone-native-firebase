import React , { useState } from "react";
import { TouchableOpacity, View,Image, StyleSheet } from "react-native";
import { Divider } from "@rneui/themed";
const Bicons = [
    {
        name:"home",

        activeUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVRoge2WPS8EQQCG3+F8JBKJhEJDo6DwFT9AryMKRKHyF/wFf0GnEaVOQlS0KgqNqK5EIpFwd+FR3G3E2Znb29vduUvmSa7Zyb7zvJeZnZECgUAuAKvAU+O36tunLYB9oMovNeAAML7dnADDwDF2ToER356xADPAnUM+4gGY8+37B2ANeE0gH/EGrPv2FmAaa/urDfmIb+AQ6PMlPwqcpRBv5hwYK1p+lvpazopHYKEo+W3gPUP5iA9gL0/xEvU1mzdHwEDW8hPAVQHyETfAZFbyy0C5QPmIMrDcqfwS7X3fs+aFFpvbejcBSpJuJS129C90zr2kFWNMLW7QdYjsyr+8JM1L2rENugpsZ++Smi3bgKvAfA4iabG6uPbAl9wFi+TbGNMfN+AS7BZ5yeHSTZKpCAV8Ewr4pucLlHLI/JR0Ium56fm46teToRzm/E8HN8gNR+Zm2lBbpusktr7UgiFjTNWSOSipkibUGBPrmnkB20R55fb8Jg4FfBMK+CYU8I2rQOxh1IIkh1Smua4C1ykmSvJOXrl/AaaBS6CS4KpSAS6AKV+5gUCgR/kBjkzmBI2K+Q8AAAAASUVORK5CYII=",
        inActiveUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACPUlEQVRoge3YvWsUQRzG8VkvCYJEUFEQVISACIokjWW6CAYsBAsLwRTiX6DE0tLWMpWllXaigqBiIaaLCiKihcTOdxRzMcnH4i5xstl7zd6twn7himNmnuf53c3szGwIJSUlPQHjeIm3GC86T0fgIhb95Temi87VEmzFDY25iW1F58wEI5hLBX5a/8TMYaTovOvAJD6ngs5gCAO4lmr7htNF5w5IMI3lKNwCLmT0PYefUb+VemFbisgesB23U7/sexxvMmYU71Jj7mBHP7MHHMarVJCH2NPG2F24nxr7Bsf6kT3gLH6kpsJ1DHSgUcHV1NT7haleBs9ajN9xZhOap/AlpTmDwTyzB+zGg5TRaxzJQfuQ2o4d8wR788geMIb5lMEtDOdiUPMYrmvGzGNss8Kj1j/fl3AFSU7ZY6+krr0U+X3S7eLGIF5EYh8xkXPuLN+Jutcqz7taE5iKRL7mMd878D6qtluvcr4bkfhZfakHOVv5X47873Yj8CESONCDjK38D8YLulG/hosRyyGE1XNKJUmSlbxDNkPtjLRc/7qSJEklq1+zg9RaW7/DZ3g2zFnMSTBHygKKpiwgRu1qOYuqjVTrbSfz9GwWZo02+59Quxu0w2QvMmy2gNk2w8Ozf7GAeNpsuONiZ9S+kFeGZjvx2qAkSVoen9vp3wvN8ilUNGUBRVMWUDRlAUXT7H3mYghhKIT1G0obVPup2ewfeNyBQcyjPmtmg/1qr1ayjsZZVHEP+/qpWVJS8p/zB2VVWpYrprKdAAAAAElFTkSuQmCC",
    },
    {
      name:"search",
      activeUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADCElEQVRoge2ZzUtUURjGn9vCjKRNhLkoQ4MEV22CFn4lQrVp0VKJIBAD/4ekFn38Fy2CaBPpNCpEkG00o5197PpYVJhEGJRa/VrcOzS8c5yZc+fcGaT5wSzOHe7zvM+cOV/3Sk2aZEJUy81Ah6SzkgYk9UrqlLQv+fqbpHeSViQ9kZSPouhTLX7BAQaBHPCL6tkCZoD+Rtcv4Cgw51H8duSB7kaFuAB8DxCiwDowVu8QV8sU9BK4DgwDx4C9yacnuXYDeFXm/ql6hbi2TQFLwJCHzkngaUPCEP+dLBvAOOA94wERMJFoWEazyFAY2HZMfAH6Amj3A2tGex3oClG7NbOz00aIEEX6A8Cm8ciF0i+YDDq6fjyoSexz2eET7McS8WJXzCIpxkQVPhHwzHhNhxLvIF6FixkIIu72GzJeW0B7COFLRnglQL2VPF8bz4u+Grsc1+yvH6ary/PAtAd9BVxBek37ka9oCqyHraEiriCdpv3BVzQF7yvU4A+lq25bzaKVPduM509fDVePWIJPuw5sHVu1CkjSuml3+IqmwHqs+gq4grw17UO+oik4bNqffQVcQey6MeIrmgLr8cJXwBVkwbTP+YqmwHo8rlkROOjYongvUB5+w8ZrA9gfSnzGiC+R3abxufG6HdKgn1Imghn885l0+BwPbZI3BpsEfCZFvOu1B6s7ofSLjbqJj5/FrBFgS098cLNH3VXgQIjaXYZjjq7fJD7ZpX34MOnoCYAFoCWLHAXzKYcpwDJwykNnmNKBbckDrY0IA/Gh6CYwQvxQri359CTXbgFvKgQoZpqMe2aU0jGTFTPA7izDdFH6YMKXP8A9YL6hYZJAfcR/AbsDKMcP4C5wItFoBWYr3JOrNkytL3raJZ1RfMbulXRE8Yue35LWJH2UtCxpUVIuiqKv5v5WSfclnS5j81DS+SiKNmqpNXOAFkq3RJZZspzNQlFlmLlmmHrzP4aZB/Y0utaKUN3UXN/3j2mp0DNXGl2fF9uE2VkhCpgwOzNEgWTMZPOytEmT8vwFxdlvsvNj/B0AAAAASUVORK5CYII=",
      inActiveUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADH0lEQVRoge2ZO08UURTHz1XBTmlcCI8YxE46C4Eg2qqFJoLhYeJHMPERCQlqx/IFrG1MCKEQ1pDYCb5ibNWeygg2SkSBxZ/FnJHrZhb2ztxhQPafbC6Z3fN/sPeeO3NXpIoqUoFJUgw0iMhFETknIu0iclxEjujb30RkQUQ+isgLEZk1xnxJoucdQA9QANapHOvADHA2a/8CtAGzlrkiMAfcAs4AOaBGXzmgA7gNzOtnQzwDTmQVYghYViM/gDHgmEN9DsgDK8rxHRhI03OUifvWf3MCaErA1QxMWnyjPr1uJfxQBX/r34kahMV7E9jYkTA6nVDB3hT4+6ww/b75Q5E2a03cS0Uk0Bm21kxrGgJhd5rwTv6vjrHWTME3eY8SrwAtXsmj9Zq0EwJ0+yQuKOmYN9LtNfOqOe2LsIFgFy667BMedHOquQbkXOsPRFy7JCKHROSVMWYpscMKYYxZFJG3IlIjIhdc66OC9Og4k8BXXITT6rxrYVSQdh1fx7YTH290PJWYCfiqi27H1oelXa/aiz7IVpWs1oM3V+3Dqv3LtTZqau0GrLkWRAVZ1vFoMi+xUKej89SKCrKgY1tsO/FxUsfProVRQT7o2BXbTnx06vjJtTAqyJyOV2LbiY9Q83liJm2B4S2K861CAt3wFmUdqNu+ojLSGW2DeS+ElWmOq+akT9JOJf2ZwW38ad/k4a38JJ6e08voGGBKtZ6mIdCqj58Aw94FNnVGVGMJaExLZEBFNoC+FPivsXn4cNk3f6nYqBVm2Mc00+k0YoXYAIZ8+N1OOAwTrpnmBFwt1pqwUQQGffouZ6DfWjMrBM/YFe8zBPvEuHZClKsYESb9Y1RtAIUS4XngDtBFsJnW6qter90FXpaYngAagcHMwmigbmAat58VVoEnQEcJV7kw6Zw8lgmUA24Aj4H3BC10lWBzWwDeAY8IpmXZJ06C7phtGF8gOAcu/YaLwPWsvTljizDpt2bf+N/C9O6HMOlvmr6hYdb2VZjdeq71F8aYKREZEpGidfmgbJ647C0AV61v5kHWfhJBp9nO/JxdRRUB/gCirut8TeofnwAAAABJRU5ErkJggg==",
    },
    {
      name:"reels",
      activeUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACy0lEQVRoge2Zu2sUURjFzxckGlBjUojEgJoEiaUo4gPEThsjloKgmCb/gYmVWviOtZ2QgIVFfIHaKdgI8YFFNKIGhPhIoYkkhWyRn8XMQnYy696ZvTOrMD/YYu/MOfc7O/fOnZ0rFRQUeAFYCwwAt4GzYVsvUMKNYQfNAjAJ3AVOAe0+AzQD54BfSzosAdvC48OOQUpAb0LNHHAGaKk3xCbgTZVOHofntAIzjoWl0QC8ADamDdEFfK7RQV94bn+Cog6n0ABMJw4DrAReOZh/DM9tAsYdC/qQQlNmHFiVJMj5BOaDoWYvsJihpsyQa4g2Kid2LeaBjlA7mqGmzBzQ5hJkIKExwGio7QiLdGEkhabMSZcgdxKaQjA89oT6wQw1ZcZcgkwlNC3zkmACNwPvM9QATLoEWUhUfiX9oUdfxpp5lyD1MAOsC30eZqihZpCCBmPRhv/lsplZRe1NjSrEN0WQf40iyL9GFkEeSdoiqVvSNUmlDPqoTeK1fDnrI349wJgH3wqidXtfR6L39yW+ByRdl7S9Hv9q/eQ2R8zsqaSdkk5I+u7bP9fJbmaLZjYiaauki/I4f3IbWnEAxyTd8tFPo4O0S/rho59GryOHfBk1JAiwBrgg6aYvzxW+jFwAmiQdl3RZ0gaf3rkF8b2ORIkbWrX/2P8FYHPkew/B65sn8hdiWY1xQb7V2ckNghfg3cBVSROSjtbpGeVrtCFuaL1VsGCl5aCkT3XoXZiINsRdkQcZF+GD+9GGuAWxXdKUpNY8KkrBnKQuM5td2rjsipjZT0lX8qoqBZeiIaSYKyJJBHt2zyTtyLqqhIxL2m9mv6MHqj4XAZ2SnktKt3fnn2lJu83sS9zBqo8oZjYtaZeCX6HRvJa0r1oIJ4AWYIhgpyhvZoHTOOwbJnnkbpN0JPz0SuqUtDr1LxTPgoIh9E7BLfZe3MQuKChIzh82Kl0XBuhtrAAAAABJRU5ErkJggg==",
      inActiveUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADRElEQVRoge2au08UYRTF7/hEAcPGRA1aEaKgnYEQTQjGSis0McYGjQnyHwjYG9HCTjuMsTZGIVZAoY2KNjZGsNCIEuOLXUETGvKzmDvZYZeF+83M7hKdU+6ec++58z1m5n4jkiJFitXgWYlARkROiUi3iLSIyD4RqU3Yzx8R+Swib0VkVEQeeZ6XTSQysA24AuSoPLLAIFATt4hG4FUo8GvgMnAMOKe/5YDdxngnVtMAtUAL0AuMhfK+BBrjFDGjgT4Cp1fgjOj/ww5xR60aoBOYUv6MczH40ykYiclSVxxoBhaBJaDNGNtJAzQAT0Je7NMMf00AvAd2rsEdUu4zwLR5ANddNEAGmFbNgLWIDPmF3WXg1wGzyu8x5qiPoOlSfhZ/B11TcFEFE5YEqulRzSxQb9Scj6AZV80FC/mhknstwVXj6TQBGHLQPHfUXFL+Aws5mIv7LcFDujZdwItAs1HT7qLB35oBpizBF5RcZzFToB1W7aiD5o5Vo+sRYMESGACrkQLtLl2MACcdNDmrppS/oq0vahGVhud5y7xvqJaRpLGp1B+FFa8XlJox/8yIpIWsN6SFrARgC3AV+AT8AG4De5LM4WImzg3xBsWYJ4nXVVd/MQv5ovIO4CD5N0iAD8BZjO8ssf3FLKRICxzHf9cPMAkcjRLfyV/ShejvG4E+4KtSloB7wN6kckQnRtACO3QdLSp1DmhPMoc7MYYWaAIeK/1pOXJUpBDlbtcp9j2JHFW5IQJNInJf878pV5JKrpGfwOGy+CtHIay8a90lQhu0aoVQfB95ARyJEt/JH/4jBRh7TQXaOdV2AIfI93nB71qeieQ+H79eY81byEE76ECERDcpxi9gANgayf3y+E7tIOcGXUi7GbiG/8z1DbiF8cjBGL9PvZkadEHLdCwpA0kBmFBvppZphnxvqrMC/kxgeRO7wSoaDOaiWVRG6MV9p576XYQ1+Mdd4B+yrN3GLxO0iGgHPRogfPQ2jeGsJGnodApGwv3oLRSoUa9CgHHdOVqJ0OQ25KvT2H2hhR2MRLQiQsFr9D6QpfLIAv0Y7kEuHww0iP+xQLeItIr/wUDSo/Jb8h8MjIjIiOd5uYRzpEjxX+IvIGqT0lyGY48AAAAASUVORK5CYII=",
    },
    {
      name:"like",
      activeUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie3UTytEURjH8efaSLGYjSiSYmFjKQtWQrLlJfAavBSKrYV3wSuw8QIYI6UsiCbKx+aOjjFz5w5XWfjVqdP58/2e89zbifhPv8E0DlDHK65xiJlkzSyO8rnXfO0+pnvB1/Goc16wg9283ykPWCs6eTd4K295K8oDplrcgcSxFxHDPSqY5a0oIznrY0PrBvWImOixuWyusiybahc0I2KwIkEzy7KhiM8lalQEj4iotzqp4LRCwdmXESz2+DvK5g0LHbU4qUBw3PVeGMXND+C3GCssHpbx/A34M5ZKfSGsotkH/AWbpeCJZFv3N6cdvtUXPJGsKH6fnrDxLXgiWcBdB/h96ZqXkMzhMoE3MF8JPJGM4xwXmKwUnkhqqP0K/M/mHVFev9DVPV/MAAAAAElFTkSuQmCC",
      inActiveUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABd0lEQVRIie3Uv0pcQRTH8TUWEkxjI4YgcUELIVpFyUKsJEpIayptTeML2AsivkB0ibWQKmDaYOITpPEBxFXSpImJEQU/NueyI7l3/7gGLDwwzGXO73x/Z+6dO6XSfbQbKGMTh7hADR8wnGhGsBW5i9BuoNwMPosT+XGORbyL57z4hZlGnWfwHUygF89iR3AZA6oYC80EPicmT/MMMshOQQNLicFSgSYzeZ+XPIzk8wavcBnLDfKTwTjIS55FsrcI0CzwKBh/s7UHSb4W89BNDZLajHXNYC/m+Q4MFmL+9k8GL2J7J3jSLhmD+B2HYLJI9DFMvqC7DXg3dqN2u5GwH8ch3GgR3hX/BPzAQLOCKZxGwUoLBquhPcXLVpoq4VVybNfQVdD5emjO8aYleAJ4q37nVNNvEu+8msDn2oInoGn1++kTHqInOQx/8PpG8MSkgp8B/BpDrFU6gicmozhQjyOM3wo8MXmM79jH4K3CE5M+9P0X+J2NK3FtRFoJEUjbAAAAAElFTkSuQmCC",
    },
    {
      name:"profile",
      inActiveUrl:"https://instagram.fbom26-2.fna.fbcdn.net/v/t51.2885-19/273464669_468712634908115_2311943651117101343_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbom26-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=D6bFqszanKcAX_HVr4B&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-ppsIWd1FpRRm1KH-JUek3Jh-vuktWGyGNcIXAzXUSKg&oe=62AD1CB3&_nc_sid=8fd12b",
      activeUrl:"https://instagram.fbom26-2.fna.fbcdn.net/v/t51.2885-19/273464669_468712634908115_2311943651117101343_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbom26-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=D6bFqszanKcAX_HVr4B&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-ppsIWd1FpRRm1KH-JUek3Jh-vuktWGyGNcIXAzXUSKg&oe=62AD1CB3&_nc_sid=8fd12b",
    },
];

const BottomIcons = () =>{
    const[active,setActive] = useState("home");

     const Icon = ({icons}) =>(
        <TouchableOpacity onPress={() => setActive(icons.name)}>
            <Image source={{ uri :(active === icons.name?icons.activeUrl:icons.inActiveUrl)}}  style={(active === "profile" && active === icons.name)?styles.profile:styles.image} />
            
        </TouchableOpacity>
     )
     return(
        <View style={{backgroundColor:"black"}}>
            <Divider/>
            <View style={{justifyContent:"space-around",flexDirection:"row",height:69,width:"100%",marginTop:5}}>
                {
                    Bicons.map((value,index)=>(

                        <Icon icons={value} key={index}/>
                    ))
                }
            </View>
        </View>
     )
}
export default BottomIcons;

const styles =  StyleSheet.create({
    image:{
        height:26,
        width:25,
        borderRadius:12.5,
    },
    profile:{
        height:26,
        width:25,
        borderRadius:12.5,
        borderWidth:1,
        borderColor:"white"
    },
   
})

