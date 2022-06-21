import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    WIDTH_ATTRIBUTE,
    } from "../constants.js"
import {TERTIARY_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    DARK_OPTION,
    LIGHT_OPTION,
    ACTIVE_OPTION,
    INACTIVE_OPTION,
    FOCUS_OPTION,
    ON_OPTION,
    OFF_OPTION,
    FULL_OPTION,
    FIT_CONTENT_OPTION} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
    ICON_SUBCOMPONENT,
    ICON_CONTAINER_SUBCOMPONENT,
    ICONARROW_CONTAINER_SUBCOMPONENT,
    ICONARROW_SUBCOMPONENT,
    TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT} from "../constants.js"
import {ARROW_BUTTON_VARIANT} from "../constants.js"
import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SIZE_STYLES } from "./commonStyles.js"

const tertiaryStyles = []

const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style1[TEXT_SUBCOMPONENT] = {
color: "#1B1B1B",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style1[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#666666',
}

Style1[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#1B1B1B",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],


}

Style1[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#1B1B1B",
    width: "20",
    height: "20",
    
    }
Style1[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#666666',
}




const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style1Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style1Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style1Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
tertiaryStyles.push(styleWrapper1)

const Style2 = {}
Style2 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height: "24px",
border: "2px solid #33A1AB",
}
Style2[TEXT_SUBCOMPONENT] = {
color: "#666666",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style2[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#666666",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style2[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#666666",
    width: "20",
    height: "20",
    
    }


const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style2Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style2Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style2Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
tertiaryStyles.push(styleWrapper2)

const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style3[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style3[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#A3A3A3",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style3[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#A3A3A3",
    width: "20",
    height: "20",
    
    }


const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style3Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style3Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style3Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
tertiaryStyles.push(styleWrapper3)

const Style4 = {}
Style4 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style4[TEXT_SUBCOMPONENT] = {
color: "#1B1B1B",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style4[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#666666',
}

Style4[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#1B1B1B",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],


}

Style4[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#1B1B1B",
    width: "20",
    height: "20",
    
    }
Style4[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: '#666666',
}




const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style4Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style4Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style4Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
tertiaryStyles.push(styleWrapper4)

const Style5 = {}
Style5 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height: "24px",
border: "2px solid #33A1AB",
}
Style5[TEXT_SUBCOMPONENT] = {
color: "#666666",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style5[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#666666",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style5[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#666666",
    width: "20",
    height: "20",
    
    }


const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style5Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style5Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style5Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style5Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style5Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path
tertiaryStyles.push(styleWrapper5)

const Style6 = {}
Style6 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style6[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style6[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#A3A3A3",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style6[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#A3A3A3",
    width: "20",
    height: "20",
    
    }


const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style6Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style6Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style6Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
tertiaryStyles.push(styleWrapper6)


const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style7[TEXT_SUBCOMPONENT] = {
color: "#FFFFFF",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style7[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}

Style7[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#FFFFFF",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],


}

Style7[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#FFFFFF",
    width: "20",
    height: "20",
    
    }
Style7[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}




const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style7Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style7Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style7Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style7Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style7Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
tertiaryStyles.push(styleWrapper7)

const Style8 = {}
Style8 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height: "24px",
border: "2px solid #33A1AB",
}
Style8[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style8[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#A3A3A3",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style8[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#A3A3A3",
    width: "20",
    height: "20",
    
    }


const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style8Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style8Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style8Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style8Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style8Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path
tertiaryStyles.push(styleWrapper8)

const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style9[TEXT_SUBCOMPONENT] = {
color: "#666666",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style9[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#666666",
...SIZE_STYLES[LARGE_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style9[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#666666",
    width: "20",
    height: "20",
    
    }


const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style9Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style9Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style9Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style9Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style9Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
tertiaryStyles.push(styleWrapper9)

const Style10 = {}
Style10 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT]
}
Style10[TEXT_SUBCOMPONENT] = {
color: "#FFFFFF",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style10[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}

Style10[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#FFFFFF",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],


}

Style10[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#FFFFFF",
    width: "20",
    height: "20",
    
    }
Style10[ICONARROW_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}




const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style10Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style10Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style10Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style10Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style10Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
tertiaryStyles.push(styleWrapper10)

const Style11 = {}
Style11 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height: "24px",
border: "2px solid #33A1AB",
}
Style11[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style11[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#A3A3A3",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style11[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#A3A3A3",
    width: "20",
    height: "20",
    
    }


const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style11Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style11Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style11Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style11Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style11Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path
tertiaryStyles.push(styleWrapper11)

const Style12 = {}
Style12 [BUTTON_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",

...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
}
Style12[TEXT_SUBCOMPONENT] = {
color: "#666666",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}

Style12[ICONARROW_CONTAINER_SUBCOMPONENT] = {
transition: "0.5s all ease-in-out",
color: "#666666",
...SIZE_STYLES[MEDIUM_OPTION][ARROW_BUTTON_VARIANT][ICONARROW_CONTAINER_SUBCOMPONENT],
}

Style12[ICONARROW_SUBCOMPONENT] = {
    transition: "0.5s all ease-in-out",
    color: "#666666",
    width: "20",
    height: "20",
    
    }


const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = TERTIARY_OPTION
Style12Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style12Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style12Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style12Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style12Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = ARROW_BUTTON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
tertiaryStyles.push(styleWrapper12)


const styleWrapper13 = JSON.parse(JSON.stringify(styleWrapper4))
styleWrapper13[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper13)

const styleWrapper14 = JSON.parse(JSON.stringify(styleWrapper5))
styleWrapper14[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper14)

const styleWrapper15 = JSON.parse(JSON.stringify(styleWrapper6))
styleWrapper15[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper15)

const styleWrapper16 = JSON.parse(JSON.stringify(styleWrapper10))
styleWrapper16[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper16)

const styleWrapper17 = JSON.parse(JSON.stringify(styleWrapper11))
styleWrapper17[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper17)

const styleWrapper18 = JSON.parse(JSON.stringify(styleWrapper12))
styleWrapper18[PATH_STYLE][SIZE_ATTRIBUTE] = SMALL_OPTION
tertiaryStyles.push(styleWrapper18)


// new boton


const copyTertiaryStyles = []
tertiaryStyles.forEach((style,index) => {
    copyTertiaryStyles.push(JSON.parse(JSON.stringify(style)))
    copyTertiaryStyles[index][PATH_STYLE][WIDTH_ATTRIBUTE] = FULL_OPTION
})
tertiaryStyles.push(...copyTertiaryStyles)
export  {tertiaryStyles};