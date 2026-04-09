const username = 'yanbaish80';
const repo = 'NOldVS'; 

async function getLatestRelease() {
    const url = `https://api.github.com/repos/${username}/${repo}/releases/latest`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Release not found (Check if it is a Full Release)');
        
        const data = await response.json();
        const downloadUrl = data.assets[0].browser_download_url;
        const tagName = data.tag_name;

        document.getElementById('version-tag').innerText = "Version: " + tagName;
        document.getElementById('download-btn').href = downloadUrl;
        
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('version-tag').innerText = "Status: Release is in progress...";
    }
}

getLatestRelease();
