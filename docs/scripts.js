const username = 'yanbaish_80';
const repo = 'NOldVS';

async function getLatestRelease() {
    const url = `https://api.github.com/repos/${username}/${repo}/releases/latest`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.assets && data.assets.length > 0) {
            const downloadUrl = data.assets[0].browser_download_url;
            const tagName = data.tag_name;

            document.getElementById('version-tag').innerText = "Version: " + tagName;
            document.getElementById('download-btn').href = downloadUrl;
        } else {
            document.getElementById('version-tag').innerText = "No files found in latest release.";
        }
    } catch (error) {
        console.error("Error fetching release:", error);
        document.getElementById('version-tag').innerText = "Error loading release info.";
    }
}

getLatestRelease();
