import {HIERARCHY_ATTRIBUTE, 
    SIZE_ATTRIBUTE, 
    COLOR_ATTRIBUTE,
    LINE_ATTRIBUTE,
    ICON_ATTRIBUTE,
    WIDTH_ATTRIBUTE} from "../constants.js"
import {HYPERLINK_OPTION,
    LARGE_OPTION,
    MEDIUM_OPTION,
    SMALL_OPTION,
    DARK_OPTION,
    LIGHT_OPTION,
    TITLE_OPTION,
    PARAGRAPH_OPTION,
    OFF_OPTION,
    FIT_CONTENT_OPTION,
    FULL_OPTION} from "../constants.js"
import {BUTTON_SUBCOMPONENT,
        TEXT_SUBCOMPONENT } from "../constants.js"
import {HOVER_BUTTON_EVENT} from "../constants.js"
import {REGULAR_BUTTON_VARIANT} from "../constants.js"
import {PATH_STYLE,STYLE_OBJECT,COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
import { SIZE_STYLES } from "./commonStyles.js"
const hyperlinkStyles = []

const Style1 = {}
Style1 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "24px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#1B1B1B",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style1[BUTTON_SUBCOMPONENT].minWidth
Style1[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#666666",
}
Style1[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#1B1B1B",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "23px",
    height: "23px",
    fontWeight: "350",
    padding: "0px",

}
Style1[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#666666",
}
const Style1Path = {}
Style1Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style1Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style1Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style1Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style1Path [ICON_ATTRIBUTE] = OFF_OPTION
Style1Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper1 = {}
styleWrapper1[STYLE_OBJECT] = {...Style1}
styleWrapper1[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper1[PATH_STYLE] = Style1Path
hyperlinkStyles.push(styleWrapper1)

const Style2 = {}
Style2 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "20px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#1B1B1B",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style2[BUTTON_SUBCOMPONENT].minWidth
Style2[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#666666",
}
Style2[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#1B1B1B",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "19px",
    height: "19px",
    fontWeight: "350",
    padding: "0px",

}
Style2[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#666666",
}
const Style2Path = {}
Style2Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style2Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style2Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style2Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style2Path [ICON_ATTRIBUTE] = OFF_OPTION
Style2Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper2 = {}
styleWrapper2[STYLE_OBJECT] = {...Style2}
styleWrapper2[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper2[PATH_STYLE] = Style2Path
hyperlinkStyles.push(styleWrapper2)

const Style3 = {}
Style3 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "20px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#1B1B1B",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style3[BUTTON_SUBCOMPONENT].minWidth
Style3[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#666666",
}
Style3[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#1B1B1B",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "19px",
    height: "19px",
    fontWeight: "350",
    padding: "0px",

}
Style3[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#666666",
}
const Style3Path = {}
Style3Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style3Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style3Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style3Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style3Path [ICON_ATTRIBUTE] = OFF_OPTION
Style3Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper3 = {}
styleWrapper3[STYLE_OBJECT] = {...Style3}
styleWrapper3[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper3[PATH_STYLE] = Style3Path
hyperlinkStyles.push(styleWrapper3)

const Style4 = {}
Style4 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "16px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#1B1B1B",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style4[BUTTON_SUBCOMPONENT].minWidth
Style4[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#666666",
}
Style4[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#1B1B1B",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "15px",
    height: "15px",
    fontWeight: "350",
    padding: "0px",

}
Style4[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#666666",
}
const Style4Path = {}
Style4Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style4Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style4Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style4Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style4Path [ICON_ATTRIBUTE] = OFF_OPTION
Style4Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper4 = {}
styleWrapper4[STYLE_OBJECT] = {...Style4}
styleWrapper4[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper4[PATH_STYLE] = Style4Path
hyperlinkStyles.push(styleWrapper4)


const Style5 = {}
Style5 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "16px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#1B1B1B",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style5[BUTTON_SUBCOMPONENT].minWidth
Style5[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#666666",
}
Style5[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#1B1B1B",
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "15px",
    height: "15px",
    fontWeight: "350",
    padding: "0px",

}
Style5[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#666666",
}
const Style5Path = {}
Style5Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style5Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style5Path[COLOR_ATTRIBUTE] = LIGHT_OPTION
Style5Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style5Path [ICON_ATTRIBUTE] = OFF_OPTION
Style5Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper5 = {}
styleWrapper5[STYLE_OBJECT] = {...Style5}
styleWrapper5[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper5[PATH_STYLE] = Style5Path
hyperlinkStyles.push(styleWrapper5)


const styleWrapper6 = JSON.parse(JSON.stringify(styleWrapper5))
styleWrapper6[PATH_STYLE][LINE_ATTRIBUTE] = TITLE_OPTION
hyperlinkStyles.push(styleWrapper6)

const Style7 = {}
Style7 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "24px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style7[BUTTON_SUBCOMPONENT].minWidth
Style7[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#A3A3A3",
}
Style7[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#FFFFFF",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "23px",
    height: "23px",
    fontWeight: "350",
    padding: "0px",

}
Style7[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}
const Style7Path = {}
Style7Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style7Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style7Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style7Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style7Path [ICON_ATTRIBUTE] = OFF_OPTION
Style7Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper7 = {}
styleWrapper7[STYLE_OBJECT] = {...Style7}
styleWrapper7[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper7[PATH_STYLE] = Style7Path
hyperlinkStyles.push(styleWrapper7)

const Style8 = {}
Style8 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "20px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style8[BUTTON_SUBCOMPONENT].minWidth
Style8[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#A3A3A3",
}
Style8[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#FFFFFF",
    ...SIZE_STYLES[LARGE_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "19px",
    height: "19px",
    fontWeight: "350",
    padding: "0px",

}
Style8[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}
const Style8Path = {}
Style8Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style8Path[SIZE_ATTRIBUTE] = LARGE_OPTION
Style8Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style8Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style8Path [ICON_ATTRIBUTE] = OFF_OPTION
Style8Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper8 = {}
styleWrapper8[STYLE_OBJECT] = {...Style8}
styleWrapper8[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper8[PATH_STYLE] = Style8Path
hyperlinkStyles.push(styleWrapper8)

const Style9 = {}
Style9 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "20px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style9[BUTTON_SUBCOMPONENT].minWidth
Style9[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#A3A3A3",
}
Style9[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#FFFFFF",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "19px",
    height: "19px",
    fontWeight: "350",
    padding: "0px",

}
Style9[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}
const Style9Path = {}
Style9Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style9Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style9Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style9Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style9Path [ICON_ATTRIBUTE] = OFF_OPTION
Style9Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper9 = {}
styleWrapper9[STYLE_OBJECT] = {...Style9}
styleWrapper9[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper9[PATH_STYLE] = Style9Path
hyperlinkStyles.push(styleWrapper9)

const Style10 = {}
Style10 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "16px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style10[BUTTON_SUBCOMPONENT].minWidth
Style10[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#A3A3A3",
}
Style10[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#FFFFFF",
    ...SIZE_STYLES[MEDIUM_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "15px",
    height: "15px",
    fontWeight: "350",
    padding: "0px",

}
Style10[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}
const Style10Path = {}
Style10Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style10Path[SIZE_ATTRIBUTE] = MEDIUM_OPTION
Style10Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style10Path [LINE_ATTRIBUTE] = TITLE_OPTION
Style10Path [ICON_ATTRIBUTE] = OFF_OPTION
Style10Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper10 = {}
styleWrapper10[STYLE_OBJECT] = {...Style10}
styleWrapper10[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper10[PATH_STYLE] = Style10Path
hyperlinkStyles.push(styleWrapper10)


const Style11 = {}
Style11 [BUTTON_SUBCOMPONENT] = {
    
    transition: "0.2s all ease-in-out",
    background: "transparent",
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][BUTTON_SUBCOMPONENT],
    padding: "0px",
    height: "16px",
    borderStyle: "none",
    borderBottomStyle: "solid",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: "1px",
    flexDirection: "column",
    alignItems: "flexStart",
}
delete Style11[BUTTON_SUBCOMPONENT].minWidth
Style11[BUTTON_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    borderBottomColor: "#A3A3A3",
}
Style11[TEXT_SUBCOMPONENT] = {
    transition: "0.2s all ease-in-out",
    color: "#FFFFFF",
    ...SIZE_STYLES[SMALL_OPTION][REGULAR_BUTTON_VARIANT][TEXT_SUBCOMPONENT],
    lineHeight: "15px",
    height: "15px",
    fontWeight: "350",
    padding: "0px",

}
Style11[TEXT_SUBCOMPONENT][HOVER_BUTTON_EVENT] = {
    color: "#A3A3A3",
}
const Style11Path = {}
Style11Path[HIERARCHY_ATTRIBUTE] = HYPERLINK_OPTION
Style11Path[SIZE_ATTRIBUTE] = SMALL_OPTION
Style11Path[COLOR_ATTRIBUTE] = DARK_OPTION
Style11Path [LINE_ATTRIBUTE] = PARAGRAPH_OPTION
Style11Path [ICON_ATTRIBUTE] = OFF_OPTION
Style11Path [WIDTH_ATTRIBUTE] = FIT_CONTENT_OPTION

const styleWrapper11 = {}
styleWrapper11[STYLE_OBJECT] = {...Style11}
styleWrapper11[COMPONENT_VARIANT_KEY] = REGULAR_BUTTON_VARIANT
styleWrapper11[PATH_STYLE] = Style11Path
hyperlinkStyles.push(styleWrapper11)

const styleWrapper12 = JSON.parse(JSON.stringify(styleWrapper11))
styleWrapper12[PATH_STYLE][LINE_ATTRIBUTE] = TITLE_OPTION
hyperlinkStyles.push(styleWrapper12)

const copyHyperlinkStyles = []
hyperlinkStyles.forEach((style,index) => {
    copyHyperlinkStyles.push(JSON.parse(JSON.stringify(style)))
    copyHyperlinkStyles[index][PATH_STYLE][WIDTH_ATTRIBUTE] = FULL_OPTION
})
hyperlinkStyles.push(...copyHyperlinkStyles)

export {hyperlinkStyles}