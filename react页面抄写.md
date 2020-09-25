# [React](https://reactjs.org/)·![图片](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667) ![图片](https://camo.githubusercontent.com/ecb8a503e646dc22ccb59b73ba287c5229580f49/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174) ![图片](https://camo.githubusercontent.com/bfd84ed5d0e5c8d97aea6d7a83aed84ba1a0b191/68747470733a2f2f636972636c6563692e636f6d2f67682f66616365626f6f6b2f72656163742e7376673f7374796c653d736869656c6426636972636c652d746f6b656e3d3a636972636c652d746f6b656e) ![图片](https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667)
## React is a JavaScript library for building user interfaces.

* **Declarative:**React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:**Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* **Learn Once, Write Anywhere:**
We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://reactnative.dev/).
## [Learn how to use React in your own project.](https://reactjs.org/docs/getting-started.html)
## Installation
## React has been designed for gradual adoption from the start, and **you can use as little or as much React as you need:**
* Use [Online Playgrounds]() to get a taste of React.
* [Add React to a Website]() as a `<script>` tag in one minute.
* Create a New React App if you're looking for a powerful JavaScript toolchain.
## You can use React as a `<script>` tag from a [CDN](), or as a `react` package on [npm]().
# Documentation
You can find the React documentation [on the website]().

Check out the [Getting Started]() page for a quick overview.

The documentation is divided into several sections:
* [Tutorial]()
* [Main Concepts]()
* [Advanced Guides]()
* [API Reference]()
* [Where to Get Support]()
* [Contributing Guide]()

## You can improve it by sending pull requests to [this repository]().

# Examples

## We have several examples [on the website](). Here is the first one to get you started:
```js
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('container')
);
```
This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; we [call it JSX](). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. If you're using React as a `<script>` tag, read [this section]() on integrating JSX; otherwise, the [recommended JavaScript toolchains]() handle it automatically.

# Contributing

The main purpose of this repository is to continue evolving React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

## [Code of Conduct]()

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text]() so that you can understand what actions will and will not be tolerated.
## [Contributing Guide]() 
Read our [contributing guide]() to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React.
## Good First Issues
To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues]() that contain bugs which have a relatively limited scope. This is a great place to get started.
## License
React is [MIT licensed]().
|Project|Status|Description|
|--|--|--|