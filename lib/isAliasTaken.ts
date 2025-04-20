import getCollection, {LINK_COLLECTION } from "@/db";

export default async function isAliasTaken(alias: string): Promise<boolean> {
    const postsCollection = await getCollection(LINK_COLLECTION);
    const data = postsCollection.find({ alias: alias });
    return data !== null;
}
