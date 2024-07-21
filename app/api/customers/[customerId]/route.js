
import { NextResponse } from "next/server";

export const GET = async () => {
   console.log("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️")
   try {
      const posts = [
         { id: 1, title: "First Post", content: "This is the first post" },
         { id: 2, title: "Second Post", content: "This is the second post" },
         { id: 3, title: "Third Post", content: "This is the third post" },
      ]
      return NextResponse.json(posts)
   } catch (error) {
      console.log(error);
   }
}

// export const POST = async () => {

// }

