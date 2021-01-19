class ConnectionError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

export {
  ConnectionError
}
