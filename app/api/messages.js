import client from "./client";

const send = (listingId, message) => {
  client.post("/messages", { listingId, message });
};

export default {
  send,
};
