import axios from 'axios'
import weatherTemplate from '../templates/weather.js'

export const fetchWeatherData = async (event) => {
  try {
    const { data } = await axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-58000ABF-656A-44B9-B04F-2FC6DD911DEB&format=JSON&locationName=%E6%96%B0%E5%8C%97%E5%B8%82')
    const weatherCondition = data.records.location[0].weatherElement[0].time[0].parameter.parameterName
    const rainProbability = data.records.location[0].weatherElement[1].time[0].parameter.parameterName
    const minTemperature = data.records.location[0].weatherElement[2].time[0].parameter.parameterName
    const maxTemperature = data.records.location[0].weatherElement[3].time[0].parameter.parameterName
    const comfortIndex = data.records.location[0].weatherElement[4].time[0].parameter.parameterName
    const replies = []
    const template = weatherTemplate()
    template.body.contents[1].contents[0].contents[1].text = weatherCondition.toString()
    template.body.contents[1].contents[1].contents[1].text = rainProbability.toString() + '%'
    template.body.contents[1].contents[2].contents[1].text = comfortIndex.toString() + '°C'
    template.body.contents[1].contents[3].contents[1].text = minTemperature.toString() + '°C'
    template.body.contents[1].contents[4].contents[1].text = maxTemperature.toString()
    replies.push(template)
    const result = await event.reply({
      type: 'flex',
      altText: '天氣',
      contents: {
        type: 'carousel',
        contents: replies
      }
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
