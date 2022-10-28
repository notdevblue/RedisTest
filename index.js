const { createClient } = require("redis");
const client = createClient();

client.on("error", err => {
    console.log("Redis client error ", err);
});

await client.connect();
await client.set("Linux", "Gentoo");