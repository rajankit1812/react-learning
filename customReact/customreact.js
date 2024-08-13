//end of the day react aisehi chizo ko evaluate krti hi 

function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.append(domElement);
}


const reactElement = {       //react html ke elements ko kaise dekhta hai
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)