"use strict";
const configs = require('./configs');
const template = require('./template');
const markdown = require('./markdown');
const yaml = require('./yaml');
const procs = require('./processors');

module.exports = {
    init: function (config) {
        configs.add(config);
        return require('./plugins');
    },
    configs: configs.args,
    addConfig: chaining(configs.add),
    template: template.run,
    markdown: markdown.run,
    loadYaml: yaml.load,
    run: procs.run,
    processorFor: procs.processorFor,
    registerHelper: chaining(template.registerHelper),
    registerProcessor: chaining(procs.registerProcessor),
    registerTag: chaining(yaml.registerTag)
};

function chaining(func) {
    return function () {
        func.apply(null, arguments);
        return module.exports;
    };
}