(function() {
  'use strict';

  const items = [
    {
      startDate: '2022/04/01 00:00:00',
      endDate: '2022/04/02 00:00:00',
      url: 'https://example.jp/01/',
    },
    {
      startDate: '2022/04/02 00:00:00',
      endDate: '2022/04/03 00:00:00',
      url: 'https://example.jp/02/',
    },
    {
      startDate: '2022/04/03 00:00:00',
      endDate: '2022/04/04 00:00:00',
      url: 'https://example.jp/03/',
    },
    {
      startDate: '2022/04/04 00:00:00',
      endDate: '2022/04/05 00:00:00',
      url: 'https://example.jp/04/',
    },
    {
      startDate: '2022/04/04 00:00:00',
      endDate: '2022/04/05 00:00:00',
      url: 'https://example.jp/09/',
    },
  ]
  /**
   * currentDateがstartDate〜endDateの期間内であればtrue、期間外であればfalseを返すメソッド
   * @param {string} startDate
   * @param {string} endDate
   * @param {object} currentDate
   * @return {boolean}
   */
  const timer = function(startDate, endDate, currentDate) {
    const start = new Date(startDate + ' GMT+0900').getTime()
    const end = new Date(endDate + ' GMT+0900').getTime()
    const today = new Date(currentDate).getTime()
    return start <= today && today < end
  }

  document.addEventListener('DOMContentLoaded', function() {
    fetch('/assets/images/1x1.gif').then(function(response) {
      const currentDate = response.headers.get('Date')
      for (let i = 0; i < items.length; i++) {
        if (timer(items[i].startDate, items[i].endDate, currentDate)) {
          const $element = document.querySelector('#js-timer-button')
          $element.innerHTML = '<a href="' + items[i].url + '">ボタン</a>'
          return
        }
      }
    })
  })
}())

