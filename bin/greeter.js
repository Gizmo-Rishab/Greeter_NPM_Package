#!/usr/bin/env node
const greeter = require("../index");
const argv = require("yargs").argv;

console.log(greeter(typeof argv.name === "string" ? argv.name : undefined));
