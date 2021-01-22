import routes from './routes';

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = 'Streamster';
	res.locals.routes = routes;
	next();
};
