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
      startDate: '2022/04/05 00:00:00',
      endDate: '2022/04/06 00:00:00',
      url: 'https://example.jp/04/',
    },
  ]
  /**
   *
   * @param {string} startDate
   * @param {string} endDate
   * @param {object} currentDate
   * @return {boolean}
   */
  const timer = function(startDate, endDate, currentDate) {
    const start = new Date(startDate + ' GMT+0900').getTime()
    const end = new Date(endDate + ' GMT+0900').getTime()
    const today = new Date(currentDate).getTime()
    return start <= today < end
  }

  document.addEventListener('DOMContentLoaded', function() {
    fetch('/assets/images/1x1.gif').then(function(response) {
      const currentDate = response.headers.get('Date')
      items.forEach(function(item) {
        if (timer(item.startDate, item.endDate, currentDate)) {
          const $element = document.querySelector('#js-timer-button')
          $element.innerHTML = '<a href="' + item.url + '">ボタン</a>'
        }
      })
    })
  })
}());

