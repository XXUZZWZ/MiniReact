//console.log("Hello mini-app!");
//v1
// const dom = document.createElement("div");
// dom.id = "app";
// document.querySelector("#root").append(dom);
// const textNode = document.createTextNode("Hello mini-app!");
// textNode.nodeValue = "app";
// dom.append(textNode);

// v2 react -> vdom ->js object
// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app!",
//     children: [],
//   },
// };
function createTextNode(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "string" ? createTextNode(child) : child
      ),
    },
  };
}

// const App = createElement("div", { id: "app" }, createTextNode("app"));
// const textEl = createTextNode("app");
// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);
// Uncaught TypeError: Cannot read properties of undefined (reading 'type')
function render(el, container) {
  const dom =
    el.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(el.type);
  Object.keys(el.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });
  const children = el.props.children;

  children.forEach((child) => {
    // 递归调用渲染子节点
    render(child, dom);
  });

  container.append(dom);
}
// const App = createElement("div", { id: "app" }, "hi  ", "mini-react");
// const textEl = createTextNode("app");
// render(App, document.querySelector("#root"));

const React = {
  render,
  createElement,
};

export default React;
