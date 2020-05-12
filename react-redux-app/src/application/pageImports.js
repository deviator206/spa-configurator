import React from 'react'
import { Route } from 'react-router'
import { navigatorHelperInstance } from '../store/NavigatorHelper';
import RuleMetaJSON from '../component/rules-meta.json';
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
        name: "p2",
        componentLocation: "../component/P2",
        metaFileLocation: "../component/P2.meta.json",
        acutalComponent: P2,
        acutalComponentMeta: P2Meta,
    },
    {
        pageUrl: "/p3",
        name: "p3",
        componentLocation: "../component/P3",
        metaFileLocation: "../component/P3.meta.json",
        acutalComponent: P3,
        acutalComponentMeta: P3Meta,
    },
    {
        pageUrl: "/p4",
        name: "p4",
        componentLocation: "../component/P4",
        metaFileLocation: "../component/P4.meta.json",
        acutalComponent: P4,
        acutalComponentMeta: P4Meta,
    },
    {
        pageUrl: "/",
        name: "home",
        componentLocation: "../component/Home",
        metaFileLocation: "../component/Home.meta.json",
        acutalComponent: Home,
        acutalComponentMeta: HomeMeta,
    }
]


class PageImports {
    loadAllPagesAndGetRoutes = (appConfig, routeList = []) => {
        let allCoveredPages = 0;
        while (allCoveredPages < appPageConfiguration.length) {
            routeList.push(this.loadComponentAndMeta(appPageConfiguration[allCoveredPages], appConfig));
            allCoveredPages++;
        }

        // update Rule Defs
        navigatorHelperInstance.setRuleDefinitions({
            ...RuleMetaJSON.ruleDefinition,
            ...appConfig.ruleDef
        });
        return routeList;
    }
    loadComponentAndMeta = (singlePage, appConfig) => {
        let acutalConnectedComponent = singlePage.acutalComponent;
        let acutalComponentMeta = singlePage.acutalComponentMeta;
        if (appConfig && appConfig.uiPages && appConfig.uiPages[singlePage.name] && appConfig.uiPages[singlePage.name].navigation) {
            // if exist in server response override the default configuration
            acutalComponentMeta = {
                navigation: {
                    ...acutalComponentMeta.navigation,
                    ...appConfig.uiPages[singlePage.name].navigation,
                }
            };
        }
        navigatorHelperInstance.addOutcomes(acutalComponentMeta.navigation, acutalComponentMeta.name);
        return (<Route key={acutalComponentMeta.name} exact path={singlePage.pageUrl} component={acutalConnectedComponent} />);
    }
}

export {
    appPageConfiguration
}
export default PageImports;