export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: require("../app/assets/images/" + item.image) // Make sure you map the correct property
        };
    });
};

