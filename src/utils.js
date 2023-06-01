const multer = require('multer');

// Antes de instanciar multer, debemos configurar dónde se almacenarán los archivos.
const storage = multer.diskStorage({
  // destination hará referencia a la carpeta donde se va a guardar el archivo.
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/public/img`); // Especificamos la carpeta en este punto.
  },

  // filename hará referencia al nombre final que contendrá el archivo
  filename: (req, file, cb) => {
    cb(null, file.originalname); // originalname indica que se conserve el nombre inicial.
  },
});

const uploader = multer({ storage });

module.exports = uploader;
