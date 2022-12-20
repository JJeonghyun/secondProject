import { Router } from "express";
import product from "../data/product.json" assert { type: "json" };
const router = Router();
import Cart from "../models/cart.js";

router.post("/list", async (req, res) => {
  try {
    // const temp = Cart.findOne({ where: { name: req.body.payload.name } });
    // console.log(temp);
    // if (temp.name != req.body.payload.name) {
    //   await Cart.create({
    //     name: req.body.payload.name,
    //     price: req.body.payload.price,
    //     img: req.body.payload.img,
    //     hoverImg: req.body.payload.hoverImg,
    //     account: 10,
    //     // id: ~~~,
    //   });
    //   const cartList = await Cart.findAll();
    //   res.send({ list: cartList });
    // } else {
    //   res.send({ list: temp });
    // }
    console.log(req.body.payload.name);
    const [list, created] = await Cart.findOrCreate({
      where: {
        name: req.body.payload.name,
      },
      price: req.body.payload.price,
      img: req.body.payload.img,
      hoverImg: req.body.payload.hoverImg,
      account: 10,
    });
    if (created) {
      await Cart.create({
        name: req.body.payload.name,
        price: req.body.payload.price,
        img: req.body.payload.img,
        hoverImg: req.body.payload.hoverImg,
        account: 10,
        // id: ~~~,
      });
      const cartList = await Cart.findAll();
      res.send({ list: cartList });
    } else {
      console.log("중복");
    }
  } catch (err) {
    console.error(err);
  }
});

export default router;