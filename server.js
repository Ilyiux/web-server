import express from "express";

const app = express();
const PORT = 3000;

const projects = [
  { name: "Weather app", tag: "javascript" },
  { name: "Portfolio site", tag: "express" },
  { name: "Budget tracker", tag: "python" },
];

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact info");
});

app.get("/projects", (req, res) => {
  const tag = req.query.tag;
  const sort = req.query.sort;
  var filtered = projects;
  if (tag !== undefined) {
    filtered = filtered.filter((item) => item.tag == tag);
  }
  if (sort !== undefined) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(sort.toLowerCase()),
    );
  }
  res.json({ matched: filtered.length, data: filtered });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
