const { expect } = require("chai");
const api = require("./setup");
const { attachResponse } = require("./reportHelper");

describe("Testing API JSONPlaceholder", () => {
  it("GET /users", async function () {
    const res = await api.get("/users");
    attachResponse(this.test, res, "Response GET /users");

    expect(res.status).to.equal(200);
    expect(res.data).to.be.an("array");
  });

  it("GET /users/1", async function () {
    const res = await api.get("/users/1");
    attachResponse(this.test, res, "Response GET /users/1");

    expect(res.status).to.equal(200);
    expect(res.data).to.have.property("id", 1);
  });

  it("POST /users", async function () {
    const payload = { name: "Jane Doe", username: "Created"};
    const res = await api.post("/users", payload);
    attachResponse(this.test, res, "Response POST /users");

    expect(res.status).to.equal(201);
    expect(res.data).to.include(payload);
  });
});
