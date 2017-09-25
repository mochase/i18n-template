function i18n() {
  // var _defaultOptions = {
  //   lang: 'cn'
  // }
  var obj = {
    options: {
      lang: 'cn'
    },
    init: function (opts) {
      this.options = Object.assign({}, this.options, opts)
      Object.defineProperty(this.options, '_lang', {
        get: function () {
          return this.lang
        },
        set: function (value) {
          this.lang = value
          obj._updateTemplate()
        }
      })
      return obj
    },
    changeLang: function (lang) {
      this.options._lang = lang
    },
    _updateTemplate: function () {
      console.log('success', this.options.lang)
    }
  }
  return obj
}

i18n().init({lang: 'en'}).changeLang('en')