const ReactQuestions = () => {
    return(
        <div>
            <div>
                <h1>Task Questions</h1>
            </div>

            <div>
                <h3>Explain how the import and export statements work</h3>
                <p>
                    At the beginning of a file we import the components that we want to use.
                    For example:<br/>
                    <strong>import OlympicHeader from "./components/OlympicHeader.jsx";</strong><br/>
                    To make the component available for other files, we export it at the end of the file:<br/>
                    <strong>export default OlympicHeader;</strong>
                </p>
                <h3>Why should properties never be modified</h3>
                <p>
                    The parent component owns the data. Props in React are read-only, so they should not be modified by child components.
                    If you try to change a prop directly, React will throw an error.
                </p>
                <h3>Can the state variable be updated directly?</h3>
                <p>
                    No, state variables cannot be updated directly. React would not re-render the component.
                    Instead, we must update the state using the setter function (for example setState).
                </p>

            </div>
        </div>

    )
};

export default ReactQuestions;