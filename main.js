// window.addEventListener('scroll', (ev)=>{
//     console.group();
//     console.groupEnd();
// })

// selecting project

    var box = document.getElementById("proj");
    var title = document.getElementById("title");
    var link = document.getElementById('links');
    var image = document.getElementById("images");
    var description = document.getElementById("description");

 
function showWebsite(){

    if(title.textContent == "Personal Website")
        alert("Project already displayed.");
    else {
        document.getElementById("title").textContent = "Personal Website";

        document.getElementById("linky").setAttribute('href', 'https://github.com/xochitlmagm/xochitlmedinaarreola');
        document.getElementById("linky").textContent = "Github";

        image.innerHTML = `
        <h1 style="height: 50%;">No images needed as you're right on the website! Enjoy.</h1>
        `
        // use ` for large blocks of html code
        description.innerHTML = `
        <p>Solo project.</p>
        <p>Following langauges were used: HTML, CSS, Javascript</p>
        <p>And I have added links to other projects where I showcase other languages and objectives in order to show what I can do.</p>
        <p>You can go to the Github link at the top or inspect the element right on this browser to take a look at the code.</p>
        `;
       
    }
}

function showWeekly(){

    if(title.textContent == "Weekly Planner")
    alert("Project already displayed.");
    else {
        document.getElementById("title").textContent = "Weekly Planner";

        document.getElementById("linky").setAttribute('href', 'https://github.com/xochitlmagm/2021-spring-cs160-sorcerers');
        document.getElementById("linky").textContent = "Github ";

        image.innerHTML = `
            <img src="WeeklyView.png" width="700px">
            <img src="MonthlyView.png" width="700px">
        `

        // automatically gets rid of what is in the description box already
        description.innerHTML = `
        <p>Group Project \ Software Engineering Course</p>
        <p>Following was used: HTML, CSS, Javascript, Java (Spring)</p>
        <p>About: A weekly planner that allowed the customer to view and schedule their life much better. Not only would they be able to view the current week or month on the same page, but as well as future deadlines on the side. It would also set a reminder for the customer</p>
        <p>I worked on the front end of the website. I created the wireframes that would give us an idea as to how it we want out website to look like. Then I used my web development knowledge to code and design each page like our wireframes and helped in making sure that the front end part of the website was coded properly so backend would be able to connect each page.</p>
        `


    }
}

function showHouse(){

    if(title.textContent == "House Market")
    alert("Project already displayed.");
    else {
        document.getElementById("title").textContent = "House Market";
        document.getElementById("linky").setAttribute('href', 'https://github.com/xochitlmagm/REPWebCrawler/tree/dataInput');
        document.getElementById("linky").textContent = "Github ";

        image.append();

        image.innerHTML = `
            <img src="house1a.png" alt="first page" height="500px">
            <img src="house2.png" alt="result page" height="500px" min-width="300px">
        `

        description.innerHTML = `
        <p>Group Project \ Artificial Intellegence Course</p>
        <p>Following was used: Python</p>
        <p>About: This is a program that can look at historical data for home prices for a few similar cities in order to look for patterns that might be advantageous for Real Estate Investment. This will be similar to the stock web crawler project.</p>
        <p>I worked on the user interface that made it simple for the customer to choose their preferences for their house and the interface for 
            the results that were created by the AI coded by my classmates.
        </p>
        `
    }
}

