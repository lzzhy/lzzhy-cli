/**
  * localStorage
  */

// 存储localStorage
export const setStore = (name, content) => {
    if(!name) return;
    if(typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);
}
// 获取localStorage
export const getStore = name => {
    if(!name) return;
    return window.localStorage.getItem(name);
}
// 清除localStorage
export const removeStore = name => {
    if(!name) return;
    window.localStorage.removeItem(name);
}


/**
  * sessionstorage
  */

//  存储sessionstorage
export const setStoreSession = (name,content) => {
    if(!name) return;
    if(typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name,content)
}
// 获取sessionStorage
export const getStoreSession = name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}
// 清除sessionStorage
export const removeStoreSession = name => {
    if(!name) return;
    window.sessionStorage.removeItem(name);
}




// 路由匹配
const fileNameRE = /^\.\/([^\s]+)\.js$/
export function importAll(modulesContext) {
    return modulesContext.keys().map((modulesPath) => {
        const moduleName = modulesPath.match(
            fileNameRE
        )
        return {
            moduleName,
            camelModuleName: moduleName[1].replace(
                /-(\w)/g,
                (_, c) => (c ? c.toUpperCase() : '')
            ),
            module: modulesContext(modulesPath).default
        }
    })
}