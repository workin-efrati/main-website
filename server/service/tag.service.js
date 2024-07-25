import tagsModel from "../models/tags.model.js";
const { readOne } = require("../controller/tags.controller");

export const readOneService = (filter) => {
    const categoryObject = readOne(filter);
    return categoryObject;
}

export const getAllTagsService = async () => {
    try {
        // const allTags = await tagsModel.find();
        console.log('allTags');
    }
    catch (err) {
        console.log(err);
    }
}
export const familyOfCategoryService = async (filter) => {
    try {
        const categoryObject = await tagsModel.findOne(filter);
        if (!categoryObject) throw new Error("Category not found");

        // Function to get all parents
        const getParents = async (tag) => {
            const parents = [];
            let currentParent = tag.parent;

            while (currentParent) {
                const parentObject = await tagsModel.findById(currentParent);
                if (!parentObject) break;
                parents.push(parentObject.name);
                currentParent = parentObject.parent;
            }

            return parents;
        };

        // Function to get all children and grandchildren recursively
        const getChildren = async (tag) => {
            const children = [];
            const stack = [...tag.children];

            while (stack.length) {
                const childId = stack.pop();
                const childObject = await tagsModel.findById(childId);
                if (childObject) {
                    children.push(childObject.name);
                    stack.push(...childObject.children);
                }
            }

            return children;
        };

        const parents = await getParents(categoryObject);
        const children = await getChildren(categoryObject);

        console.log({ parents }, "-----------------------------------");
        return ({
            categoryObject,
            parents,
            children,
        });
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching category family");
    }
};


