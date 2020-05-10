class Utility {
    constructor(){
        this.namespace = 'spaconf';
    }
    pushToGlobal = (connectedComponent,pageConfig)=>{
        window[this.namespace+""+pageConfig.name] = {
            component :connectedComponent,
            config:pageConfig
        }
    }
    getGlobalValue =(key)=> {
        return window[this.namespace+""+key];
    }
    getGlobalSetComponent = (pageName) => {
        return window[this.namespace+""+pageName].component;
    }
    getGlobalSetPageConfig = (pageName) => {
        return window[this.namespace+""+pageName].config;
    }
}
const utilsInstance = new Utility();

export default utilsInstance