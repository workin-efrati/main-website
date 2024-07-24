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
        if (!body.header || !body.question) {
            return { success: false, message: "חסר מידע" };
        }
        //אפשר לבטל אם מחליטים שאפשר לשאול שאלה אנונימית
        if ((!body.contactMethod || (!body.email && !body.phone)) || (body.contactMethod == "email" && !body.email || body.contactMethod == ("sms" || "whatsapp") && !body.phone)) {
            return { success: false, message: "פרטי התקשרות לא נקלטו בהצלחה" };
        }

        const question = {
            date: new Date(),
            status: 'pending',
            isAnswered: false,
            header: body.header,
            content: body.question,
            contactDetails: {
                contactBy: body.contactMethod,
                email: body.email || undefined,
                phone: body.phone || undefined,
            }
        }
        // await connectToMongo()
        // const newQuestion = await createQuestionService(question);
        // if (newQuestion.id) {
        //     return { success: true, message: 'שאלתך נקלטה בהצלחה! בקרוב תקבל מענה בערוץ שבחרת' };
        // }

        return { success: true, message: 'שאלתך נקלטה בהצלחה! בקרוב תקבל מענה בערוץ שבחרת', question: question };
        revalidatePath('/')
    } catch (error) {
        console.log({ error })
        return { success: false, message: error.message };
    }
    redirect('/')
}