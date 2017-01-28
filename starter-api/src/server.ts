import * as express from "express";
import { json } from 'body-parser';
import * as logger from "morgan";
import * as path from "path";
import * as methodOverride from "method-override";
import * as tablesRoute from "./tables/route";
import * as http from "http";

let app = express();

app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(json());
app.use(methodOverride());

app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  err.status = 404;
  next(err);
});

tablesRoute.route(app);

let server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
});

