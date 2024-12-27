const getRemToPixels = () => { 
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export default getRemToPixels;