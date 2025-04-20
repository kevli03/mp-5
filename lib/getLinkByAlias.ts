import getCollection, { LINK_COLLECTION } from "@/db";

export default async function getLinkByAlias(alias: string): Promise<string | null> {
    const postsCollection = await getCollection(LINK_COLLECTION);
    const data = await postsCollection.find().toArray();

    if (data === null) {
        return null;
    }

    data.map((l) => {
        if (alias === l.alias) {
            return l.link;
        }
    });

    return null;
}
