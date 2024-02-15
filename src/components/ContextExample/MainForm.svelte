<script lang="ts">
    import {
        ChildForm,
        FormField,
        validateEmail,
        validateRequiredField,
    } from ".";
</script>

<h1>Context</h1>

<ChildForm
    on:submit={(e) => {
        alert(JSON.stringify(e.detail));
    }}
    initialValues={{
        username: "test",
        email: "test@test.com",
        password: "",
        password2: "",
    }}
>
    <FormField
        label="Username"
        name="username"
        type="text"
        validate={validateRequiredField}
    />
    <FormField
        label="Email"
        name="email"
        type="text"
        validate={(value, label) => {
            return (
                validateRequiredField(value, label) ||
                validateEmail(value, label)
            );
        }}
    />
    <FormField
        label="Password"
        name="password"
        type="password"
        validate={validateRequiredField}
    />
    <FormField
        label="Password Repeat"
        name="password2"
        type="password"
        validate={validateRequiredField}
    />

    <button type="submit">Submit</button>
</ChildForm>
