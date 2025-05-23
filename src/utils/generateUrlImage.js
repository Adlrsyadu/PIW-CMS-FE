export const generateImageUrl = (imageName) => {
    const encodedImageName = imageName.replace(/ /g, "%20");
    return `http://localhost:5555/upload/${encodedImageName}`;
};
