
import { GameTypes } from "../../App"

export const ResultHeader = ({ results } : {results: GameTypes[]}) => {
    return (
        <h3>There {results.length === 1 ? "is " + results.length + " game" : "are " + results.length + " games"} to choose from.</h3>
    )
}