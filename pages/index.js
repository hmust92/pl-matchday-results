import useSWR from "swr";
import axios from "axios";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import MatchDay from "../components/MatchDay";

const fetcher = (url) => axios.get(url).then((response) => response.data);

const Index = () => {
    const { data: events, error } = useSWR("/api/matchday", fetcher);
    if (error) return <div>Failed to load</div>;
    if (!events) return <div>Loading...</div>;

    return (
        <Layout>
            <Heading>Match Day 12</Heading>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                {events.map(({ id, ...event }) => (
                    <MatchDay key={id} {...event} />
                ))}
            </div>
        </Layout>
    );
};

export default Index;
