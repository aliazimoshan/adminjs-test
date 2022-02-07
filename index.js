const mongoose = require('mongoose')
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSOptions = require('./admin')
const dotenv = require('dotenv')

const express = require('express')
const app = express()

const adminJs = new AdminJS(AdminJSOptions)

const ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

console.log(`Your port is ${process.env.PORT}`); // undefined
dotenv.config();
console.log(`Your port is ${process.env.PORT}`);

// const router = AdminJSExpress.buildRouter(adminJs)
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: 'adminjs',
  cookiePassword: 'somepassword',
})

app.use(adminJs.options.rootPath, router)

const run = async () => {
  const mongooseConnection = await mongoose.connect(process.env.MONGO_URL)
  app.listen(8080, () => console.log('AdminJs is under localhost:8080/admin'))
}

run()
