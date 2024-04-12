const express = require("express");
const res = require("express/lib/response");
const app = express();

const add = (n1, n2) => {
  return n1 + n2;
};

const subtract = (n1, n2) => {
  return n1 - n2;
};

const multiply = (n1, n2) => {
  return n1 * n2;
};

const divide = (n1, n2) => {
  if (n2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return n1 / n2;
};

const exponent = (n1, n2) => {
  return Math.pow(n1, n2);
};

const sqrt = (n1) => {
  if (n1 < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(n1);
};

const modulo = (n1, n2) => {
  if (n2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return n1 % n2;
};

app.get("/add", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    const result = add(n1, n2);
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});

app.get("/subtract", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    const result = subtract(n1, n2);
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});

app.get("/multiply", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    const result = multiply(n1, n2);
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});

app.get("/divide", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    const result = divide(n1, n2);
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});

app.get("/exponent", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    const result = exponent(n1, n2);
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});

app.get("/sqrt", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    const result = sqrt(n1);
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});

app.get("/modulo", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    if (isNaN(n1)) {
      throw new Error("n1 incorrectly defined");
    }
    if (isNaN(n2)) {
      throw new Error("n2 incorrectly defined");
    }
    const result = modulo(n1, n2);
    res.status(200).json({ statuscocde: 200, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statuscocde: 500, msg: error.toString() });
  }
});

const port = 3040;
app.listen(port, () => {
  console.log("hello I'm listening to port" + port);
});