import React, { useState, useEffect } from 'react';

function useStarredRepositories() {
    const [starredRepos, setStarredRepos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`${process.env.PUBLIC_URL}/api/starred-repositories`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Additional info you want to fetch (e.g., description, labels)
          const repositoryInfoPromises = data.map((repo) => {
            return fetch(repo.url)
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              });
          });
  
          // Fetch additional info for each repository in parallel
          Promise.all(repositoryInfoPromises)
            .then((repositoryInfo) => {
              const starredReposWithInfo = data.map((repo, index) => ({
                name: repo.name,
                html_url: repo.html_url,
                description: repositoryInfo[index].description,
                labels: repositoryInfo[index].labels,
              }));
              setStarredRepos(starredReposWithInfo);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error('Error fetching starred repositories:', error);
          setLoading(false);
        });
    }, []);
  
    return { starredRepos, loading };
  }
  
  export default useStarredRepositories;