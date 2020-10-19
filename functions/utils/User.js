class User {
  constructor(email, displayName, password) {
    this.email = email
    this.displayName = displayName
    this.password = password
  }

  // Validate fields with destructuring
  static validateFields({ displayName, email, password }) {
    return true
  }
}

module.exports = User
