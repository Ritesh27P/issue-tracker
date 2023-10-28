// import { createIssue } from "@/prisma/issue";
// import { NextRequest, NextResponse } from "next/server"

// const handler = async (req: NextRequest) => {
//     try {
        
//         switch (req.method) {
//             case 'POST':
//                 const newIssue = await createIssue('t1', 'description1')
//                 return NextResponse.json(newIssue, {status: 201});
        
//             default:
//                 break;
//         }

//     } catch (error) {
//         return error
//     }
// }

// export default handler


































// import prisma from "@/prisma/client";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { createIssue } from "@/prisma/issue";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createIssueSchema = z.object({
    title: z.string().min(1).max(225),
    description: z.string().min(1)
})

export async function POST(request: NextRequest) {
    const body = await request.json() 
    const validation = createIssueSchema.safeParse(body);
    
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
    }

    try {
        // await prisma.$connect()
        // console.log(prisma.issue);
        
        const newIssue = await createIssue(body.title, body.description)

        return NextResponse.json(newIssue, {status: 201})

    } catch (error) {
        return NextResponse.json({error: error}, {status: 500})
    }
}
