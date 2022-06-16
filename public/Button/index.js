import {ICON_ATTRIBUTE,
        ICON_SELECTION_ATTRIBUTE,
        CHILDREN_ATTRIBUTE,
        SIZE_ATTRIBUTE,
        STATE_ATTRIBUTE,
        INACTIVE_OPTION
        } from "./constants.js"
import {ON_OPTION,
        OFF_OPTION,
        ICON_DEFAULT } from "./constants.js"
import {ATTRIBUTES} from "./constants.js"
import {setKeys} from "./styles/index.js"
import {COMPONENTS} from "./variants/index.js"
import {NAME_OF_COMPONENT} from "./constants.js"
import {COMPONENT_VARIANT_KEY,STYLE_KEY} from "../commonMethodsAndConstants/Styles/commonConstants.js"

class vanillaButton extends HTMLElement {
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.buttonOrAnchor = []
        this.keysAttributes = null
        this.dataAttributes = null
        
    }
    static get observedAttributes() { return [STATE_ATTRIBUTE]; }

    attributeChangedCallback() 
    {       
        const state = this.getAttribute(STATE_ATTRIBUTE)
        if (this.dataAttributes!== null)
        {
          if (state !== this.dataAttributes[STATE_ATTRIBUTE]  )
          {
            this.dataAttributes[STATE_ATTRIBUTE] = state
            this.keysAttributes[STATE_ATTRIBUTE] = state
            const stylesKeys = setKeys(this.keysAttributes)
        
            this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
            const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (this.dataAttributes)
            if (this.dataAttributes[STATE_ATTRIBUTE]!== INACTIVE_OPTION) button.onclick = () => {this.buttonOrAnchor[0].click()}

            this.shadow.removeChild(this.shadow.children[1])
            this.shadow.appendChild(button)
          }
        }
    }
    construction() {
        
        //CREATION OF A DEFAULT BUTTON IF NOTHING IS APPENDED 
        const buttonDefault = document.createElement('button')
        const textNode = document.createTextNode('Call to action')
        buttonDefault.appendChild(textNode)
        buttonDefault.onclick = () => {alert('Call to action')}
        this.buttonOrAnchor.push(buttonDefault)
        if (this.getElementsByTagName('button').length>0) 
        {
            this.buttonOrAnchor.pop()
            this.buttonOrAnchor.push(this.getElementsByTagName('button')[0])
        }
        else if (this.getElementsByTagName('a').length>0) 
        {
            this.buttonOrAnchor.pop()
            this.buttonOrAnchor.push(this.getElementsByTagName('a')[0])
        }
        const slotContainer = document.createElement('div')
        slotContainer.style.display = 'none'
        const slotSubComponent = document.createElement('slot')

        this.dataAttributes = {}
        ATTRIBUTES.forEach((ATTRIBUTE)=>{ 
            if (this.getAttribute(ATTRIBUTE.attributeName)) this.dataAttributes[ATTRIBUTE.attributeName] = ATTRIBUTE.proccessValue(this.getAttribute(ATTRIBUTE.attributeName))
            else this.dataAttributes[ATTRIBUTE.attributeName] = ATTRIBUTE.defaultValue
                        })
        if (!this.getAttribute(SIZE_ATTRIBUTE)) this.setAttribute(SIZE_ATTRIBUTE,this.dataAttributes[SIZE_ATTRIBUTE])
        
        this.keysAttributes = {...this.dataAttributes}
        delete this.keysAttributes[CHILDREN_ATTRIBUTE];
        delete this.keysAttributes[ICON_SELECTION_ATTRIBUTE];
        if (this.dataAttributes[ICON_SELECTION_ATTRIBUTE] === ICON_DEFAULT) this.keysAttributes[ICON_ATTRIBUTE] = OFF_OPTION
        else this.keysAttributes[ICON_ATTRIBUTE] = ON_OPTION

        const stylesKeys = setKeys(this.keysAttributes)
        
        this.dataAttributes[STYLE_KEY] = stylesKeys[STYLE_KEY]
        this.dataAttributes[CHILDREN_ATTRIBUTE] = this.buttonOrAnchor[0].textContent
        const button = COMPONENTS[stylesKeys[COMPONENT_VARIANT_KEY]] (this.dataAttributes)
        if (this.dataAttributes[STATE_ATTRIBUTE]!== INACTIVE_OPTION) button.onclick = () => {this.buttonOrAnchor[0].click()}
       
        this.shadow.appendChild(slotContainer)
            slotContainer.appendChild(slotSubComponent)
                        slotSubComponent.appendChild(this.buttonOrAnchor[0])
        this.shadow.appendChild(button) 
        this.style.display = 'contents'
      }
      connectedCallback() {
        const WebComponent = this
        WebComponent.style.display = 'none'
        
        if (document.readyState === 'loading') {  // Loading hasn't finished yet
          document.addEventListener('DOMContentLoaded', WebComponent.construction);
        } else {  // `DOMContentLoaded` has already fired
          WebComponent.construction();
        }
      }
      
}

if (customElements.get(NAME_OF_COMPONENT) === undefined) customElements.define(NAME_OF_COMPONENT, class extends vanillaButton {});
export const CUPRA_BUTTON = NAME_OF_COMPONENT;
