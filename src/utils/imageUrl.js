// import React from "react";
const sanityClient = require("./sanityClient");
const imageUrlBuilder = require("@sanity/image-url");

function urlFor(source) {
  return imageUrlBuilder(sanityClient).image(source);
}

module.exports = urlFor;
