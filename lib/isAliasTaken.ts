import getCollection, {LINK_COLLECTION } from "@/db";

export default async function isAliasTaken(alias: string): Promise<boolean> {
    if (alias === "") {
        return true;
    }

    const postsCollection = await getCollection(LINK_COLLECTION);
    const data = await postsCollection.find().toArray();

    if (data === null) {
        return false;
    }

    data.map((l) => {
        console.log(l.alias);
        if (alias === l.alias) {
            return true;
        }
    });

    return false;
}
