function setWidth(el, val) {
    if (typeof val === "function") val = val();
    if (typeof val === "string") el.style.width = val;
    else el.style.width = val + "px";
}

setWidth(el, val);
