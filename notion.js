REQUEST
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const response = await notion.search({
    query: 'task',
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time',
    },
  });
  console.log(response);
})();