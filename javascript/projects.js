var articles = [];

function Article (info) {
  this.title = info.title;
  this.project = info.project;
  this.projectUrl = info.projectUrl;
  this.skills = info.skills;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('h1').text(this.title);
  $newArticle.find('.links').html('<a href="' + this.projectUrl + '">' + this.project + '</a>');
  $newArticle.find('.information').html(this.skills);
  $('article').removeClass('template');
  return $newArticle;
};

projectInfo.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
