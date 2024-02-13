import { readable } from "svelte/store";

export default readable({
    lat: undefined,
    lng: undefined,
    working: false,
    errorMessage: undefined,
}, (set) => {
    let id: number;
    let target: any;
    let options;

    function success(pos: any) {
        const crd = pos.coords;

        set({ lat: crd.latitude, lng: crd.longitude, working: true, errorMessage: undefined });

        // if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
        //     console.log("Congratulations, you reached the target");
        //     navigator.geolocation.clearWatch(id);
        // }
    }

    function error(err: any) {
        set({ lat: undefined, lng: undefined, working: false, errorMessage: err.message });
    }

    target = {
        latitude: 0,
        longitude: 0,
    };

    options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
    };

    id = navigator.geolocation.watchPosition(success, error, options);
});