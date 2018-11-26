const schedule = require('node-schedule');
const cron = ({ second = 1}={})=> {
    const rule = `${second} * * * * *`
    const job = schedule.scheduleJob(rule, async () => {
        testFn()
    })
}
const testFn = () => {
    console.log(1111);
}
cron({second: 1})