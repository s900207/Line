import axios from 'axios'
import * as cheerio from 'cheerio'
import oilTemplate from '../templates/oil.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://gas.goodlife.tw/')
    const $ = cheerio.load(data)
    let combinedText
    $('.main p:not(:contains("＊實際漲幅受亞洲鄰國油價限制"))').each(function () {
      const oilText = $(this).text().trim()
      const h2Text = $('.main h2').text().trim()
      combinedText = oilText + h2Text
    })
    const oilPrice92 = $('#cpc li:first-child').contents().last().text().trim()
    const oilPrice95 = $('#cpc li:eq(1)').contents().last().text().trim()
    const oilPrice98 = $('#cpc li:eq(2)').contents().last().text().trim()
    const replies = []
    const template = oilTemplate()
    template.body.contents[1].contents[0].contents[0].text = combinedText.toString()
    template.body.contents[1].contents[1].contents[1].text = oilPrice92.toString() + '元'
    template.body.contents[1].contents[2].contents[1].text = oilPrice95.toString() + '元'
    template.body.contents[1].contents[3].contents[1].text = oilPrice98.toString() + '元'
    replies.push(template)
    const result = await event.reply({
      type: 'flex',
      altText: '油價',
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
