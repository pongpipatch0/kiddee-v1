'use strict'

class HomeController {
  async index({ view }) {
    return view.render('page.home.index',{
      title: 'Home'
    })
  }
}

module.exports = HomeController
