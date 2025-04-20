import getCollection, { LINK_COLLECTION } from "@/db";

export default async function getLinkByAlias(alias: string): Promise<string | null> {
    const postsCollection = await getCollection(LINK_COLLECTION);
    const data = postsCollection.find({ alias: alias });

    if (data === null) {
        return null;
    }

    data.map((l) => {
        return l.link;
    });

    return null;
}
