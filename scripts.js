const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY});

async () => {
    const response = await notion.databases.query({
        const pageId = 'ba02ced6db5c496989c61072ae0adabd';
        const response = await notion.pages.retrieve({page_id: pageId});
        console.log(response);
})();


  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()