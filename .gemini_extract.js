const { execSync } = require('child_process');
const orig = execSync('git show 3908885:ai-ml-cloud-devops-mlops-roadmap.html', { encoding: 'utf8' });

// Extract all label with checkbox
const regex = /<label><input type="checkbox" data-id="([^"]+)">\s*([\s\S]*?)<\/label>/g;
const items = [];
let match;
while ((match = regex.exec(orig)) !== null) {
  items.push({ id: match[1], text: match[2].trim().replace(/\s+/g, ' ') });
}

console.log(`Total extracted: ${items.length}`);
console.log(JSON.stringify(items, null, 2));
