export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '匯率',
          weight: 'bold',
          size: 'xxl',
          margin: 'md'
        },
        {
          type: 'separator',
          margin: 'xxl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'xxl',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '美金兌台幣',
                  size: 'sm',
                  color: '#555555',
                  flex: 0
                },
                {
                  type: 'text',
                  text: '$',
                  size: 'sm',
                  color: '#111111',
                  align: 'end'
                }
              ]
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                  text: '日幣兌台幣'
                },
                {
                  type: 'text',
                  text: '$',
                  size: 'sm',
                  color: '#111111',
                  align: 'end'
                }
              ]
            },
            {
              type: 'separator',
              margin: 'xxl'
            }
          ]
        },
        {
          type: 'box',
          layout: 'horizontal',
          margin: 'md',
          contents: [
            {
              type: 'text',
              text: '謹慎理財，出國至上',
              size: 'xs',
              color: '#aaaaaa',
              flex: 0
            }
          ]
        }
      ]
    },
    styles: {
      footer: {
        separator: true
      }
    }
  }
}
