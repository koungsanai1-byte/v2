const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require('fs');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


readdirSync("./Routes").forEach(r => {
  console.log(`✅ Loading route: ${r}`);
  app.use("/api", require(`./Routes/${r}`));
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});