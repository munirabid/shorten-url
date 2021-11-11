const request = require("supertest");
const Url = require("../models/UrlModel");
const app = require("../index");
const longUrl =
  "https://supporttt.bitly.com/hc/en-us/articles/230897128-How-to-create-links-with-Bitly";

test("should create url ", async () => {
  const response = await request(app)
    .post("/api/url/shorten")
    .send({
      longUrl,
    })
    .expect(200);
});

test("should return list of url ", async () => {
  const response = await request(app)
    .get("/api/url/list")
    .send({
      longUrl,
    })
    .expect(200);
});
