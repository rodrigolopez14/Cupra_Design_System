import {primaryStyles} from "./primaryStyles.js"
import {secondaryStyles} from "./secondaryStyles.js"
import { roundedSolidStyles } from "./roundedSolidStyles.js"
import { roundedOutlinedStyles } from "./roundedOutlinedStyle.js"
import { hyperlinkStyles } from "./hyperlinkStyles.js"
import { tertiaryStyles } from "./tertiaryStyles.js"
import {PATH_STYLE,
        STYLE_KEY,
        STYLE_OBJECT,
        COMPONENT_VARIANT_KEY} from "../../commonMethodsAndConstants/Styles/commonConstants.js"
const allStylesObjects = {}
const allStylesKeysAndPaths = []

const allStyles = []
allStyles.push(...primaryStyles)
allStyles.push(...secondaryStyles)
allStyles.push(...roundedSolidStyles)
allStyles.push(...roundedOutlinedStyles)
allStyles.push(...hyperlinkStyles)
allStyles.push(...tertiaryStyles)
for (var i=0; i<allStyles.length;i++)
{
  var styleKey = "Button_Style_" + i

  var componentKeyAndPath = {}
  componentKeyAndPath[PATH_STYLE] = allStyles[i].path
  componentKeyAndPath[STYLE_KEY] = styleKey
  componentKeyAndPath[COMPONENT_VARIANT_KEY] = allStyles[i][COMPONENT_VARIANT_KEY]
  allStylesKeysAndPaths.push({...componentKeyAndPath})
  allStylesObjects[styleKey] = allStyles[i][STYLE_OBJECT]
}
export  {allStylesKeysAndPaths};
export  {allStylesObjects}
