const path = require("path");
const express = require("express");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = process.env.PORT || 4000;

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.disable("x-powered-by");

// Necessary Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  // ! You should check the body in the backend.
  // ! Don't trust the coming data.
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({
        error: stripeErr,
      });
    } else {
      res.status(200).send({
        success: stripeRes,
      });
    }
  });
});

app.listen(port, () => {
  console.log(
    `✅ Crown Clothing server is up & running on port ${port}`
  );
});
