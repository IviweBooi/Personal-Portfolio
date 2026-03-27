/**
 * GitHub Projects Loader
 * Fetches and renders repositories dynamically from GitHub API
 */

document.addEventListener('DOMContentLoaded', () => {
    const GITHUB_USERNAME = 'IviweBooi';
    const projectsContainer = document.querySelector('.personal-projects');
    
    if (!projectsContainer) return;

    // Show loading state
    projectsContainer.innerHTML = '<div class="loading-projects">Loading amazing projects...</div>';

    async function fetchGitHubRepos() {
        try {
            // Fetch all public repos, sorted by last updated
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }

            const repos = await response.json();
            
            // Filter out the portfolio repo itself and any forks if desired
            const filteredRepos = repos.filter(repo => 
                repo.name.toLowerCase() !== 'personal-portfolio' && 
                !repo.fork
            );

            renderProjects(filteredRepos);
        } catch (error) {
            console.error('Error fetching GitHub repos:', error);
            projectsContainer.innerHTML = '<div class="error-projects">Oops! Could not load projects. Please check back later.</div>';
        }
    }

    function renderProjects(repos) {
        projectsContainer.innerHTML = ''; // Clear container

        if (repos.length === 0) {
            projectsContainer.innerHTML = '<div class="no-projects">No public projects found.</div>';
            return;
        }

        repos.forEach(repo => {
            const projectCard = createProjectCard(repo);
            projectsContainer.appendChild(projectCard);
        });
    }

    // Fallback mapping for project details to keep original titles/descriptions
    const PROJECT_DATA = {
        'SA-Weather-App': {
            title: 'Weather App',
            description: 'A responsive weather application that provides real-time weather data with beautiful animations and intuitive user interface.'
        },
        'contacts-app': {
            title: 'Contacts Manager',
            description: 'A comprehensive contact management system with CRUD operations, search functionality, and modern UI design.'
        },
        'superhero-app': {
            title: 'Superhero Database',
            description: 'An interactive superhero database with detailed character information, search filters, and engaging visual design.'
        },
        'pine-city-zoo': {
            title: 'Pine City Zoo',
            description: 'A virtual zoo experience with interactive animal exhibits, educational content, and immersive navigation.'
        },
        'calculator-app': {
            title: 'Calculator App',
            description: 'A sleek calculator application with advanced mathematical operations, memory functions, and responsive design.'
        }
    };

    function createProjectCard(repo) {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Get details from mapping or fallback to GitHub data
        const mappedData = PROJECT_DATA[repo.name] || {};
        
        const formattedName = mappedData.title || repo.name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const description = mappedData.description || repo.description || 'A GitHub repository by ' + GITHUB_USERNAME;

        const socialImage = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;
        const liveLink = repo.homepage || repo.html_url;
        const githubLink = repo.html_url;

        card.innerHTML = `
            <div class="project-media loading">
                <div class="shimmer-loader"></div>
                <img src="${socialImage}" alt="${formattedName} Preview" loading="lazy">
                ${repo.homepage ? `
                    <a href="${liveLink}" class="live-badge" target="_blank">
                        <div class="circle"></div>
                        Live Site
                    </a>
                ` : ''}
            </div>
            <div class="project-info">
                <div class="project-header">
                    <h3 class="project-title">${formattedName}</h3>
                    <div class="project-links">
                        <a href="${githubLink}" class="github-link" target="_blank" title="View Source Code">
                            <img src="assets/icons/github.svg" alt="GitHub">
                        </a>
                    </div>
                </div>
                <p class="project-description">${description}</p>
            </div>
        `;

        // Handle image loading states
        const img = card.querySelector('img');
        const mediaContainer = card.querySelector('.project-media');

        img.onload = () => {
            mediaContainer.classList.remove('loading');
            mediaContainer.classList.add('loaded');
        };

        img.onerror = () => {
            // Fallback to a local image if GitHub social preview fails
            img.src = 'assets/images/design.jpg';
            mediaContainer.classList.remove('loading');
            mediaContainer.classList.add('loaded');
        };

        return card;
    }

    fetchGitHubRepos();
});
