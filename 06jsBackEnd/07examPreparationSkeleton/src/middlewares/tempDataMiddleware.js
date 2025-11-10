export function tempData(req, res, next) {
    req.tempRedirect = function (url, data) {
        req.session.data = data;

        return res.redirect(url);
    }

    if (!req.session.data) {
        return next();
    }

    res.locals = Object.assign(res.locals, req.session.data);
    req.session.data = null;

    next();
};