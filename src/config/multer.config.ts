import { diskStorage, Options } from 'multer';
import { extname } from 'path';
import { Request } from 'express';

// Multer configuration with proper TypeScript types
export const multerOptions: Options = {
  storage: diskStorage({
    destination: (req: Request, file, cb) => {
      const uploadPath = file.mimetype.startsWith('image/')
        ? './uploads/images'
        : './uploads/videos';
      cb(null, uploadPath);
    },
    filename: (req: Request, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req: Request, file, cb) => {
    if (
      file.mimetype.startsWith('image/') ||
      file.mimetype.startsWith('video/')
    ) {
      cb(null, true);
    } else {
      cb(
        new Error('Only images and videos are allowed') as unknown as null,
        false,
      );
    }
  },
};
