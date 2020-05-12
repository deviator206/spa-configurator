import { Engine, Rule, Fact } from 'json-rules-engine';


class RuleExecutor {
    constructor() {
        this.engine = new Engine();
        this.excuteRule = this.excuteRule.bind(this);
        this.addRule = this.addRule.bind(this);
    }

    addRule(ruleConfig) {
        let simpleRule = new Rule(ruleConfig);
        this.engine.addRule(simpleRule);
    }
    addFact(factConfig) {
        let simpleFact = new Fact('app-fact',(params, almanac)=>{
            return {
                ...factConfig
            }
        }, {cache:false});
        this.engine.addFact(simpleFact);
    }

    excuteRule(ruleConfig, factConfig) {
        this.addRule(ruleConfig);
        return this.engine.run(factConfig)
    }

    excuteRule1(ruleConfig, factConfig) {
        this.addRule(ruleConfig);
        this.engine
            .run(factConfig)
            .then(results => { // engine returns an object with a list of events with truthy conditions
                results.events.map(event => console.log("RESULTS:#######:",event.params))
            })
            .catch((err) => {
                console.log(">>> ## ", err)
            })
    }
}

export default RuleExecutor;

const RuleExecutorInstance = new RuleExecutor();
export {
    RuleExecutorInstance
}