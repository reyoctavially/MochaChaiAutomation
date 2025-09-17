const axios = require("axios");
const { expect } = require("chai");

describe("Testing API JSONPlaceholder", () => {
  it("GET /posts harus mengembalikan list post", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    expect(res.status).to.equal(200);
    expect(res.data).to.be.an("array");
    expect(res.data[0]).to.have.property("userId");
  });

  it("GET /posts/1 harus mengembalikan 1 post dengan id 1", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(res.status).to.equal(200);
    expect(res.data).to.have.property("id", 1);
    expect(res.data).to.have.property("title");
  });

  it("POST /posts harus bisa membuat data baru (mock API)", async () => {
    const payload = { title: "Belajar Mocha Chai", body: "Mantap!", userId: 1 };
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", payload);

    expect(res.status).to.equal(201); // created
    expect(res.data).to.include(payload);
    expect(res.data).to.have.property("id"); // fake ID dari JSONPlaceholder
  });
});
