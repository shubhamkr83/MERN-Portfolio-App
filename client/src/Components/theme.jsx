import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
};
export const darkTheme = {
    backgroundColor: "#000",
    fontColor: "#fff",
    homeFontColor: "#cfcfcf",
    boxShadow: "none",
    secondary_color: "#0084F1",
    boxShadow2: "-7px 6px 18px 2px #0084F1",
    filter: "drop-shadow(0 0 0 rgb(0, 0, 0))",
    projectBg: "#333333",
    backgroundImage: "none",
};

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.fontColor};
}

${'' /* ------- home section ------------ */}
.home_section .left_sec h3{
    color: ${props => props.theme.homeFontColor};
}
.left_sec .icons .MuiSvgIcon-root{
    color: ${props => props.theme.fontColor}
}
.left_sec .icons .MuiSvgIcon-root:hover{
    color: ${props => props.theme.secondary_color}
}
.home_section .center_home .right_sec {
    filter: ${props => props.theme.filter};
}

${'' /* ------- Skill section ------------ */}
.skill_section .center_section .card{
    background-color: ${props => props.theme.projectBg};
    color: ${props => props.theme.fontColor};
    box-shadow: ${props => props.theme.boxShadow};
}

${'' /* ------- Technology section ------------ */}
.tech_section .tech_center .tech img{
    box-shadow: ${props => props.theme.boxShadow2};
}
.tech_section .tech_center .tech h2{
    color: ${props => props.theme.fontColor};
}

${'' /* -------- Project Section ---------------- */}

.project_section{
    background-color: ${props => props.theme.projectBg};
}
.project_nav button{
    color: ${props => props.theme.fontColor};
}

${'' /* -------- Contact Section ---------------- */}
.contact_section{
    background-image: ${props => props.theme.backgroundImage};
}
.center_contact button{
    color: ${props => props.theme.fontColor};
}

`;