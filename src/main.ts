import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

const whitelist = [
  'http://localhost:5173',
  'localhost:5173',
  'localhost:3000',
  'https://accounts.google.com/o/oauth2/iframe',
  process.env.URL_CLIENT,
];

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //This following block solve the problem in Dev Mode about the undefined Origin
  app.use(function (req, res, next) {
    req.headers.origin = req.headers.origin || req.headers.host;
    next();
  });

  //app.enableCors({ credentials: true, origin: 'http://localhost:5173' }); //For allow Cors of local only
  app.enableCors({
    origin: function (origin, callback) {
      if (/* !origin || */ whitelist.indexOf(origin) !== -1) {
        console.log('allowed cors for:', origin);
        callback(null, true);
      } else {
        console.log('blocked cors for:', origin);
        callback(new Error('Not allowed by CORS: ' + origin));
      }
    },
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
