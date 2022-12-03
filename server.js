const path = require("path");

const express = require("express");

const app = express();

// Port to listen over (optional and can be changed at any time!).
const PORT = 3020;

// Serving static files in public folder
app.use(express.static(path.resolve(__dirname, "public")));

// Any request (/about, /contact , ...) we will server index.html for.
app.use((req, res) =>
  res.sendFile(path.resolve(__dirname, "public/index.html"))
);
// Listen to any request comoing to our port.
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
