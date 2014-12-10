var urlRegex = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;

module.exports = {
  valid: function(url) {
    return !!String(url).match(urlRegex);
  }
};
