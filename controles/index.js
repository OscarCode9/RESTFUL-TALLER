const mysql = require('mysql2/promise');
const Img = require('../modelo');
const crytoFun =require('../crypto');

async function showAllImg(req, res) {

  try {

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'imgFull',
      password: process.env.passwordDB
    });

    const sql = "SELECT * FROM IMG";

    const [rows] = await connection.execute(sql);

    const allImgs = [];

    for (const img of rows) {

      console.log('img we:', img);
      const oneImg = new Img(img.idImg, img.userName, img.urlImg, img.likes, img.imgDate);
      allImgs.push(oneImg);

    }

    res.status(200).send({ allImgs });
  } catch (error) {
    res.status(500).send(error);
  }

}

async function showImgById(req, res) {

  const idImg = req.params.id;


  const sql = "SELECT * FROM IMG WHERE  idImg = ?";

  try {

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'imgFull',
      password: process.env.passwordDB
    });

    const [rows] = await connection.execute(sql, [idImg]);

    const idImgR = rows[0].idImg;
    const userName = rows[0].userName;
    const urlImg = rows[0].urlImg;
    const likes = rows[0].likes;
    const imgDate = rows[0].imgDate;


    const imgById = new Img(idImgR, userName, urlImg, likes, imgDate);

    console.log(imgById);

    res.status(200).send({ imgById });


  } catch (error) {
    console.log(error);
  }

}

async function newImg(req, res) {

  const idImg = null;
  const userName =crytoFun.encrypt(req.fields.userName);
  const urlImg =crytoFun.encrypt(req.fields.urlImg);
  const likes = crytoFun.encrypt (req.fields.likes);
  const date =crytoFun.encrypt(req.fields.date);

  const anImg = new Img(idImg, userName, urlImg, likes, date);

  const sql = "INSERT INTO IMG VALUES(null, ?, ?, ?, sysdate())";

  try {

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'imgFull',
      password: process.env.passwordDB
    });

    const [rows] = await connection.execute(sql, [anImg.getUserName(), anImg.getUrlImg(), anImg.getLikes()]);

    if (rows.affectedRows === 1) {
      anImg.setIdImg(rows.insertId);
      res.status(200).send({ img: anImg });
    } else {
      res.status(400).send({ error: 'Ningun dato insertado' });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }

}

function updateById(req, res) {


}

async function deleteImgById(req, res) {

  const idImg = req.params.id;
  const sql = "DELETE FROM IMG  WHERE idImg = ?";

  try {

    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'imgFull',
      password: process.env.passwordDB
    });

    const [rows] = await connection.execute(sql, [idImg]);

    console.log(rows);

    if (rows.affectedRows === 1) {
      res.status(200).send({ message: `img con id: ${idImg} borrado con exito` });
    }


  } catch (error) {
    res.status(500).send({ error: 'No se puedo borrar esa img' });
  }


}

module.exports = {
  showAllImg,
  showImgById,
  newImg,
  updateById,
  deleteImgById
}