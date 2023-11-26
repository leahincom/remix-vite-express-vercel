import { json } from "@remix-run/node";

export const loader = () => {
    return json(
        {},
        {
            status: 404,
        },
    );
};

export default function NotFoundPage() {
    return <div>Wrong</div>;
}
