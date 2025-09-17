const { expect } = require("chai");
const api = require("./setup");
const { attachResponse } = require("./reportHelper");

describe("Testing API JSONPlaceholder", () => {
  it("GET /posts", async function () {
    const res = await api.get("/posts");
    attachResponse(this.test, res, "Response GET /posts");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.an("array");
  });

  it("GET /posts/1", async function () {
    const res = await api.get("/posts/1");
    attachResponse(this.test, res, "Response GET /posts/1");

    expect(res.status).to.equal(200);
    expect(res.data).to.have.property("id", 1);
  });

  it("POST /posts", async function () {
    const payload = { title: "Belajar Mocha Chai", body: "Mantap!", userId: 1 };
    const res = await api.post("/posts", payload);
    attachResponse(this.test, res, "Response POST /posts");

    expect(res.status).to.equal(201);
    expect(res.data).to.include(payload);
  });
});
