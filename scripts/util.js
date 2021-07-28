const getNode = function(nodeId) {
    return document.getElementById(nodeId)
}

const getFloatFromElementId = function(nodeId) {
    return Number.parseFloat(getValueByElementId(nodeId)) || 0
}

const getCurrencyFromElementId = function(nodeId) {
    return Number.parseFloat(getValueByElementId(nodeId) * 100) || 0
}

const convertToDecimal = function(float) {
    return (float / 100).toFixed(2)
}

const getInnerHtmlFromElementId = function(nodeId) {
    return document.getElementById(nodeId).innerHTML
}

const getIntFromElementId = function(nodeId) {
    let result = Number.parseInt(
        getValueByElementId(nodeId)
    )
    return result;
}

const getValueByElementId = function (nodeId) {
    return getNode(nodeId).value
}

const setElementValueById = function(nodeId, value) {
    getNode(nodeId).value = value;
}

const setElementInnerHtmlById = function(nodeId, value) {
    getNode(nodeId).innerHTML = value;
}

const validateNodeIsNumber = function(node, functionNumber, functionNaN) {
    if(isNaN(node.target.value)) {
        functionNaN()
    } else (
        functionNumber()
    )
}
