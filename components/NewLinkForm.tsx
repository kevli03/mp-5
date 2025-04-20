import createNewLink from "@/lib/createNewLink";
import { LinkProps } from "@/types";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function NewPostForm({ append }: { append: (newLink: LinkProps) => void }) {
    const [alias, setAlias] = useState("");
    const [link, setLink] = useState("");

    return (
        <form
            className="w-96 rounded-xl p-4 bg-sky-400"
            onSubmit={(e) => {
                e.preventDefault();
                createNewLink(alias, link)
                    .then((l) => append(l))
                    .catch((err) => console.error(err));
            }}
        >
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                type="url"
                label="URL"
                placeholder="https://example.com/url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                label="Alias"
                placeholder="your-alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <div className="w-full flex justify-center">
                <Button type="submit" variant="contained" sx={{ width: "80px" }}>
                    Shorten
                </Button>
            </div>
        </form>
    );
}
