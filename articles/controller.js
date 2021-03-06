const { endpointWrapper } = require("../utils");
const {
  selectArticle,
  updateArticleVotes,
  selectArticles,
} = require("./model");

exports.getArticles = endpointWrapper(async (req, res) => {
  const articles = await selectArticles(req.query);
  res.status(200).send({ articles });
});

exports.getArticle = endpointWrapper(async (req, res) => {
  const article = await selectArticle(req.params.article_id);
  res.status(200).send({ article });
});

exports.patchArticleVotes = endpointWrapper(async (req, res) => {
  const article = await updateArticleVotes(
    req.params.article_id,
    req.body.inc_votes
  );
  res.status(200).send({ article });
});
