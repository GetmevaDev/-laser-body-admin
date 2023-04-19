"use strict";

/**
 * about router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::homepage.homepage", {
  config: {
    find: {
      middlewares: [
        (ctx, next) => {
          if (!ctx.query.populate) {
            ctx.query.populate = "*";
          }

          return next();
        },
      ],
    },
  },
});
