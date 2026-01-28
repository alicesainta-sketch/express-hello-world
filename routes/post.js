const express = require("express");
var route = express.Router();

const postModel = require("../models/post");

route.get("/", (req, res) => {
  res.send({ id: 1, title: "express 入门教程" });
});

route.post("/", async (req, res) => {
  try {
    const newPost = await postModel.save(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

route.put("/:id", (req, res) => {
  console.log("收到请求参数，文章id 为：", req.params.id);
  console.log("收到请求体，新的文章内容为：", req.body);

  res.send({ id: req.params.id, ...req.body });
});

route.delete("/:id", (req, res) => {
  console.log("收到请求参数，文章id 为：", req.params.id);
  res.status(201).send();
});

module.exports = route;
