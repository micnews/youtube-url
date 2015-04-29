var urlRegex = /^(?:https?:\/\/)?(?:www\.)?(youtube\.com\/(v\/|embed\/|watch\?.*v=)|youtu\.be\/)((\w|-){11})(?:\S+)?$/;

module.exports = {
  valid: function(url) {
    return !!String(url).match(urlRegex);
  },
  extractId: function(url) {
    var match = urlRegex.exec(url);
    return match ? match[3] : false;
  }
};
