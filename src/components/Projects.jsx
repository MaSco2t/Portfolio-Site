import "../styles/projects.css"
function Projects(){
    return(
        <div className="projects">
            <div className="project">
                    <p>My Workout</p>
                    <p>A website for people to log and track their workouts.</p>
                    <p>Users can add workouts, view their previous workouts, edit their previous workouts, and delete workouts.</p>
                    <p>The site has user authentication and account creation features.</p>
                    <p>Used: React, Express, MySQL, CSS</p>
                    <div>
                    <a href="https://youtu.be/IkJNQT8c6tw" target="_blank"><button className="site">Video Demo</button></a>
                    <a href="https://github.com/MaSco2t/My-Workout" target="_blank"><button className="github">Github</button></a>
                    </div>
            </div>
            <div className="project">
                    <p>Dining Hall Options Bot</p>
                    <p>A Python script which interacts with my university dining hall's website to get the daily meal options.</p>
                    <p>The script is programmed to execute at specified intervals on an Express server. The server gets the output, then emails me the options.</p>
                    <p>Used: Express, Selenium, Python, JavaScript</p>
                    <div>
                        <a href="https://github.com/MaSco2t/Dining-Hall-Monitor-Bot" target="_blank"><button className="github">Github</button></a>
                    </div>
            </div>
        </div>
    )
}
export default Projects;