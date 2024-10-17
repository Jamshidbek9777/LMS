import { chain } from "./middlewares/chain";
import { withI18nMiddleware } from "./middlewares/withI18nMiddleware";
import { withPermissionMiddleware } from "./middlewares/withPermissionMiddleware";

export default chain([withPermissionMiddleware, withI18nMiddleware]);

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
