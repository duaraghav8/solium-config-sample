# solium-config-sample
Sample sharable config for Solium

See Solium developer docs to understand how to [create a sharable config](https://solium.readthedocs.io/en/latest/developer-guide.html#developing-a-sharable-config).

## Usage
Inside your `.soliumrc.json`, add `sample` as a value to the `extends` property. Below is an example:

```json
{
    "extends": ["solium:recommended", "sample"],
    "rules": {
        "indentation": ["error", "tab"]
    }
}
```
