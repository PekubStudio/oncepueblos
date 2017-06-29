// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about-us': { page: '/about-us', query: { title: 'About us' } }
    }
  }
}
