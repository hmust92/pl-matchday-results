import useSWR from "swr";
import axios from "axios";
import MatchDayCard from "../components/MatchDayCard";

const fetcher = (url) => axios.get(url).then((response) => response.data);

const Index = () => {
    const { data: events, error } = useSWR("/api/matchday", fetcher);
    if (error) return <div>Failed to load</div>;
    if (!events) return <div>Loading...</div>;

    return (
        <div className="p24">
            <h1>Match Day 12</h1>
            <div className="cardsContainer">
                {events.map(({ id, ...event }) => (
                    <MatchDayCard key={id} {...event} />
                ))}
            </div>
            <style jsx>{`
                h1 {
                    margin-top: 0px;
                }
                .p24 {
                    padding: 24px;
                }
                .cardsContainer {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
};

export default Index;
