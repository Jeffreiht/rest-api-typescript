import express, { Application } from 'express';
import morgan from 'morgan'
import indexRoutes from './routes/index.routes'
import postsRoutes from './routes/posts.routes'

export class App {

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/posts', postsRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port ', this.app.get('port'));
    }
}