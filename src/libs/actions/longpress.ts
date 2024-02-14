export interface LongPress {
    durations: number
}

export default function logpress(node: HTMLButtonElement, options: LongPress) {


    let timer: number;

    function handleMouseDown() {
        const { durations = 200 } = options;
        timer = setTimeout(() => { node.dispatchEvent(new CustomEvent("longpress")) }, durations);
    }
    function handleMouseUp() {
        clearTimeout(timer);
    }

    node.addEventListener('mousedown', handleMouseDown);
    node.addEventListener('mouseup', handleMouseUp);

    return {
        update(newOptions: LongPress) {
            options = newOptions;
        },
        destroy() {
            console.log('killed');

            clearTimeout(timer);
            node.removeEventListener('mousedown', handleMouseDown);
            node.removeEventListener('mouseup', handleMouseUp);
        }
    }
}