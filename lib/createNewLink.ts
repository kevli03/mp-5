"use server";
import getCollection, { LINK_COLLECTION } from "@/db";
import isAliasTaken from "@/lib/isAliasTaken";
import { LinkProps } from "@/types";

export default async function createNewLink(alias: string, link: string,): Promise<LinkProps> {
    if (alias === "" || link === "") {
        return {id: "", alias: alias, link: link};
    }
    const unavailable = await isAliasTaken(alias)
    if (unavailable) {
        return {id: "unavailable", alias: alias, link: link};
    }

    const l = {alias: alias, link: link};

    const linkCollection = await getCollection(LINK_COLLECTION);
    const res = await linkCollection.insertOne({ ...l });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...l, id: res.insertedId.toHexString() };
}
