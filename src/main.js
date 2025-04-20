import './css/style.css';
import router from "./js/router";

(async () => {
    await router(window.location.pathname);
})();