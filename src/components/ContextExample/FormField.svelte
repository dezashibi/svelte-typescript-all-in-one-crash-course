<script lang="ts">
    import { getContext, onMount } from "svelte";
    import { v4 as uuid } from "uuid";
    import { formKey, type FormContext } from ".";
    import type {
        FormEventHandler,
        HTMLInputAttributes,
    } from "svelte/elements";

    export let name: string;
    export let label: string = "";
    export let type: string;
    export let validate = (value: string, label: string): string => {
        return "";
    };

    let isDirty = false; // can be removed to prevent showing errors everytime user types at the beginning

    const formStore = getContext(formKey) as SvelteStore<any>;

    const id = uuid();

    function performValidation() {
        let error = validate($formStore.values[name], label);
        if (error) {
            $formStore.errors[name] = error;
        } else {
            $formStore.errors[name] = "";
        }
    }

    onMount(() => {
        performValidation();
    });
</script>

<div>
    {#if label}
        <label for={id}>{label}</label>
    {/if}
    <input
        {id}
        {name}
        {type}
        placeholder={label}
        value={$formStore.values[name] || ""}
        on:input={(e) => {
            isDirty = true;
            const value = e.currentTarget.value;
            $formStore.values[name] = value;
            performValidation();
        }}
    />

    {#if (isDirty || $formStore.showErrors) && $formStore.errors[name]}
        <p class="error">{$formStore.errors[name]}</p>
    {/if}
</div>

<style>
    p.error {
        color: red;
        font-size: 14px;
        margin: 5px 0 0;
    }
</style>
