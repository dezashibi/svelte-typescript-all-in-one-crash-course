import { writable } from "svelte/store";

const store = writable(1);

export default {
    subscribe: store.subscribe,
    addOne: () => {
        store.update(n => n + 1);
    },
    subOne: () => {
        store.update(n => n - 1);
    },
    set: (n: number) => {
        if (n > 0) store.set(n)
    }
}