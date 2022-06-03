module.exports = (app) => {
  app.use((req, res, next) => {
    // this middleware runs whenever a requested endpoint is not available
    res.status(404).json({ message: "Resource not found" });
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.log("the error is ", err);
    if (err === 400) {
      res.status(400);
    }
    console.error("ERROR", req.method, req.path, err);

    // only render if the error occurred before sending the response
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
};
