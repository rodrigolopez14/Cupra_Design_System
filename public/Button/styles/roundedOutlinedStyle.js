
import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    STATE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    WIDTH_ATTRIBUTE} from "../constants.js"
import {ROUNDED_OUTLINED_OPTION,
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
    TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT} from "../constants.js"
import {REGULAR_BUTTON_ICON_VARIANT, REGULAR_BUTTON_VARIANT} from "../constants.js"
import {PATH_STYLE,
    STYLE_OBJECT,
    COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SIZE_STYLES } from "./commonStyles.js"
const roundedOutlinedStyles = []
//*----------------STYLING BUTTONS ------------------------*/

//*----------------NEW BUTTON ------------------------*/

//* PRIMARY DESKTOP BLACK NORMAL OFFICON */
const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "12px 15px 14px",
border: "1px solid #1B1B1B",
borderRadius: "24px",

}
Style1[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "11px 14px 13px",
border: "2px solid #1B1B1B",
}
Style1[TEXT_SUBCOMPONENT] = {
color: "#1B1B1B",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style1Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style1Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style1Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path


roundedOutlinedStyles.push(styleWrapper1)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style2 = {}

Style2 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height:"52px",
padding: "11px 14px 13px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style2[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#1B1B1B",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}


const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style2Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style2Path[ICON_ATTRIBUTE] = OFF_OPTION
Style2Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path

roundedOutlinedStyles.push(styleWrapper2)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "12px 15px 14px",
border: "1px solid #D1D1D1",
borderRadius: "24px",
}
Style3[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style3Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style3Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style3Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style3Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style3Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
roundedOutlinedStyles.push(styleWrapper3)

const Style4 = {}
Style4 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],

padding: "6px 15px 8px",
border: "1px solid #1B1B1B",
borderRadius: "24px",

}
Style4[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "5px 14px 7px",
border: "2px solid #1B1B1B",
}
Style4[TEXT_SUBCOMPONENT] = {
color: "#1B1B1B",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style4Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style4Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style4Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path


roundedOutlinedStyles.push(styleWrapper4)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style5 = {}

Style5 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height:"44px",
padding: "5px 14px 7px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style5[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#1B1B1B",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}


const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style5Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style5Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style5Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style5Path[ICON_ATTRIBUTE] = OFF_OPTION
Style5Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path

roundedOutlinedStyles.push(styleWrapper5)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style6 = {}
Style6 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "6px 15px 8px",
border: "1px solid #D1D1D1",
borderRadius: "24px",
}
Style6[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style6Path = {}
Style6Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style6Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style6Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style6Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style6Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style6Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper6 = {}
styleWrapper6[STYLE_OBJECT] = {...Style6}
styleWrapper6[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper6[PATH_STYLE] = Style6Path
roundedOutlinedStyles.push(styleWrapper6)

const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],

padding: "6px 15px 8px",
border: "1px solid #1B1B1B",
borderRadius: "24px",

}
Style7[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "5px 14px 7px",
border: "2px solid #1B1B1B",
}
Style7[TEXT_SUBCOMPONENT] = {
color: "#1B1B1B",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style7Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style7Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style7Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style7Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style7Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path


roundedOutlinedStyles.push(styleWrapper7)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style8 = {}

Style8 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height:"36px",
padding: "5px 14px 7px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style8[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#1B1B1B",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}


const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style8Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style8Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style8Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style8Path[ICON_ATTRIBUTE] = OFF_OPTION
Style8Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path

roundedOutlinedStyles.push(styleWrapper8)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "6px 15px 8px",
border: "1px solid #D1D1D1",
borderRadius: "24px",
}
Style9[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style9Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style9Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style9Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style9Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style9Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
roundedOutlinedStyles.push(styleWrapper9)

const Style10 = {}
Style10 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "12px 15px 14px",
border: "1px solid #1B1B1B",
borderRadius: "24px",

}
Style10[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "11px 14px 13px",
border: "2px solid #1B1B1B",
}
Style10[TEXT_SUBCOMPONENT] = {
color: "#1B1B1B",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}


Style10[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#1B1B1B",
    }
Style10[ICON_SUBCOMPONENT] = {
    color: "#1B1B1B",
    width: "20px",
    height: "20px",
    }
const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style10Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style10Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style10Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style10Path[ICON_ATTRIBUTE] = ON_OPTION 
Style10Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path


roundedOutlinedStyles.push(styleWrapper10)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style11 = {}

Style11 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
height:"52px",
padding: "11px 14px 13px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style11[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#1B1B1B",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style11[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#1B1B1B",
    }
Style11[ICON_SUBCOMPONENT] = {
    color: "#1B1B1B",
    width: "20px",
    height: "20px",
    }

const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style11Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style11Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style11Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style11Path[ICON_ATTRIBUTE] = ON_OPTION
Style11Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path

roundedOutlinedStyles.push(styleWrapper11)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style12 = {}
Style12 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "12px 15px 14px",
border: "1px solid #D1D1D1",
borderRadius: "24px",
}
Style12[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style12[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#A3A3A3",
    }
Style12[ICON_SUBCOMPONENT] = {
    color: "#A3A3A3",
    width: "20px",
    height: "20px",
    }
const Style12Path = {}
Style12Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style12Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style12Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style12Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style12Path[ICON_ATTRIBUTE] = ON_OPTION 
Style12Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper12 = {}
styleWrapper12[STYLE_OBJECT] = {...Style12}
styleWrapper12[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper12[PATH_STYLE] = Style12Path
roundedOutlinedStyles.push(styleWrapper12)

const Style13 = {}
Style13 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],

padding: "6px 15px 8px",
border: "1px solid #1B1B1B",
borderRadius: "24px",

}
Style13[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "5px 14px 7px",
border: "2px solid #1B1B1B",
}
Style13[TEXT_SUBCOMPONENT] = {
color: "#1B1B1B",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style13[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#1B1B1B",
    }
Style13[ICON_SUBCOMPONENT] = {
    color: "#1B1B1B",
    width: "20px",
    height: "20px",
    }
const Style13Path = {}
Style13Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style13Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style13Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style13Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style13Path[ICON_ATTRIBUTE] = ON_OPTION 
Style13Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper13 = {}
styleWrapper13[STYLE_OBJECT] = {...Style13}
styleWrapper13[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper13[PATH_STYLE] = Style13Path


roundedOutlinedStyles.push(styleWrapper13)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style14 = {}

Style14 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
height:"44px",
padding: "5px 14px 7px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style14[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#1B1B1B",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style14[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#1B1B1B",
    }
Style14[ICON_SUBCOMPONENT] = {
    color: "#1B1B1B",
    width: "20px",
    height: "20px",
    }
const Style14Path = {}
Style14Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style14Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style14Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style14Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style14Path[ICON_ATTRIBUTE] = ON_OPTION
Style14Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper14 = {}
styleWrapper14[STYLE_OBJECT] = {...Style14}
styleWrapper14[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper14[PATH_STYLE] = Style14Path

roundedOutlinedStyles.push(styleWrapper14)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style15 = {}
Style15 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "6px 15px 8px",
border: "1px solid #D1D1D1",
borderRadius: "24px",
}
Style15[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style15[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#A3A3A3",
    }
Style15[ICON_SUBCOMPONENT] = {
    color: "#A3A3A3",
    width: "20px",
    height: "20px",
    }
const Style15Path = {}
Style15Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style15Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style15Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style15Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style15Path[ICON_ATTRIBUTE] = ON_OPTION 
Style15Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper15 = {}
styleWrapper15[STYLE_OBJECT] = {...Style15}
styleWrapper15[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper15[PATH_STYLE] = Style15Path
roundedOutlinedStyles.push(styleWrapper15)

const Style16 = {}
Style16 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],

padding: "6px 15px 8px",
border: "1px solid #1B1B1B",
borderRadius: "24px",

}
Style16[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "5px 14px 7px",
border: "2px solid #1B1B1B",
}
Style16[TEXT_SUBCOMPONENT] = {
color: "#1B1B1B",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style16[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#1B1B1B",
    }
Style16[ICON_SUBCOMPONENT] = {
    color: "#1B1B1B",
    width: "20px",
    height: "20px",
    }
const Style16Path = {}
Style16Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style16Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style16Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style16Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style16Path[ICON_ATTRIBUTE] = ON_OPTION 
Style16Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper16 = {}
styleWrapper16[STYLE_OBJECT] = {...Style16}
styleWrapper16[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper16[PATH_STYLE] = Style16Path


roundedOutlinedStyles.push(styleWrapper16)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style17 = {}

Style17 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
height:"36px",
padding: "5px 14px 7px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style17[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#1B1B1B",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style17[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#1B1B1B",
    }
Style17[ICON_SUBCOMPONENT] = {
    color: "#1B1B1B",
    width: "20px",
    height: "20px",
    }
const Style17Path = {}
Style17Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style17Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style17Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style17Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style17Path[ICON_ATTRIBUTE] = ON_OPTION
Style17Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper17 = {}
styleWrapper17[STYLE_OBJECT] = {...Style17}
styleWrapper17[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper17[PATH_STYLE] = Style17Path

roundedOutlinedStyles.push(styleWrapper17)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style18 = {}
Style18 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "6px 15px 8px",
border: "1px solid #D1D1D1",
borderRadius: "24px",
}
Style18[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style18[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#A3A3A3",
    }
Style18[ICON_SUBCOMPONENT] = {
    color: "#A3A3A3",
    width: "20px",
    height: "20px",
    }
const Style18Path = {}
Style18Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style18Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style18Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style18Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style18Path[ICON_ATTRIBUTE] = ON_OPTION 
Style18Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper18 = {}
styleWrapper18[STYLE_OBJECT] = {...Style18}
styleWrapper18[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper18[PATH_STYLE] = Style18Path
roundedOutlinedStyles.push(styleWrapper18)

const Style19 = {}
Style19 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "12px 15px 14px",
border: "1px solid #FFFFFF",
borderRadius: "24px",

}
Style19[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "11px 14px 13px",
border: "2px solid #FFFFFF",
}
Style19[TEXT_SUBCOMPONENT] = {
color: "#FFFFFF",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style19Path = {}
Style19Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style19Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style19Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style19Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style19Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style19Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper19 = {}
styleWrapper19[STYLE_OBJECT] = {...Style19}
styleWrapper19[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper19[PATH_STYLE] = Style19Path




//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style20 = {}

Style20 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height:"52px",
padding: "11px 14px 13px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style20[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#FFFFFF",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}


const Style20Path = {}
Style20Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style20Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style20Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style20Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style20Path[ICON_ATTRIBUTE] = OFF_OPTION
Style20Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper20 = {}
styleWrapper20[STYLE_OBJECT] = {...Style20}
styleWrapper20[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper20[PATH_STYLE] = Style20Path

roundedOutlinedStyles.push(styleWrapper20)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style21 = {}
Style21 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "12px 15px 14px",
border: "1px solid #75787B",
borderRadius: "24px",
}
Style21[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style21Path = {}
Style21Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style21Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style21Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style21Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style21Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style21Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper21 = {}
styleWrapper21[STYLE_OBJECT] = {...Style21}
styleWrapper21[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper21[PATH_STYLE] = Style21Path
roundedOutlinedStyles.push(styleWrapper21)

const Style22 = {}
Style22 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],

padding: "6px 15px 8px",
border: "1px solid #FFFFFF",
borderRadius: "24px",

}
Style22[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "5px 14px 7px",
border: "2px solid #FFFFFF",
}
Style22[TEXT_SUBCOMPONENT] = {
color: "#FFFFFF",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style22Path = {}
Style22Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style22Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style22Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style22Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style22Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style22Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper22 = {}
styleWrapper22[STYLE_OBJECT] = {...Style22}
styleWrapper22[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper22[PATH_STYLE] = Style22Path


roundedOutlinedStyles.push(styleWrapper22)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style23 = {}

Style23 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height:"44px",
padding: "5px 14px 7px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style23[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#FFFFFF",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}


const Style23Path = {}
Style23Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style23Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style23Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style23Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style23Path[ICON_ATTRIBUTE] = OFF_OPTION
Style23Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper23 = {}
styleWrapper23[STYLE_OBJECT] = {...Style23}
styleWrapper23[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper23[PATH_STYLE] = Style23Path

roundedOutlinedStyles.push(styleWrapper23)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style24 = {}
Style24 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "6px 15px 8px",
border: "1px solid #75787B",
borderRadius: "24px",
}
Style24[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style24Path = {}
Style24Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style24Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style24Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style24Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style24Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style24Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper24 = {}
styleWrapper24[STYLE_OBJECT] = {...Style24}
styleWrapper24[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper24[PATH_STYLE] = Style24Path
roundedOutlinedStyles.push(styleWrapper24)

const Style25 = {}
Style25 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],

padding: "6px 15px 8px",
border: "1px solid #FFFFFF",
borderRadius: "24px",
}
Style25[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "5px 14px 7px",
border: "2px solid #FFFFFF",
}
Style25[TEXT_SUBCOMPONENT] = {
color: "#FFFFFF",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style25Path = {}
Style25Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style25Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style25Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style25Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style25Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style25Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper25 = {}
styleWrapper25[STYLE_OBJECT] = {...Style25}
styleWrapper25[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper25[PATH_STYLE] = Style25Path


roundedOutlinedStyles.push(styleWrapper25)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style26 = {}

Style26 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
height:"36px",
padding: "5px 14px 7px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style26[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#FFFFFF",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}


const Style26Path = {}
Style26Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style26Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style26Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style26Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style26Path[ICON_ATTRIBUTE] = OFF_OPTION
Style26Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper26 = {}
styleWrapper26[STYLE_OBJECT] = {...Style26}
styleWrapper26[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper26[PATH_STYLE] = Style26Path

roundedOutlinedStyles.push(styleWrapper26)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style27 = {}
Style27 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "6px 15px 8px",
border: "1px solid #75787B",
borderRadius: "24px",
}
Style27[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT]
}
const Style27Path = {}
Style27Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style27Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style27Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style27Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style27Path[ICON_ATTRIBUTE] = OFF_OPTION 
Style27Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper27 = {}
styleWrapper27[STYLE_OBJECT] = {...Style27}
styleWrapper27[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper27[PATH_STYLE] = Style27Path
roundedOutlinedStyles.push(styleWrapper27)

const Style28 = {}
Style28 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
padding: "12px 15px 14px",
border: "1px solid #FFFFFF",
borderRadius: "24px",

}
Style28[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "11px 14px 13px",
border: "2px solid #FFFFFF",
}
Style28[TEXT_SUBCOMPONENT] = {
color: "#FFFFFF",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}


Style28[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#FFFFFF",
    }
Style28[ICON_SUBCOMPONENT] = {
    color: "#FFFFFF",
    width: "20px",
    height: "20px",
    }
const Style28Path = {}
Style28Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style28Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style28Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style28Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style28Path[ICON_ATTRIBUTE] = ON_OPTION 
Style28Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper28 = {}
styleWrapper28[STYLE_OBJECT] = {...Style28}
styleWrapper28[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper28[PATH_STYLE] = Style28Path


roundedOutlinedStyles.push(styleWrapper28)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style29 = {}

Style29 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
height:"52px",
padding: "11px 14px 13px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style29[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#FFFFFF",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style29[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#FFFFFF",
    }
Style29[ICON_SUBCOMPONENT] = {
    color: "#FFFFFF",
    width: "20px",
    height: "20px",
    }

const Style29Path = {}
Style29Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style29Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style29Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style29Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style29Path[ICON_ATTRIBUTE] = ON_OPTION
Style29Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper29 = {}
styleWrapper29[STYLE_OBJECT] = {...Style29}
styleWrapper29[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper29[PATH_STYLE] = Style29Path

roundedOutlinedStyles.push(styleWrapper29)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style30 = {}
Style30 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "12px 15px 14px",
border: "1px solid #75787B",
borderRadius: "24px",
}
Style30[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style30[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#A3A3A3",
    }
Style30[ICON_SUBCOMPONENT] = {
    color: "#A3A3A3",
    width: "20px",
    height: "20px",
    }
const Style30Path = {}
Style30Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style30Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style30Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style30Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style30Path[ICON_ATTRIBUTE] = ON_OPTION 
Style30Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper30 = {}
styleWrapper30[STYLE_OBJECT] = {...Style30}
styleWrapper30[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper30[PATH_STYLE] = Style30Path
roundedOutlinedStyles.push(styleWrapper30)

const Style31 = {}
Style31 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],

padding: "6px 15px 8px",
border: "1px solid #FFFFFF",
borderRadius: "24px",

}
Style31[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "5px 14px 7px",
border: "2px solid #FFFFFF",
}
Style31[TEXT_SUBCOMPONENT] = {
color: "#FFFFFF",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style31[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#FFFFFF",
    }
Style31[ICON_SUBCOMPONENT] = {
    color: "#FFFFFF",
    width: "20px",
    height: "20px",
    }
const Style31Path = {}
Style31Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style31Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style31Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style31Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style31Path[ICON_ATTRIBUTE] = ON_OPTION 
Style31Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper31 = {}
styleWrapper31[STYLE_OBJECT] = {...Style31}
styleWrapper31[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper31[PATH_STYLE] = Style31Path


roundedOutlinedStyles.push(styleWrapper31)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style32 = {}

Style32 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
height:"44px",
padding: "5px 14px 7px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style32[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#FFFFFF",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style32[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#FFFFFF",
    }
Style32[ICON_SUBCOMPONENT] = {
    color: "#FFFFFF",
    width: "20px",
    height: "20px",
    }
const Style32Path = {}
Style32Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style32Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style32Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style32Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style32Path[ICON_ATTRIBUTE] = ON_OPTION
Style32Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper32 = {}
styleWrapper32[STYLE_OBJECT] = {...Style32}
styleWrapper32[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper32[PATH_STYLE] = Style32Path

roundedOutlinedStyles.push(styleWrapper32)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style33 = {}
Style33 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "6px 15px 8px",
border: "1px solid #75787B",
borderRadius: "24px",
}
Style33[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style33[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#A3A3A3",
    }
Style33[ICON_SUBCOMPONENT] = {
    color: "#A3A3A3",
    width: "20px",
    height: "20px",
    }
const Style33Path = {}
Style33Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style33Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style33Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style33Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style33Path[ICON_ATTRIBUTE] = ON_OPTION 
Style33Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper33 = {}
styleWrapper33[STYLE_OBJECT] = {...Style33}
styleWrapper33[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper33[PATH_STYLE] = Style33Path
roundedOutlinedStyles.push(styleWrapper33)

const Style34 = {}
Style34 [BUTTON_SUBCOMPONENT] = {
transition: "0.05s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
borderRadius: "24px",
padding: "6px 15px 8px",
border: "1px solid #FFFFFF",

}
Style34[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
padding: "5px 14px 7px",
border: "2px solid #FFFFFF",
}
Style34[TEXT_SUBCOMPONENT] = {
color: "#FFFFFF",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style34[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#FFFFFF",
    }
Style34[ICON_SUBCOMPONENT] = {
    color: "#FFFFFF",
    width: "20px",
    height: "20px",
    }
const Style34Path = {}
Style34Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style34Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style34Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style34Path [STATE_ATTRIBUTE] = ACTIVE_OPTION
Style34Path[ICON_ATTRIBUTE] = ON_OPTION 
Style34Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION 

const styleWrapper34 = {}
styleWrapper34[STYLE_OBJECT] = {...Style34}
styleWrapper34[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper34[PATH_STYLE] = Style34Path


roundedOutlinedStyles.push(styleWrapper34)


//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK NORMAL ONICON *//

const Style35 = {}

Style35 [BUTTON_SUBCOMPONENT] = {
transition: "0.2s all ease-in-out",
background: "transparent",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
height:"36px",
padding: "5px 14px 7px",
border: "4px solid #33A1AB",
borderRadius: "24px",
}
Style35[TEXT_SUBCOMPONENT] = {
position: "static",
color: "#FFFFFF",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}

Style35[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#FFFFFF",
    }
Style35[ICON_SUBCOMPONENT] = {
    color: "#FFFFFF",
    width: "20px",
    height: "20px",
    }
const Style35Path = {}
Style35Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style35Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style35Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style35Path [STATE_ATTRIBUTE] = FOCUS_OPTION
Style35Path[ICON_ATTRIBUTE] = ON_OPTION
Style35Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION  

const styleWrapper35 = {}
styleWrapper35[STYLE_OBJECT] = {...Style35}
styleWrapper35[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper35[PATH_STYLE] = Style35Path

roundedOutlinedStyles.push(styleWrapper35)
//*----------------NEW BUTTON ------------------------*/
//* PRIMARY DESKTOP BLACK DISABLED OFFICON *//
const Style36 = {}
Style36 [BUTTON_SUBCOMPONENT] = {
background: "transparent",

...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][BUTTON_SUBCOMPONENT],
cursor: "default",
padding: "6px 15px 8px",
border: "1px solid #75787B",
borderRadius: "24px",
}
Style36[TEXT_SUBCOMPONENT] = {
color: "#A3A3A3",
...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][TEXT_SUBCOMPONENT]
}
Style36[ICON_CONTAINER_SUBCOMPONENT] ={
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_ICON_VARIANT][ICON_CONTAINER_SUBCOMPONENT],
    color: "#A3A3A3",
    }
Style36[ICON_SUBCOMPONENT] = {
    color: "#A3A3A3",
    width: "20px",
    height: "20px",
    }
const Style36Path = {}
Style36Path[HIERARCHY_ATTRIBUTE] = ROUNDED_OUTLINED_OPTION
Style36Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style36Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style36Path [STATE_ATTRIBUTE] = INACTIVE_OPTION
Style36Path[ICON_ATTRIBUTE] = ON_OPTION 
Style36Path[WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper36 = {}
styleWrapper36[STYLE_OBJECT] = {...Style36}
styleWrapper36[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_ICON_VARIANT
styleWrapper36[PATH_STYLE] = Style36Path
roundedOutlinedStyles.push(styleWrapper36)


roundedOutlinedStyles.push(styleWrapper19)

const copyRoundedOutlinedStyles = []
roundedOutlinedStyles.forEach((style,index) => {
    copyRoundedOutlinedStyles.push(JSON.parse(JSON.stringify(style)))
    copyRoundedOutlinedStyles[index][STYLE_OBJECT][BUTTON_SUBCOMPONENT].width = "100%"
    copyRoundedOutlinedStyles[index][PATH_STYLE][WIDTH_ATTRIBUTE] = FULL_OPTION
})
roundedOutlinedStyles.push(...copyRoundedOutlinedStyles)

export  {roundedOutlinedStyles};