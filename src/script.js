// adding functionality for the tech stack button
const displayStack = () => {
    document.getElementById('stack-button').style.display = 'none';
    document.getElementById('stack-container').style.display = 'flex';
}

const openResume = event => {
    window.location.href="./resume.html";
}

const openAboutMe = event => {
    window.location.href="./index.html"
}