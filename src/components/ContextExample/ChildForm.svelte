<script lang="ts">
    import { createEventDispatcher, setContext } from "svelte";
    import { formKey, type FormContext } from ".";
    import { writable } from "svelte/store";

    const dispatch = createEventDispatcher();

    export let initialValues = {
        username: "",
        email: "",
        password: "",
        password2: "",
    };

    const formStore = writable({
        values: initialValues,
        errors: {},
        showErrors: false,
    } as FormContext);

    setContext(formKey, formStore);
</script>

<pre>
{JSON.stringify($formStore, null, 2)}
</pre>
<form
    on:submit|preventDefault={() => {
        const hasError =
            Object.keys($formStore.errors).filter((x) => $formStore.errors[x])
                .length != 0;
        if (!hasError) {
            dispatch("submit", $formStore.values);
        } else {
            $formStore.showErrors = true;
        }
    }}
>
    <slot />
</form>
