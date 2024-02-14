import tippy, { type Props } from "tippy.js"

import "tippy.js/dist/tippy.css";

export default function tippyAction(node: HTMLElement, options?: Partial<Props>) {
    const instance = tippy(node, options);

    return {
        destroy() {
            instance.destroy();
        }
    }
}