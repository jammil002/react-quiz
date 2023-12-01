export default function StartScreen({ numQuestions, dispatch }) {
    return (
    <div> 
        <h2 className="start">Welcome to The React Quiz!</h2>
        <p>{numQuestions} question to test your React mastery</p>
        <button className="btn btn-ui" onClick={() => dispatch({type: "start"}) }>Let's start</button>
    </div>)
}