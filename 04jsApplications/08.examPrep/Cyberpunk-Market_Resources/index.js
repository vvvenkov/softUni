import page from "./lib/page.js";
import homeView from "./views/homeView.js";
import registerView from "./views/registerView.js";
import loginView from "./views/loginView.js";
import dashboardView from "./views/dashboardView.js";
import detailsView from "./views/detailsView.js"
import createView from "./views/createView.js";
import logoutView from "./views/logoutView.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import editView from "./views/editView.js";
import deleteView from "./views/deleteView.js"
import { notificationsMiddleWare } from "./middlewares/notificationMiddleware.js";

page(navigationMiddleware);
page(notificationsMiddleWare);

page('/', homeView);
page('/dashboard', dashboardView);
page('/dashboard/:itemId/details', detailsView);
page('/dashboard/:itemId/edit', editView)
page('/dashboard/:itemId/delete', deleteView)
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView)

//Start page
page();