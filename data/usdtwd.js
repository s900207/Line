import axios from 'axios'
import usdtwdTemplate from '../templates/usdtwd.js'

export let exrateTWD = 0
export let exrateJPY = 0
export let exrateTJPY = 0
export const fetchUsdtwdData = async (event) => {
  try {
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    exrateTWD = data.USDTWD.Exrate
    exrateJPY = data.USDJPY.Exrate
    exrateTJPY = exrateTWD / exrateJPY
    const replies = []
    const template = usdtwdTemplate()
    template.body.contents[2].contents[0].contents[1].text = exrateTWD.toFixed(3)
    template.body.contents[2].contents[1].contents[1].text = exrateTJPY.toFixed(3)
    replies.push(template)
    const result = await event.reply({
      type: 'flex',
      altText: '匯率',
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
