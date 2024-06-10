function customRender(reactEle,container)
{
    const domElement = document.createElement(reactEle.type);
    domElement.innerHTML = reactEle.children; 
    // Hardcoded way without looping. We can also use innerText below
    // domElement.setAttribute('href',reactEle.props.href);
    // domElement.setAttribute('target',reactEle.props.target);

    for (prop in reactEle.props)
        {
            if (prop === 'children') continue;
            domElement.setAttribute(prop,reactEle.props[prop]);
        }

    container.appendChild(domElement);
}


const ReactElement = {
    type: 'a',
    props: {
        'href': 'https://www.google.com',
        'target': '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(ReactElement,mainContainer);