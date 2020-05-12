let RuleEngine = require('json-rules-engine');
let engine = new RuleEngine.Engine();
const rule = new RuleEngine.Rule({
    // define the 'conditions' for when "hello world" should display
    conditions: {
      all: [{
        fact: 'displayMessage',
        operator: 'equal',
        value: true,
        path:"$.here"
      }]
    },
    // define the 'event' that will fire when the condition evaluates truthy
    event: {
      type: 'message',
      params: {
        data: 'hello-world!'
      }
    }
  });
// add rule to engine
engine.addRule(rule)
const facts = { displayMessage: true }
engine.run(facts).then(results => { // engine returns an object with a list of events with truthy conditions
    console.log(results.events);
  }).catch(console.log);
  