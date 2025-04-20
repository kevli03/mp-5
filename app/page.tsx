import LinkDisplay from "@/components/LinkDisplay";

export default async function Home() {
    return (
        <div className="flex flex-col items-center">
            <h1>URL Shortener</h1>
            <LinkDisplay />
        </div>
    );
}
