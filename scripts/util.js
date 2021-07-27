const getFloatFromElementId = function(nodeId) {
    let result = Number.parseFloat(
        getValueByElementId(nodeId)
    )
    if (result === NaN) {
        setElementInnerHtmlById("Error", `${nodeId} is not a valid number`)
        result = 0;
    }
    return result;
}

const getNode = function(nodeId) {
    return document.getElementById(nodeId)
}

const getIntFromElementId = function(nodeId) {
    let result = Number.parseInt(
        getValueByElementId(nodeId)
    )
    if (result === NaN) {
        setElementInnerHtmlById("Error", `${nodeId} is not a valid number`)
        result = 0;
    }
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