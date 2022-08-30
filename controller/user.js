const {response, request } =require('express');

const getUser = (req = request, res = response) => {
    const params = req.query;
    res.json({
      msg: "GET API - Controller",
      params
    });
  }

  const postUser = (req, res = response) => {
    const body = req.body
    res.json({
      msg: "POST API - Controller",
      body
    });
  }

  const putUser = (req, res = response) => {
    const {id} = req.params;
    res.json({
      msg: "PUT API - Controller",
      id
    });
  }

  module.exports = {
    getUser, postUser, putUser
  }