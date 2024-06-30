import { describe, it, expect, beforeEach } from "vitest";
import executePostQuery from "../modules/dbConfigPost";
const fs = require("fs");

//use supertest to make some request to the server + api response assertion
describe("application", () => {
  const makeApp = require("../server");
  const request = require("supertest");
  let app;

  beforeEach(async () => {
    await resetDatabase();
    const { saveProduct } = require("../secondary/inMemoryProductsRepository");
    app = makeApp(saveProduct);
  });

  it("should add product", async () => {
    const response = await addProduct({
      product_name: "table",
      product_category: "chambre",
      sub_category: "table",
      product_materials: "verre",
      product_color: "gris",
      product_description: "super",
      price: "2",
      product_state: "en attente",
    });

    expect(response.status).toBe(200);
    // expect(response.body).toStrictEqual([
    //   {
    //     id: "1",
    //     price: 2,
    //     product_category: 2,
    //     product_color: 2,
    //     product_description: "super",
    //     product_materials: 5,
    //     product_name: "table",
    //     product_owner: 3,
    //     product_photo: 4,
    //     product_state: 2,
    //     sub_category: 2,
    //   },
    // ]);
  });

  it("should not add product if request body is malformated", async () => {
    const response = await addProduct({
      product_name: "table",
      product_category: "chambre",
      sub_category: "table",
      proaduct_materials: "verre",
      product_color: "gris",
      product_description: "super",
      price: "2",
      product_state: "en attente",
    });

    expect(response.status).toBe(500);
    expect(response.body).toStrictEqual({
      error: "Erreur lors de l'ajout de l'annonce",
    });
  });

  async function addProduct(body) {
    return await request(app)
      .post("/post")
      .set("content-type", "application/json")
      .set("accept", "application/json")
      .send(body);
  }
});

//in other file
async function resetDatabase() {
  const tables = ["public.products"];

  for (const table of tables) {
    const deleteProduct = `DROP TABLE if exists ${table}`;
    await executePostQuery(deleteProduct);
    await executePostQuery(
      fs.readFileSync("./tests-utils/createPublicProductsTableQuery.sql", {
        encoding: "utf-8",
        flag: "r",
      })
    );
  }
}
