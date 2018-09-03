'use strict'

class ActivitieController {
  async index({ view }) {
    return view.render('page.activities.index',{
      title: 'Activities'
    })
  }
}

module.exports = ActivitieController
