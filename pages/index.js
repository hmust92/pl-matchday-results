import useSWR from "swr";
import axios from "axios";
import ErrorPage from "next/error";
import Image from "next/image";
import MatchDayCard from "../components/MatchDayCard";

const fetcher = (url) => axios.get(url).then((response) => response.data);

const Index = () => {
    const { data = {}, error } = useSWR("/api/matchDay", fetcher);

    const { matchDay, events } = data;

    if (error) return <ErrorPage statusCode={error.response.status} />;

    if (!events)
        return (
            <div className="loading">
                <Image src="/loading-indicator.svg" width={60} height={60} />
                <style jsx>{`
                    .loading {
                        display: flex;
                        height: 100vh;
                        justify-content: center;
                    }
                `}</style>
            </div>
        );

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
