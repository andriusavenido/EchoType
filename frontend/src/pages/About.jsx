
const About = () => {
    return ( 
    <div className="about">
        <h1>Echotyper v1.0: Practice your Typing Skills</h1>
        <p>EchoTyper takes typing practice to the next level with a unique twist—competing against typing echoes! 
            Test your typing speed and accuracy by racing against these echoes, pushing yourself to beat the clock and set new records.</p>

        <h2>Features</h2>
            <ul>
                <li>Practice your typing speed</li>
                <li>To save your records, sign up and view them in the account page</li>
                <li>Modify theme and typing settings in options</li>
                <li>View and Post forums using our forum tab</li>
                <li>See the top typing records in our leaderboard page</li>
            </ul>

        <h2>Changelog</h2>
            <ul>
                <li>v1.0: Typing test and account features created along with the first version of the web app.</li>
                <li>v1.1 coming soon: Adding ability to save and compete against echoes </li>
            </ul>

        <h3>Created by Andrius Avenido and Gian Ev</h3>
        <div className="authored">
            <div className="authorCard">
                <h3>Avenido</h3>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </div>
            <div className="authorCard">
            <h3>GianEv</h3>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </div>
        </div>
    </div> 
    );
}
 
export default About;