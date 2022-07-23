"use strict";
const dns = require("dns");
dns.lookup("www.miu.edu", (error, address) => {
  if (error) {
    throw new Error("Whoops");
  } else {
    console.log(address);
  }
});
