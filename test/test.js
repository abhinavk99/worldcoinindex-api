'use strict';

const Config = require('./testConfig.json');
var expect = require('chai').expect;
const WorldCoinIndex = require('../index');

describe('#WorldCoinIndex', function() {
	it('should be defined', function() {
		expect(WorldCoinIndex).to.exist;
	});

	it('should return WorldCoinIndex client', function() {
		const client = new WorldCoinIndex(Config.key);
		expect(client.getTicker).to.exist;
		expect(client.getMarkets).to.exist;
	});

	it('should get ticker information', async function() {
		const client = new WorldCoinIndex(Config.key);
		var tickers = await client.getTicker(['ethbtc', 'ltcbtc'], 'btc');
		expect(tickers).to.be.an('object');
	});

	it('should get markets information', async function() {
		const client = new WorldCoinIndex(Config.key);
		var markets = await client.getMarkets('btc');
		expect(markets).to.be.an('object');
	});
});