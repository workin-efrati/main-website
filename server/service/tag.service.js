const { readOne ,findById} = require("../controller/tags.controller");

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
        const categoryObject = await readOne(filter);
        if (!categoryObject) throw new Error("Category not found");

        // Function to get all parents
        const getParents = async (tag) => {
            const parents = [];
            let currentParent = tag.parent;

            while (currentParent) {
                const parentObject = await findById(currentParent);
                if (!parentObject) break;
                parents.push({name:parentObject.name,_id:parentObject._id});
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
                const childObject = await findById(childId);
                if (childObject) {
                    children.push({name:childObject.name,_id:childObject._id});
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


