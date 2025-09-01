const express = require("express");
const conectarBanco = require("./conexao");
const bodyParser = require("body-parser");
const app = express();
var conexao = conectarBanco;

conexao.connect((error) => {
  if (error) {
    console.log(`Erro ao conectar no servidor  ${error} \n`);
    process.exit();
  }
  console.log("Conectado ao servidor! ");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 3001;

app.post("/blog/criar", (req, res) => {
  const { titulo, textocurto, texto } = req.body;

  const sql = "INSERT INTO post(titulo, textocurto, texto) VALUES (?,?,?)";

  conexao.query(sql, [titulo, textocurto, texto], (error, result) => {
    if (error) throw error;
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.clear();
  console.log(`Rodando na porta ${port} \n`);
});

app.get("/", (req, res) => {
  var sql = "select * from post";
  conexao.query(sql, (error, result) => {
    if (error) throw error;
    blogs = result.reverse();

    //passando parametros para o body

    res.render("index", { title: "Página Inicial", blogs });
  });
});


app.get("/sobre", (req, res) => {
  res.render("sobre", { title: "Sobre nós" });
});

app.get("/sobre", (req, res) => {
  res.redirect("sobre", { title: "Sobre" });
});

app.get("/blog/criar", (req, res) => {
  res.render("criar", { title: "Criar" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
