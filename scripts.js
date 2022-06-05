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
}

request.send()