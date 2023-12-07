import { creatComponent } from "./index4.js";

const myComponent = creatComponent('div ', { id: 'example', style: {color: 'red'}}, ['이것은 자스렸다']);
const root = document.getElementById('root');
root.innerHTML = myComponent;