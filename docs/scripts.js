const username = 'yanbaish80';
const repo = 'NOldVS'; 

async function getLatestRelease() {
    const url = `https://api.github.com/repos/${username}/${repo}/releases/latest`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.assets && data.assets.length > 0) {
            const downloadUrl = data.assets[0].browser_download_url;
            const tagName = data.tag_name;

            document.getElementById('version-tag').innerText = "Latest Version: " + tagName;
            document.getElementById('download-btn').href = downloadUrl;
            console.log("Success! Linked to: " + downloadUrl);
        } else {
            document.getElementById('version-tag').innerText = "Release found, but no files attached.";
        }
    } catch (error) {
        console.error("Error fetching release:", error);
        document.getElementById('version-tag').innerText = "Status: API Connection Error";

        alert(error.message); 
    }
}

getLatestRelease();
