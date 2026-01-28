const postCollection = require("../config/mongoDbconnection").getCollection(
  "postCollection",
);

exports.save = async (post) => {
  try {
    const col = await postCollection();
    const result = await col.insertOne(post);
    return result.ops && result.ops[0];
  } catch (error) {
    throw "添加文章出错";
  }
};
