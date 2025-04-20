"use client";
import NewLinkForm from "./NewLinkForm";
import { LinkProps } from "@/types";
import Link from "next/link";
import { useState } from "react";

export default function LinkDisplay() {
    const [links, setLinks] = useState<LinkProps | null>(null);

    function append(newLink: LinkProps) {
        setLinks(newLink);
    }

    function handleAlias(l: LinkProps | null) {
        if (l === null) {
            return <p></p>
        }
        try {
            if (l.alias === "") {
                return <p>Alias is invalid</p>
            } else if (l.link === "") {
                return <p>URL is invalid</p>
            } else if (l.id === "unavailable") {
                return <p>Alias is already taken</p>
            } else {
                return <p>Shortened link: <Link href={l.link}>{l.link}</Link></p>
            }
        } catch {
            return <p>Encountered database issue</p>
        }
    }

    return(
        <div className="flex flex-col items-center">
            <NewLinkForm append={append} />
            {handleAlias(links)}
        </div>
    );
}
