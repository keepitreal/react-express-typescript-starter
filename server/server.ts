import * as express from 'express';

const app = express();

app.set('views', './views');
app.get('/*', (req: express.Request, res: express.Response) => {
	res.render('index');
});
app.listen(3000);