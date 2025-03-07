import user_image from './user-image.png';
import project_icon from './project-icon.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import mail_icon from './mail_icon.png';
import header_bg_color from './header-bg-color.png';
import arrow_icon from './arrow-icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import download_icon_white from './download-icon-white.png'
import screen_one from './Screen1.jpg'
import github_icon from './github-mark.png'
import linkedin_icon from './linkedin.png'
import catlas from './catlas.jpg'
import shelfspace from './shelfspace.jpg'
import handcrafted from './handcrafted.jpg'


export const assets = {
    user_image,
    project_icon,
    right_arrow_white,
    logo,
    mail_icon,
    download_icon_white,
    header_bg_color,
    arrow_icon,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    screen_one,
    github_icon,
    linkedin_icon,
    catlas,
    shelfspace,
    handcrafted
};

export const projectData = [
    { title: 'Doctor Directory Backend', image: assets.screen_one, link: "https://doctor-directory.onrender.com/api-docs", gitHub: "https://github.com/kjirstenhernandez/doctor-database", description: `A directory management site designed to streamline access to contact information for medical providers and offices across Utah Valley. The platform allows authorized users to search, filter, and view provider listings, while admins can manage provider and office details. By simplifying the process of connecting with other physicians, this site is expected to significantly improve continuity of care and reduce the time and effort required by staff. Utilizes Javascript, Google OAuth, MongoDB, `},
    {title: 'Catlas', image: assets.catlas, gitHub: "https://github.com/kjirstenhernandez/catlas", link: "https://catsandcatsandcats.netlify.app/",description: "Catlas is a website built for cat lovers using the Parcel framework and JavaScript. It allows users to explore every domesticated cat breed in the world and provides a way to save favorite breeds using local storage. The site fetches breed data from The Cat API and dynamically loads pages, including a breed overview and a detailed page for each selected breed.\nCatlas also features a playful design, including a yarn mouse cursor and a JavaScript image carousel. \nBy creating this website, I’ve provided both an excellent reference for domesticated cat breeds and a visually enjoyable space where anyone can browse cat pictures whenever they need a serotonin boost."},
    {title: 'Shelfspace', image: assets.shelfspace, link: "", gitHub: "https://github.com/kjirstenhernandez/ShelfSpace", description:'ShelfSpace is an online media tracking app that allows users to catalog their owned media, including movies, books, music, and TV shows, in a virtual "media shelf" for improved organization and easy access. Users can create accounts secured through JWT authentication. Upon logging in, they can view their media shelf, add, edit, and delete media items, as well as filter and search through their collections. \n ShelfSpace is primarily written in C# using the Blazor framework, with Razor as the template engine. Development was done in Visual Studio Code. While we attempted to deploy the application using Azure, we were unable to make the site live and publicly accessible. \n This was a team project, and my contributions included implementing authorization and authentication, developing the "Create Account" page and its functionality, and debugging the "Add" and "Edit" features for individual media items.'},
    {title: 'Handcrafted Haven', image: assets.handcrafted, link: "https://handcrafted-haven-jo58.vercel.app/", gitHub: "https://github.com/kamismith02/handcrafted-haven", description:'Handcrafted Haven iis an online marketplace for artisan crafts, where users can purchase handmade goods from individual sellers or open their own shops to sell their creations.  \n   The project is primarily built with TypeScript, using Next.js for the framework and Tailwind CSS for styling. It leverages React for the UI, MongoDB for the database, and was intended to use Next-Auth for authentication, though that component was never completed. Development was done in Visual Studio Code, and the application is deployed through Vercel. \n This was a team project, and my contributions included developing the "Manage Shop" page, implementing backend endpoints for profile information, creating the "Your Favorites" list wrapper on the profile page, designing the profile page UI, setting up datadabase creation and connection, and designing the logos and icons.'}
]

export const educationInfo = [
    {degree: 'Bachelor of Science in Applied Technology', school: 'Brigham Young University - Idaho', location: 'Rexburg, ID', dates: 'Aug 2022 - Aug 2025', accomplishments: [{bullet: "GPA of 3.97"}, {bullet: 'Developed the backend for a JavaScript web application enabling userse to store and manage doctor and office contact information, enhancing continuity of care.'}, {bullet: 'Designed and implemented a responsive web page using Node.js, APIs, and object-oriented JavaScript to dynamically display a list of cat breeds, with detailed information accessible on click.'},{ bullet: 'Collaborated with a team to develop a Next.js e-commerce application that enables users to search, filter, and purchase products, create and manage personalized shops, and sell handmade items.'}, {bullet: 'Collaborated with a team to develop an ASP.NET Core application using an SQLite database, providing users an organized platform to track personal media collections online by creating an account-, adding, editing, or deleting media items, and searching or filtering through their collection.'}]}
]

export const experienceInfo = [
    {position: 'Ophthalmic Technician', dates: 'April 2015 - Current', business: 'Utah Valley Eye Center', location: 'Provo, UT', accomplishments: [
        {bullet: 'Provided backup IT support by troubleshooting technical issues, performing computer mainten- ance, and addressing hardware challenges in the absence of dedicated IT staff.'}, 
        {bullet: 'Conducted patient intake by actively listening to symptoms and concerns, analyzing information to identify relevant follow-up questions, and determining the need for additional tests to ensure accurate and efficient care.'}, 
        {bullet: 'Achieved a 98% patient satisfaction rating as a team by ensuring timely patient care and managing high-priority tasks, thus streamlining workflow and maintaining operational consistency to meet critical deadlines.'}
    ]}, 
    {position: 'Graphic Designer', dates: 'January 2018 - Current', business: 'Utah Valley Eye Center', location: 'Provo, UT', accomplishments: [
        {bullet: 'Collaborated with the marketing coordinator to implement a data-driven social media strategy that yielded a 40% increase in engagement and growth over the course of one year.'},
        {bullet: 'Designed and produced compelling visual media using Photoshop and Illustrator, resulting in a 127% increase in audience reach.'
        }
    ]}
]

export const skillsList = ['JavaScript, .NET, HTML/CSS, C#, SQL', 'Git, Github', 'Adobe Photoshop and Illustrator', 'Problem-Solving', 'Critical Thinking', 'Communication and Teamwork']