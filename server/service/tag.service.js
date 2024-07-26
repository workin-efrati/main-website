import { findById, read, readOne } from '@/server/controller/tags.controller.js';
import tagsModel from "../models/tags.model";

const populateChildren = async (tag, depth = 0, maxDepth = 4) => {
    if (depth > maxDepth) return tag;
  
    const populatedTag = await tag.populate('children', 'name children');
    if (populatedTag.children && populatedTag.children.length > 0) {
      for (let child of populatedTag.children) {
        child = await populateChildren(child, depth + 1, maxDepth);
      }
    }
    return populatedTag;
  };

  export const getAllTagsService = async (maxDepth = 4) => {
    try {
      const tags = await read({}, '_id name children');
      const populatedTagsPromises = tags.map(tag => populateChildren(tag, 0, maxDepth));
      const populatedTags = await Promise.all(populatedTagsPromises);
      return populatedTags;
    } catch (error) {
      console.error("Error fetching tags:", error);
      throw error;
    }
  };



export const readOneService = (filter) => {
    const categoryObject = readOne(filter);
    return categoryObject;
}


export const getAllTagsService2 = async () => {
    try {
        const allTags = await tagsModel.find();
        console.log(allTags);
        return allTags;
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


