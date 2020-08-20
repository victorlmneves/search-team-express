const express = require('express')
const router = express.Router()
const fetch = require("node-fetch")

const headers = {
  'app-id': 'DSdLyXaCDLGfxwxnunyy',
};

const requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

fetch("https://dummyapi.io/data/api/user?limit=10", requestOptions)
  .then((resp) => resp.json())
  .then((data) => {
    const content = data.data

    console.log('users: ', content[0].firstName);

    /* GET home page. */
    router.get("/users", function (req, res, next) {
      res.send("users", { title: content[0].firstName })
    })
  })
  .catch((error) => console.log(JSON.stringify(error)));

module.exports = router;
