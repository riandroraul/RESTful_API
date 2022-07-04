"use strict";

/**
 * @author riandroraul
 * @since 0.2.8
 * @see https://swagger.io/docs/specification/about/
 * @module swagger
 * @description
 * Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs
 */

// package json
const pjson = require("./package.json");
const config = require("./models/books");
const port = 3000;
// const ip = config.ip;

/**
 * @description
 * swagger options
 */
module.exports = {
  swaggerDefinition: {
    openapi: "3.0.0",
    // swagger info
    info: {
      title: pjson.name,
      version: pjson.version,
      description: pjson.description,
    },
    // components: {
      // swagger authentication
    //   securitySchemes: {
    //     auth: {
    //       type: "apiKey",
    //       name: "Authorization",
    //       in: "header",
    //     },
    //   },
    // },
    // swagger connection
    servers: [
      {
        url: `http://localhost:${port}`,
      },
      // {
      //   url: "http://etradelab.ra.com:30032",
      // },
    ],
  },
  // swagger api
  apis: ["./api-docs/*.yml", "./api-docs/*/*.yml"],
  // swagger authentication
  security: [
    {
      auth: [],
    },
  ],
};