const Timer = require('./index.js');

async function test() {
	var timer = new Timer();
	timer.config.interval = 10000;
	timer.config.num = 16;
	timer.config.date_start = "2020-11-10 10:51";
	timer.config.date_end = "2020-11-10 10:55";
	timer.config.time = "";
	
	await timer.run(function() {
		console.log(timer.num);
	});
	
	setTimeout(() => {
		timer.stop();
	}, 120000);
	
	setTimeout(() => {
		timer.start();
	}, 140000);
	
	// setTimeout(() => {
	// 	timer.end();
	// }, 180000);
	// timer.clear(3000); // 等待5000毫秒后，清除定时器。
}
test();