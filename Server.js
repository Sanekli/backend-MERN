const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./Config/connectDB');
const app = express();
const auth = require('./Routes/routes');
const PrivateProduct = require('./Models/Product');
const RegisterSchema = require('./Models/models');
const cors = require('cors');
const bcrypt = require('bcrypt');

connectDB();
app.use(cors());
app.use(express.json());
app.use('/', auth);

async function initial() {
  const userIsAdmin = await RegisterSchema.findOne({ role: 'admin' });
  if (!userIsAdmin) {
    const user = new RegisterSchema({
      name: 'admin',
      email: 'admin@admin.com',
      password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
      role: 'admin',
    });
    await user.save();
  }

  try {
    const count = await PrivateProduct.estimatedDocumentCount();
    if (count === 0) {
      const productList = [
        {
          title: "dar sabri",
          description: "furnished apartment living room with 3 bedrooms (2 children's bedrooms and a couple bedroom), 2 bathrooms, well-equipped kitchen with a sea view terrace ",
          price: "159,00€",
          duration: "full day option",
          url_images: 'https://scontent.xx.fprismicbcdn.net/v/t1.15752-9/286120913_1653091461724468_3542625954577429628_n.jpg?stp=dst-jpg_s403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=IxrFqFQYGg0AX9eLZp8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKGxhYMNDEz2wIzcL1lX7R5zpsYq49dGU2JsREmQ09GjA&oe=631123FB',
        },
        {
          title: "dar rim",
          description: "luxury villa with swimming pool of 1000 square meter .4 bedroom with 4 bathrooms and a large kitchen",
          duration: "full day option",
          url_images: 'https://images.prismic.io/travauxlib/0e9aa37c-8960-4ff0-8203-bd0a8bf3f068_prix-construction-maison-neuve.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=clip&q=80&rect=0%2C0%2C1950%2C1200&w=750&h=462',
          price: "200,00€",
        },
        {
          title: "dar selma ",
          description: "well-equipped apartment has 2 bedrooms and 2 bathrooms and a kitchen and a well-secured parking space",
          duration: "full day option",
          url_images: 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg',
          price: "139,00€",
        }
      ];
      const options = { ordered: true };
      await PrivateProduct.insertMany(productList, options);
    }
  } catch (err) {
    console.error(err);
  }
}

initial();

app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log(`the app is running on port: ${process.env.PORT}`);
});
