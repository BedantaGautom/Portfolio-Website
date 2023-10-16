const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Your GitHub Personal Access Token
const accessToken = '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';

// Endpoint to fetch starred repositories
app.get('/api/starred-repositories', async (req, res) => {
  try {
    // GitHub API URL for fetching starred repositories
    const apiUrl = 'https://api.github.com/user/starred';

    // Axios GET request to fetch starred repositories using the token
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching starred repositories:', error);
    res.status(500).json({ error: 'An error occurred while fetching repositories' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
