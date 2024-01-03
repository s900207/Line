import 'dotenv/config'
import linebot from 'linebot'
import oil from './commands/oil.js'
import * as usdtwd from './data/usdtwd.js'
import * as weather from './commands/weather.js'
import * as chiayi from './commands/chiayi.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  console.log('Received message event:', event)
  if (event.message.type === 'text') {
    if (event.message.text === '油價') {
      oil(event)
    } if (event.message.text === '匯率') {
      usdtwd.fetchUsdtwdData(event)
    } if (event.message.text === '天氣-新北市') {
      weather.fetchWeatherData(event)
    } else if (event.message.text === '天氣-嘉義縣') {
      chiayi.fetchChiayiData(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
