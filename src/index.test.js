const axios = require("axios");

test("GET request to placeholder", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

  expect(response.status).toBe(200);
  expect(response.statusText).toBe("OK");

  const todo = response.data || {};
  const todoFields = Object.keys(todo).sort();

  expect(todoFields).toEqual([
    "completed",
    "id",
    "title",
    "userId",
  ])
});
