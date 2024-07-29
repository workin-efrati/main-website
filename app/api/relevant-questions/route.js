
import { create } from "@/server/controller/tags.controller";
import tagsModel from "@/server/models/tags.model";
import QAModel from "@/server/models/qa.model";
import { readRelevantQaService } from "@/server/services/dailyData.service";
import { NextResponse } from "next/server";
import { connect } from "@/server/connect";
import HolidaysModel from "@/server/models/holidays.model";
import { getHebrewDateFromAPI, getDateInHe } from "@/helpers/formatDate";


export const GET = async () => {
    try {
        return NextResponse.json(await readRelevantQaService())
    } catch (error) {
        console.log({ error: error.message });
    }
}

export const POST = async (req) => {
    // await fixTags();
    const iii = await connectQuestionsAndParasha(false)
    console.log(iii);
    return NextResponse.json(iii)

}


// async function connectQuestionsAndParasha(dryRun = true) {
//         const cleanContentForSearch = (text) => {
//             return text
//                 .replace(/[^\u0590-\u05FF\s'"]/g, ' ')
//                 .replace(/\s+/g, ' ')
//                 .trim()
//                 .replace(/['"]/g, '"')
//                 .replace(/\\/g, '');
//         };
//         const cleanTag = (tag) => {
//             return tag
//                 .toLowerCase()
//                 // .replace(/^(פרשת|ספר)\s+/g, '')
//                 .replace(/\b(ו)(\S+)/g, '$2')
//                 .replace(/,/g, '')
//                 .trim();
//         };
//         try {
//             await connect();
//             const allTags = await HolidaysModel.find({ isActive: true });
//             // Create a map of cleaned tags
//             const tagMap = new Map();
//             allTags.forEach(tag => {
//                 if(tag.type === "parasha") {
//                 let cleanedTagName = cleanTag(tag.name);
//                 cleanedTagName = `${cleanedTagName}`
//                 // console.log(cleanedTagName)
//                 tagMap.set(cleanedTagName, tag._id.toString());}
//             });
//             const questions = await QAModel.find({ isActive: true });
//             let changesLog = [];
//             for (const question of questions) {
//                 const contentToSearch = cleanContentForSearch(`${question.title || ''} ${question.question} ${question.answer}`);
//                 const foundTags = new Set();
//                 tagMap.forEach((tagId, cleanedTagName) => {
//                     if (contentToSearch.includes(cleanedTagName)) {
//                         foundTags.add(tagId);
//                     }
//                 });
//                 // console.log(foundTags)
//                 // const existingTags = new Set();
//                 // const newTags = Array.from(foundTags).filter(tag => !existingTags.has(tag));
//                 if (foundTags.length > 0) {
//                     const proposedChanges = {
//                         questionId: question._id,
//                         currentTags: question.holidays,
//                         proposedNewTags: newTags,
//                         proposedFullTagSet: [...question.holidays, ...newTags]
//                     };
//                     changesLog.push(proposedChanges);
//                     if (!dryRun) {
//                         question.holidays = question.holidays ?  [...question.holidays, ...foundTags] : [...foundTags];
//                         await question.save();
//                         console.log(`Updated question ${question._id} with ${newTags.length} new proposed tags`);
//                     } else {
//                         console.log(`[DRY RUN] Would update question ${question._id} with ${newTags.length} new tags`);
//                     }
//                 }
//             }
//             console.log('Finished processing all questions');
//             return changesLog;
//         } catch (error) {
//             console.error('Error processing questions and tags:', error);
//             return null;
//         }
//     }
