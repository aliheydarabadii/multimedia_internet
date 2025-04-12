// Function to adjust navigation links based on current page
function adjustNavigationLinks() {
    console.log('Adjusting navigation links...');
    const isInSectionsFolder = window.location.pathname.includes('sections/');
    console.log('Is in sections folder:', isInSectionsFolder);
    
    const navLinks = document.querySelectorAll('.nav-links a');
    console.log('Found navigation links:', navLinks.length);
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        console.log('Processing link:', href);
        
        // Skip external links
        if (href.includes('http://') || href.includes('https://')) {
            console.log('Skipping external link:', href);
            return;
        }
        
        // Adjust paths based on current location
        if (isInSectionsFolder) {
            // If we're in the sections folder, add ../ to links to the main page
            if (href.startsWith('index.html')) {
                const newHref = '../' + href;
                console.log('Adjusting link from', href, 'to', newHref);
                link.setAttribute('href', newHref);
            }
        } else {
            // If we're in the root folder, remove ../ from links
            if (href.startsWith('../index.html')) {
                const newHref = href.substring(3);
                console.log('Adjusting link from', href, 'to', newHref);
                link.setAttribute('href', newHref);
            }
        }
    });
}

// Function to highlight active menu item based on current page
function highlightActiveMenuItem() {
    console.log('Highlighting active menu item');
    const currentPage = window.location.pathname;
    const currentHash = window.location.hash;
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if this is the current page
        if (currentPage.includes(href) || 
            (currentHash && href === currentHash) || 
            (currentPage.endsWith('index.html') && href === '#home' && !currentHash)) {
            link.classList.add('active');
            
            // If it's in a submenu, expand the parent
            const submenu = link.closest('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
                const parentLi = submenu.parentElement;
                parentLi.classList.add('active');
            }
        } else {
            link.classList.remove('active');
        }
    });
}

// Function to load navigation component
async function loadNavigation() {
    console.log('Loading navigation component...');
    try {
        // Check if we're on the playback applications page
        if (window.location.pathname.includes('playback-applications.html')) {
            console.log('On playback applications page, using embedded navigation');
            // Skip loading navigation since it's already embedded in the page
            adjustNavigationLinks();
            highlightActiveMenuItem();
            setupNavigationListeners();
            return;
        }

        // For other pages, load navigation dynamically
        const isInSectionsFolder = window.location.pathname.includes('sections/');
        const navigationPath = isInSectionsFolder ? '../components/navigation.html' : 'components/navigation.html';
        
        // Add a cache-busting parameter with a unique timestamp
        const cacheBuster = '?v=' + new Date().getTime();
        const fullPath = navigationPath + cacheBuster;
        
        console.log('Loading navigation from:', fullPath);
        const response = await fetch(fullPath, {
            cache: 'no-store', // Force fetch to bypass cache
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const navigationHtml = await response.text();
        console.log('Navigation HTML loaded, length:', navigationHtml.length);
        
        // Insert the navigation into the page
        const sidebarContainer = document.querySelector('.sidebar-container');
        if (sidebarContainer) {
            console.log('Found sidebar container, inserting navigation');
            sidebarContainer.innerHTML = navigationHtml;
            console.log('Navigation loaded successfully');
            
            // Force a refresh of navigation links
            adjustNavigationLinks();
            
            // Force highlight of active menu item
            highlightActiveMenuItem();
            
            // Set up navigation listeners
            setupNavigationListeners();
        } else {
            console.error('Sidebar container not found');
        }
    } catch (error) {
        console.error('Error loading navigation:', error);
        // Display error message in the sidebar container
        const sidebarContainer = document.querySelector('.sidebar-container');
        if (sidebarContainer) {
            sidebarContainer.innerHTML = `
                <div class="error-message">
                    <h3>Error Loading Navigation</h3>
                    <p>There was a problem loading the navigation component.</p>
                    <p>Error details: ${error.message}</p>
                    <p>Please try accessing the site through a web server instead of using the file:// protocol.</p>
                    <p>You can use a simple Python server: <code>python -m http.server 8000</code></p>
                    <p>Then access the site at: <code>http://localhost:8000</code></p>
                </div>
            `;
        }
    }
}

// Function to set up navigation event listeners
function setupNavigationListeners() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            console.log('Clicked link:', href);
            
            // Check if this is an external page link
            if (href.includes('.html')) {
                console.log('Loading external page:', href);
                window.location.href = href;
                return;
            }
            
            const sectionId = href.substring(1);
            console.log('Clicked section:', sectionId);
            
            // Handle submenu items
            if (this.closest('.submenu')) {
                // For submenu items, we'll just show the introduction section
                switchSection('introduction');
                
                // Update URL without triggering navigation
                history.pushState(null, '', '#introduction');
            } else {
                // For main menu items, switch to the corresponding section
                switchSection(sectionId);
                
                // Update URL without triggering navigation
                history.pushState(null, '', '#' + sectionId);
            }
        });
    });
}

// Call loadNavigation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    console.log('Current pathname:', window.location.pathname);
    
    // Load navigation if we're on a section page
    if (window.location.pathname.includes('sections/')) {
        console.log('Detected section page, loading navigation');
        loadNavigation();
    } else {
        console.log('Not a section page, skipping navigation load');
    }
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    console.log('Found navigation links on main page:', navLinks.length);
    
    const sections = document.querySelectorAll('.section');
    console.log('Found sections on main page:', sections.length);
    
    // Function to switch sections
    function switchSection(sectionId) {
        console.log('Switching to section:', sectionId);
        
        // Check if this is an external page link
        if (sectionId.includes('.html')) {
            console.log('Loading external page:', sectionId);
            window.location.href = sectionId;
            return;
        }
        
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
        
        // Update active state in navigation
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            console.log('Clicked link:', href);
            
            // Check if this is an external page link
            if (href.includes('.html')) {
                console.log('Loading external page:', href);
                window.location.href = href;
                return;
            }
            
            const sectionId = href.substring(1);
            console.log('Clicked section:', sectionId);
            
            // Handle submenu items
            if (this.closest('.submenu')) {
                // For submenu items, we'll just show the introduction section
                switchSection('introduction');
                
                // Update URL without triggering navigation
                history.pushState(null, '', '#introduction');
            } else {
                // For main menu items, switch to the corresponding section
                switchSection(sectionId);
                
                // Update URL without triggering navigation
                history.pushState(null, '', '#' + sectionId);
            }
        });
    });
    
    // Handle initial load and browser navigation
    function handleHashChange() {
        const hash = window.location.hash.substring(1) || 'introduction';
        switchSection(hash);
    }
    
    // Handle browser back/forward buttons
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial page load
    handleHashChange();
});

// Function to load section content
async function loadSectionContent(sectionId) {
    console.log('Loading section:', sectionId);
    const section = document.getElementById(sectionId);
    if (!section) {
        console.error('Section not found:', sectionId);
        return;
    }

    // Check if this is an external page link
    if (sectionId.includes('.html')) {
        console.log('Loading external page:', sectionId);
        window.location.href = sectionId;
        return;
    }

    try {
        console.log('Fetching content from:', `sections/${sectionId}.html`);
        const response = await fetch(`sections/${sectionId}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        section.innerHTML = content;
        console.log('Content loaded successfully');
    } catch (error) {
        console.error('Error loading content:', error);
        section.innerHTML = `
            <div class="error-message">
                <h3>Error Loading Content</h3>
                <p>There was a problem loading the content for this section.</p>
                <p>Error details: ${error.message}</p>
            </div>
        `;
    }
} 