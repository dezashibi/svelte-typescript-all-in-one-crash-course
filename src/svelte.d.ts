declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
        'longpress'?: (event: CustomEvent<any>) => any;
    }
}
