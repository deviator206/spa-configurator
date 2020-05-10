import React from 'react'
import { Route } from 'react-router'
import utilsInstance from "../misc/Utility";
import {NavigatorHelper} from '../store/navigationMiddleware';
import Home from "../component/Home";
import HomeMeta from "../component/Home.meta.json"
import P2 from "../component/P2";
import P2Meta from "../component/P2.meta.json"
import P3 from "../component/P3";
import P3Meta from "../component/P3.meta.json";
import P4 from "../component/P4";
import P4Meta from "../component/P4.meta.json";

const appPageConfiguration = [
    {
        pageUrl: "/p2",
        componentName: "P2",
        componentLocation:"../component/P2",
        metaFileLocation: "../component/P2.meta.json",
        acutalComponent :P2,
        acutalComponentMeta :P2Meta,
    },
    {
        pageUrl: "/p3",
        componentName: "P3",
        componentLocation:"../component/P3",
        metaFileLocation: "../component/P3.meta.json",
        acutalComponent :P3,
        acutalComponentMeta :P3Meta,
    },
    {
        pageUrl: "/p4",
        componentName: "P4",
        componentLocation:"../component/P4",
        metaFileLocation: "../component/P4.meta.json",
        acutalComponent :P4,
        acutalComponentMeta :P4Meta,
    },
    {
        pageUrl: "/",
        componentName: "Home",
        componentLocation:"../component/Home",
        metaFileLocation: "../component/Home.meta.json",
        acutalComponent :Home,
        acutalComponentMeta :HomeMeta,
    }
]


class PageImports {
    loadAllPagesAndGetRoutes =  (routeList = []) => {
        let allCoveredPages = 0;
        while(allCoveredPages < appPageConfiguration.length) {
            routeList.push(this.loadComponentAndMeta(appPageConfiguration[allCoveredPages]));
           // this.loadComponentAndMeta(appPageConfiguration[allCoveredPages]);
            allCoveredPages++;
        }
        return routeList;
    }
    loadComponentAndMeta = (singlePage)=> {
        //const acutalConnectedComponent = await import(singlePage.componentLocation);
        //const acutalComponentMeta = await import(singlePage.metaFileLocation);
        let acutalConnectedComponent = singlePage.acutalComponent;
        let acutalComponentMeta = singlePage.acutalComponentMeta;
        // utilsInstance.pushToGlobal(acutalConnectedComponent,acutalComponentMeta);
        NavigatorHelper.addOutcomes(acutalComponentMeta.navigation);
        return (<Route key={acutalComponentMeta.name} exact path={singlePage.pageUrl} component={acutalConnectedComponent} />);
    }
}

export {
    appPageConfiguration
}
export default PageImports;