const response = (statusCode, data, message, res) => {
  res.json(statusCode, [
    {
      payload: data,
      message,
      metadata: {
        prev: "",
        current: "",
        next: "",
      },
    },
  ]);
};

module.exports = response;
