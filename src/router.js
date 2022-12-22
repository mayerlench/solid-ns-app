import { createRouter } from 'router-vue-native';
import { getStatusBarHeight } from './utils';
import Home from './components/Home/Home';
import LaunchScreen from './components/LaunchSreen';

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/launchscreen",
        component: LaunchScreen
    },
];

// Initialize Router
// Vue-Router settings are in 1st argument. 2nd one is used for extra NativeScript related settings
export default createRouter(
    { routes },
    {
        routeBackFallbackPath: "/launchscreen",

        // Do something straight before navigation or adjust NS routing settings
        routeToCallback: (to, options) => {
            // For example, change page navigation transition for the vertical on iOS
            if (to.meta?.isVertical) {
                options.transition = {
                    name: "fade",
                };
            }
        },

        // Do something straight before navigation or adjust NS routing settings
        routeBackCallback: (_to, options) => {
            // Do something...
        },
        logger: console.log
    }
);