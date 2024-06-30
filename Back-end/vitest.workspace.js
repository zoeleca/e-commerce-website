import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "packages/*",
  {
    test: {
      include: ["tests-e2e/**/*.spec.js"],
      name: "e2e",
    },
  },
  {
    test: {
      include: ["tests-integration/**/*.spec.js"],
      name: "integration",
    },
  },
  {
    test: {
      include: ["tests-component/**/*.spec.js"],
      name: "component",
    },
  },
  {
    test: {
      include: ["tests-unit/**/*.spec.js"],
      name: "unit",
    },
  },
]);
