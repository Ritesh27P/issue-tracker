import prisma from "./prisma";

export const createIssue = async (title: string, description: string) => {
    const issue = await prisma.issue.create({
        data: {title, description}
    });

    return issue
}

export const getAllIssue = async () => {
    const allIssue = await prisma.issue.findMany()

    return allIssue
}