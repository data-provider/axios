/*
Copyright 2019 XbyOrange

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

const {
  addBooksServerError,
  addBooksNotFoundError,
  addBooksSuccess
} = require("../stats/storage");

const getBooksSuccess = {
  url: "/api/books/success",
  method: "GET",
  response: (req, res) => {
    addBooksSuccess();
    res.status(200);
    res.send([
      {
        author: "Ray Bradbury",
        title: "Fahrenheit 451"
      }
    ]);
  }
};

const getBooksServerError = {
  url: "/api/books/server-error",
  method: "GET",
  response: (req, res) => {
    addBooksServerError();
    res.status(500);
    res.send({
      statusCode: 500,
      error: "Internal server error",
      message: "Fake Internal server error"
    });
  }
};

const getBooksNotFoundError = {
  url: "/api/books/not-found-error",
  method: "GET",
  response: (req, res) => {
    addBooksNotFoundError();
    res.status(404);
    res.send({
      statusCode: 404,
      error: "Not found",
      message: "Fake Not found"
    });
  }
};

module.exports = {
  getBooksSuccess,
  getBooksServerError,
  getBooksNotFoundError
};
