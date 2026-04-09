const username = 'yanbaish_80';
const repo = 'NOldVS';

async function getLatestRelease() {
    const url = `https://api.github.com/repos/${username}/${repo}/releases`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.length > 0) {
            const latest = data[0]; 
            const downloadUrl = latest.assets[0].browser_download_url;
            const tagName = latest.tag_name;

            document.getElementById('version-tag').innerText = "Version: " + tagName;
            document.getElementById('download-btn').href = downloadUrl;
        } else {
            document.getElementById('version-tag').innerText = "No releases found.";
        }
    } catch (error) {
        console.error("Error fetching release:", error);
        document.getElementById('version-tag').innerText = "Error loading release info.";
    }
}

getLatestRelease();
