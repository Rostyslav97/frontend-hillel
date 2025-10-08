import React from "react";

class EmojiVoting extends React.Component {
    constructor(props) {
        super(props);
        this.emojis = ["😀", "😂", "😍", "😎", "🤔"];
        this.state = {
            votes: Array(this.emojis.length).fill(0),
            winner: null,
        };
    }

    handleVote(index) {
        const votes = [...this.state.votes];
        votes[index] += 1;
        this.setState({ votes });
    }

    showResults() {
        const maxVotes = Math.max(...this.state.votes);
        const winnerIndex = this.state.votes.indexOf(maxVotes);
        this.setState({ winner: this.emojis[winnerIndex] });
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <h2>Vote for your favorite emoji!</h2>

                <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
                    {this.emojis.map((emoji, index) => (
                        <div key={index} style={{ textAlign: "center" }}>
                            <button
                                style={{
                                    fontSize: "2rem",
                                    cursor: "pointer",
                                    background: "none",
                                    border: "2px solid #ccc",
                                    borderRadius: "10px",
                                    padding: "10px",
                                }}
                                onClick={() => this.handleVote(index)}
                            >
                                {emoji}
                            </button>
                            <div>Votes: {this.state.votes[index]}</div>
                        </div>
                    ))}
                </div>

                <button
                    style={{
                        marginTop: "2rem",
                        padding: "10px 20px",
                        fontSize: "1rem",
                        cursor: "pointer",
                    }}
                    onClick={() => this.showResults()}
                >
                    Show Results
                </button>

                {this.state.winner && (
                    <div style={{ marginTop: "1.5rem", fontSize: "2rem" }}>
                        🏆 Winner: {this.state.winner}
                    </div>
                )}
            </div>
        );
    }
}

export default EmojiVoting;
