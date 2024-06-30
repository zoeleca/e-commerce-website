const makeApp = require("./server");
const { postProduct: saveProduct } = require("./dbqueries/postProduct");
const app = makeApp(saveProduct);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
