import page from "./lib/page.js";
import homeView from "./views/homeView.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import loginView from './views/loginView.js';
import registerView from "./views/registerView.js";
import dashboardView from "./views/dashboardView.js";
import logoutView from "./views/logoutView.js";
import createView from "./views/createView.js";
import detailsView from "./views/detailsView.js";
import editView from "./views/editView.js";
import deleteView from "./views/deleteView.js";

page(navigationMiddleware);

page('/', homeView);
page('/login', loginView)
page('/register', registerView);
page('/dashboard', dashboardView)
page('/logout', logoutView)
page('/create', createView);
page('/dashboard/:itemId/details', detailsView);
page('/dashboard/:itemId/edit', editView)
page('/dashboard/:itemId/delete', deleteView)

page.start();