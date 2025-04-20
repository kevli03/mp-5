import getLinkByAlias from "@/lib/getLinkByAlias";
import { redirect } from "next/navigation";

export default async function LinkPage({ params }: { params: Promise<{alias: string}> }) {
    const { alias } = await params;
    console.log(alias);

    try {
        const link: string | null = await getLinkByAlias(alias);
        if (link === null) {
            return redirect("/");
        }
        return redirect(link);
    } catch (err) {
        console.error(err);
        return redirect("/");
    }
}
