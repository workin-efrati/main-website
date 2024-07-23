"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
// import { connectToMongo } from "@/server/connectToMongo"
// import { cookies } from "next/headers";
// import { createQuestionService } from "../services/question.service"

export const createQuestionAction = async (prevState, fd) => {
    await new Promise((resolve, reject) => { setTimeout(resolve, 1000 * 3) })
    const body = Object.fromEntries(fd)
    // const content = JSON.parse(body.question);
    console.log(body.question);
    try {
        if (!body.question
            || (!body.contactMethod || (!body.email && !body.phone))
        ) {
            return { success: false, error: "error.message" };
        }
        // await connectToMongo()
        const question = {
            content: body.question,
            contactDetails: {
                contactBy: body.contactMethod,
                email: body.email || undefined,
                phone: body.phone || undefined,
            }
        }

        // const newQuestion = await createQuestionService(question);
        // if (newQuestion.id) {
        //     return { success: true, message: 'Question added successfully' };
        // }

        return { success: true, message: 'השאלה נקלטה בהצלחה, בקרוב תקבל מענה', question: question };
        revalidatePath('/')
    } catch (error) {
        console.log({ error })
        return { success: false,  message: error.message };
    }
    redirect('/')
}