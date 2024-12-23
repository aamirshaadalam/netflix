const useRemToPixels = () => {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
};
 

export default useRemToPixels;