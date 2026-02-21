# TA0008
IIOT Hackathon


Libraries for Backend
fastapi
pydantic
sqlalchemy

## ⚙️ How to Run the Backend Locally

The backend is built using **FastAPI** and uses a local **SQLite** database, meaning there is no complex server configuration required. 

### Prerequisites
Make sure you have [Python 3.8+](https://www.python.org/downloads/) installed on your system. Remember to check the **"Add Python to PATH"** box during installation.

### Step 1: Clone the Repository
Open your terminal and clone the project:
```bash
git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
cd YOUR-REPO-NAME/backend

```
Step 2: Install Dependencies
python -m pip install fastapi uvicorn sqlalchemy pydantic

Step 3: Start the server from terminal
python -m uvicorn P1:app --reload



For Extensions:

## 🧩 How to Install the Browser Extension

Since this is a developer prototype, the extension is loaded locally in "Unpacked" mode. It works on both Google Chrome and Microsoft Edge.

### ⚠️ Prerequisite
Make sure your **FastAPI Backend is currently running** (see steps above). If the backend is off, the extension will not be able to calculate risk scores!

### Step 1: Open Extension Settings
1. Open your browser (Chrome or Edge).
2. Type the following into your URL bar and hit Enter:
   * **Chrome:** `chrome://extensions/`
   * **Edge:** `edge://extensions/`

### Step 2: Enable Developer Mode
In the top right corner (or left sidebar in Edge), find the toggle switch for **"Developer mode"** and turn it **ON**. 
[Image of Chrome Extension Developer Mode toggle and Load Unpacked button]

### Step 3: Load the Extension
1. Once Developer mode is on, a new menu bar will appear at the top.
2. Click the **"Load unpacked"** button.
3. A file browser window will open. Navigate to your cloned repository and select the **`ScamGuardian_Extension`** folder (the folder that contains the `manifest.json` file). 
4. Click **"Select Folder"**.

### Step 4: Test it Live! 🚀
1. You should now see the "AI Scam Guardian" card in your list of extensions.
2. Open a new tab and go to any website. 
3. The extension will automatically scan the text and URL, send it to your local Python backend, and inject a **Safe**, **Caution**, or **Dangerous** banner at the top of the page!

*Note: If you make any changes to the `content.js` or `manifest.json
