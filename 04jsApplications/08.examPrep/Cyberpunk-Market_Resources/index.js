import page from "./lib/page.js";
import homeView from "./views/homeView.js";
import registerView from "./views/registerView.js";
import loginView from "./views/loginView.js";
import dashboardView from "./views/dashboardView.js";
import detailsView from "./views/detailsView.js"
import createView from "./views/createView.js";
import logoutView from "./views/logoutView.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";

page(navigationMiddleware);

page('/', homeView);
page('/dashboard', dashboardView);
page('/dashboard/:itemId/details', detailsView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView)

//Start page
page();