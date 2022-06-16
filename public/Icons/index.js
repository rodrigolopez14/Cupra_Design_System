import { ICON_ATTRIBUTES, 
         ICON_SELECTION_ATTRIBUTE} from './constants.js';
import {ICON_WIDTH_ATTRIBUTE,ICON_HEIGHT_ATTRIBUTE, ICON_COLOR_ATTRIBUTE} from "./constants.js"
import { PARTICULAR_ICON_COMPONENT_ATTRIBUTE } from './constants.js';
import {NAME_OF_COMPONENT} from './constants.js'
import components from './variants/index.js'
import icons from './allIcons.js'
export  class SvgIconSeat extends HTMLElement {
    constructor() 
    {
        super();
    }
    static get observedAttributes() { return [ICON_COLOR_ATTRIBUTE, ICON_HEIGHT_ATTRIBUTE, ICON_WIDTH_ATTRIBUTE]; }
    attributeChangedCallback(name,oldValue,newValue) 
    {
        
        if (oldValue!== null && oldValue!== newValue) {
            console.log('hee')
            this.innerHTML = this.construction(this)}
    }
    construction (WebComponent)
    {
        const attributes = {}
        ICON_ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
        if (WebComponent.getAttribute(ATTRIBUTE.attributeName)) attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(WebComponent.getAttribute(ATTRIBUTE.attributeName))
        else attributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
        })
        const iconSelected = attributes[ICON_SELECTION_ATTRIBUTE]
        attributes[ICON_SELECTION_ATTRIBUTE] = icons[iconSelected]
        const functionComponent = attributes[ICON_SELECTION_ATTRIBUTE][PARTICULAR_ICON_COMPONENT_ATTRIBUTE] 
        const svgEl = components[functionComponent](attributes)
        //svgEl.style.display = 'contents'
        const div = document.createElement('div')
        div.style.display = 'flex'
        div.style.alignItems = 'center'
        div.style.justifyContent = 'center'

        div.appendChild(svgEl)
        return div.outerHTML
    }
    connectedCallback() 
    {
        this.innerHTML = this.construction(this)
        
        
    }
}
if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends SvgIconSeat {});
export const ICON = NAME_OF_COMPONENT;

