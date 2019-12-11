
## ESLinting to avoid inline styles

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `npm i eslint-plugin-no-inline-styles`:

```
$ npm install eslint-plugin-no-inline-styles --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `npm i eslint-plugin-no-inline-styles` globally.

## Usage

Add `eslint-plugin-no-inline-styles` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-plugin-no-inline-styles"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-inline-styles/no-inline-styles": 2
    }
}
```


You can change rule from 2 to 1 which is worning or you can disable with zero.

## Checks inline styles for React app

@no-inline-styles

This is a rule to dissallow inline styling. 


## Rule Details

This rule aims to dissallow inline styling where it appear in style attribute in react app.

Examples oforf **incorrect** code for this rule:

```jsx
class Component extends React.Component {
  render() {
    <div>
      <span style={{ height: 40 }}>I am having style attribute</span>
    </div>;
  }
}
```

Examples for **correct** code for this rule:

```jsx
class Component extends React.Component {
  render() {
    <div>
      <span className="classname">I don't have style attribute</span>
    </div>;
  }
}
```

Examples for hack the rule: use the string literals
```jsx
class Component extends React.Component {
  render() {
    <div>
      <span style={{ "width": "50%" }}>I am having style attribute but I can render now</span>
    </div>;
  }
}
```


