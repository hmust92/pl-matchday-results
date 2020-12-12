import axios from "axios";

export default function matchDayHandler(req, res) {
    axios
        .get(
            "https://prod-public-api.livescore.com/v1/api/react/stage/soccer/england/premier-league/-6.00"
        )
        .then((results) => {
            if (
                !results.data.Stages ||
                !results.data.Stages[0] ||
                !results.data.Stages[0].Events
            ) {
                res.status(404);
                return;
            }
            res.status(200).json(
                results.data.Stages[0].Events.filter(
                    (event) => event.Ern === 12
                ).map((event) => ({
                    id: event.Eid,
                    homeTeamName: event.T1[0].Nm,
                    awayTeamName: event.T2[0].Nm,
                    status: event.Eps,
                    homeTeamScore: Number(event.Tr1),
                    awayTeamScore: Number(event.Tr2),
                }))
            );
        });
}