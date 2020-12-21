export default {
    name: 'app',
    namespaced: true,
    state: {},

    getters: {},

    mutations: {
        getRouteName (state, {route, routeName}) {
            routeName = route.name
        }
    },

    actions: {},
};
