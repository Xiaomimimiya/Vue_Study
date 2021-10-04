const h = (tag, props, children) => {

        // vnode 就是一个javascript对象
        return {
            tag,
            props,
            children
        }
    }
    // 虚拟DOM挂载
const mount = (vnode, container) => {
    //1.创建出真实的原生 并且在vnode 上保留el
    const el = vnode.el = document.createElement(vnode.tag);

    //2.处理props
    if (vnode.props) {
        for (const key in vnode.props) {
            const value = vnode.props[key];
            if (key.startsWith("on")) {
                // 对点击事件的判断
                el.addEventListener(key.slice(2).toLowerCase(), value);
            } else {
                el.setAttribute(key, value);
            }
        }
    }
    //3.处理children 子节点
    if (vnode.children) {
        if (typeof vnode.children === "string") {
            el.textContent = vnode.children;
        } else {
            vnode.children.forEach(item => {
                mount(item, el);
            });
        }
    }
    // 4.将el挂载到container上
    container.appendChild(el);
}

const patch = (node1, node2) => {
    if (node1.tag !== node2.tag) {
        const node1ElParent = node1.el.parentElement;
        node1ElParent.removeChild(node1.el);
        mount(node2, node1ElParent);
    } else {
        const el = node2.el = node1.el;

        //处理props
        const oldProps = node1.props || {};
        const newProps = node2.props || {};
        //添加到el中
        for (const key in newProps) {
            const oldvalue = oldProps[key];
            const newvalue = newProps[key];
            if (newvalue !== oldvalue) {
                if (key.startsWith("on")) {
                    el.addEventListener(key.slice(2).toLowerCase(), newvalue);
                } else {
                    el.setAttribute(key, newvalue);
                }
            }
        }
        // 删除旧的props
        for (const key in oldProps) {
            if (key.startsWith("on")) { // 对事件监听的判断
                const value = oldProps[key];
                el.removeEventListener(key.slice(2).toLowerCase(), value)
            }
            if (!(key in newProps)) {
                el.removeAttribute(key);
            }
        }
        //处理child
        const oldChildren = node1.children || {};
        const newChildren = node2.children || {};
        // newChildren字符串类型的情况
        if (typeof newChildren === "string") {
            if (typeof oldChildren === "string") {
                if (newChildren !== oldChildren) {
                    el.textContent = newChildren;
                }
            } else {
                el.innerHTML = newChildren;
            }
        } else {
            //  oldChildren字符串类型的情况
            if (typeof oldChildren === "string") {
                el.innerHTML = "";
                newChildren.forEach(item => {
                    mount(item, el);
                })
            } else {
                // 数组类型
                const commonLength = Math.min(oldChildren.length, newChildren.length);

                // newChildren.length = oldChildren.length
                for (let i = 0; i < commonLength; i++) {
                    patch(oldChildren[i], newChildren[i]);
                }
                // newChildren.length > oldChildren.length
                if (newChildren.length > oldChildren.length) {
                    newChildren.slice(oldChildren.length).forEach(item => {
                        mount(item, el);
                    })
                }
                // newChildren.length < oldChildren.length
                if (newChildren.length < oldChildren.length) {
                    oldChildren.slice(newChildren.length).forEach(item => {
                        el.removeChild(item.el);
                    })
                }
            }
        }
    }
}