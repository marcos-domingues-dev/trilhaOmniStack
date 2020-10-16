
import multer from 'multer';

import path from 'path';

export default {
  // Dica ver documentação do multer
  // __dirname -> Dir deste arquivo upload.ts

  storage: multer.diskStorage({

    destination: path.join(__dirname, '..', '..', 'uploads'),

    filename: (request, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;
      // call back
      cb(null, filename); 
    }
  })

}