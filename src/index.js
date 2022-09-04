import { homepage } from "./homepage";
import { menu } from "./menu";
import { contactUs } from "./contactUs";

window.homepage = homepage
window.menu = menu
window.contactUs = contactUs

contactUs.cacheNav()
contactUs.render()