# useForm

Ejemplo:

```
    const initialForm = {
        name: '',
        age: '',
        email: '',
        ...etc
    }
    const [ formValues, handleInputChange, reset ] = useForm(initialForm)
```