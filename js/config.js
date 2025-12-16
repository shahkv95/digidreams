window.App = {
    scene: null,
    camera: null,
    renderer: null,

    lights: {},
    materials: {},
    groups: {},

    state: {
        isDarkMode: false,
        isWarping: false,
        isWireframe: false
    },

    constants: {
        MIN_ZOOM: 40,
        MAX_ZOOM: 120
    }
};
