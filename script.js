/* ==========================================
   Portfolio Data Structure
   ========================================== */

// Main data structure for subjects and assignments
// Edit titles, descriptions, and URLs here to customize your portfolio
const portfolioData = [
    {
        id: 1,
        title: "Elements and Principles of Design",
        description: "Visual composition, design fundamentals, and artistic expression",
        icon: "🎨",
        files: [
            {
                id: 1,
                icon: "🖊️",
                title: "Alcohol-Based Marker Compositions",
                type: "Presentation",
                description: "A collection of unique compositions exploring color theory, balance, and visual hierarchy",
                link: "#"
            },
            {
                id: 2,
                icon: "💷",
                title: "Currency Notes",
                type: "Presentation",
                description: "Hand-Drawn Sketch of a Currency Note incorporating design elements and principles",
                link: "#"
            }
        ]
    },
    {
        id: 2,
        title: "Design Thinking Methods",
        description: "Human-centered design approach and problem-solving methodologies",
        icon: "💡",
        files: [
            {
                id: 1,icon: "🎧",
                title: "Product Redesign for a Friend",
                type: "Presentation",
                description: "Applying design thinking to redesign a product based on user needs and empathy",
                link: "https://www.canva.com/design/DAG6bLF8MTY/xy3ENbvRgxtmH6AvKlyf0Q/view?utm_content=DAG6bLF8MTY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf3e7bb42b8"
            },
            {
                id: 2,
                title: "Wallet Redesign",
                type: "Presentation",
                icon: "👛",
                description: "Iterative design process for reimagining the everyday wallet experience",
                link: "https://www.canva.com/design/DAG6bDKs4es/WyR7wKsY8X4Tc5iPmdGkCg/view?utm_content=DAG6bDKs4es&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb35b08141a"
            }
        ]
    },
    {
        id: 3,
        title: "Digital Interface & Visualisation 1",
        description: "UI/UX design, wireframing, and digital prototyping",
        icon: "📱",
        files: [
            {
                id: 1,icon: "📃",
                title: "Paper Wireframes of My Favorite Application",
                type: "Presentation",
                description: "Low-fidelity wireframes exploring the structure and flow of a favorite mobile application",
                link: "#"
            },
            {
                id: 2,
                title: "Redesigning the Chosen Application on Figma",
                type: "Figma Link",
                iconImage: "figma.png",
                description: "High-fidelity redesign and interactive prototype of the analyzed application",
                link: "#"
            }
        ]
    },
    {
        id: 4,
        title: "Materials and Processes",
        description: "Exploration of materials, fabrication techniques, and physical prototyping",
        icon: "🔨",
        files: [
            {
                id: 1,
                title: "WOOD",
                type: "PDF Document",
                icon: "🪵",
                description: "Wood material exploration, properties, and fabrication processes",
                link: "https://www.canva.com/design/DAG6KuGxUuI/r_T9xmtR3-aXrAFUkelp4A/view?utm_content=DAG6KuGxUuI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h37f024cb7d"
            },
            {
                id: 2,
                title: "METAL",
                type: "PDF Document",
                icon: "⚙️",
                description: "Metal material exploration, properties, and fabrication processes",
                link: "https://www.canva.com/design/DAG6K3Vr_BI/IkDZE083BglEA0sPv5JxUQ/view?utm_content=DAG6K3Vr_BI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h816e448e1a"
            },
            {
                id: 3,
                title: "PLASTIC",
                type: "PDF Document",
                icon: "🧴",
                description: "Plastic material exploration, properties, and fabrication processes",
                link: "https://www.canva.com/design/DAG3Az0ZnUA/v2N_7zFyHBLfCPuxpgx3Bg/view?utm_content=DAG3Az0ZnUA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he4c0aff66c"
            }
        ]
    },
    {
        id: 5,
        title: "Interaction Fundamentals",
        description: "Core principles of interaction design and user experience",
        icon: "🖱️",
        files: [
            {
                id: 1,
                title: "Interaction Diary",
                type: "Presentation",
                icon: "📔",
                description: "Documentation and analysis of daily interactions with products and interfaces",
                link: "https://www.canva.com/design/DAG6QB24aoc/AXovR6SmriUvnhOU98r2sQ/view?utm_content=DAG6QB24aoc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h166cde41b4"
            },
            {
                id: 2,
                title: "Accessibility in Design",
                type: "Presentation",
                description: "Research and exploration of inclusive design practices and accessibility standards",
                link: "#"
            },
            {
                id: 3,
                title: "Shikake",
                type: "Presentation",
                icon: "🏯",
                description: "Study of Japanese concept of behavioral triggers and nudge design in everyday interactions",
                link: "#"
            },
            {
                id: 4,
                title: "Research",
                type: "Presentation",
                icon: "🔎",
                description: "User research methodologies and findings for interaction design project",
                link: "#"
            },
            {
                id: 5,
                title: "Interaction Audit",
                type: "Presentation",
                description: "Comprehensive audit of existing product interactions and usability evaluation",
                link: "#"
            },
            {
                id: 6,
                title: "Chess Redesign",
                type: "Chess Presentation",
                description: "Final interaction redesign proposal based on research and audit insights",
                link: "https://www.canva.com/design/DAG6bYWJM8c/4-uVjpkiYthn6gHh0ghEOw/view?utm_content=DAG6bYWJM8c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9cb498c8b6"
            }
        ]
    },
    {
        id: 6,
        title: "Programming 1",
        description: "Introductory programming assignments using Scratch, p5.js, and VS Code",
        icon: "💻",
        files: [
            {
                id: 1,
                title: "Scratch Project",
                type: "Scratch",
                iconImage: "scratch.png",
                description: "Visual programming project built with Scratch block-based coding platform",
                link: "https://scratch.mit.edu/projects/1250913235",
                embedUrl: "https://scratch.mit.edu/projects/1250913235/embed"
            },
            {
                id: 2,
                title: "p5.js Sketches",
                type: "p5.js",
                description: "Creative coding sketches using the p5.js JavaScript library",
                link: "https://openprocessing.org/user/566268#sketches"
            },
            {
                id: 3,
                title: "VS Code Projects",
                type: "VS Code",
                iconImage: "vscode.webp",
                description: "Programming projects developed in Visual Studio Code",
                link: "https://devgghya.github.io/LuxeRide/"
            }
        ]
    },
    {
        id: 7,
        title: "Visualization & Representation",
        description: "Visual communication, data visualization, and representation techniques",
        icon: "📊",
        files: [
            {
                id: 1,
                title: "Everyday Object Reimagined Sketchbook",
                type: "Presentation",
                description: "Due 29th Aug — Everyday Object Reimagined sketchbook submission (for those pending).",
                link: "#"
            },
            {
                id: 2,
                title: "Ancient Indian Coin Design",
                icon: "🪙",
                type: "Presentation",
                description: "3 Final Designs of Ancient Indian Coin.",
                link: "https://www.canva.com/design/DAG6h1_pq_4/ovA107pzDUDyvjBE0NNcPw/view?utm_content=DAG6h1_pq_4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbfcd9cdd3c"
            },
            {
                id: 3,
                title: "Everyday Problem Ideation",
                type: "Presentation",
                description: "Due 31st Aug — Presentation on 31st Aug.",
                link: "#"
            }
        ]
    }
];

/* ==========================================
   DOM Elements
   ========================================== */

const folderGrid = document.getElementById('folderGrid');
const searchInput = document.getElementById('searchInput');
const backToTopButton = document.getElementById('backToTop');
const modalOverlay = document.getElementById('modalOverlay');
const subjectModal = document.getElementById('subjectModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalAssignments = document.getElementById('modalAssignments');

// Iframe modal elements
const iframeModalOverlay = document.getElementById('iframeModalOverlay');
const iframeModal = document.getElementById('iframeModal');
const iframeModalClose = document.getElementById('iframeModalClose');
const iframeModalTitle = document.getElementById('iframeModalTitle');
const iframeContainer = document.getElementById('iframeContainer');

/* ==========================================
   Render Functions
   ========================================== */

/**
 * Gets the appropriate icon for a file type
 * @param {string} type - The file type
 * @returns {string} - The emoji icon
 */
function getFileIcon(type) {
    const iconMap = {
        'Presentation': '📊',
        'Chess Presentation': '♟️',
        'PDF Document': '📄',
        'Figma Link': '🎨',
        'Video Link': '🎥',
        'Image': '🖼️',
        'Scratch': '�',
        'p5.js': '🌸',
        'VS Code': '�',
        'default': '📎'
    };
    return iconMap[type] || iconMap.default;
}

/**
 * Creates a file item element
 * @param {object} file - The file data
 * @param {number} folderId - The parent folder ID
 * @returns {HTMLElement} - The file item element
 */
function createFileItem(file, folderId) {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.setAttribute('role', 'listitem');
    
    const hasEmbed = file.embedUrl && file.embedUrl !== '#';
    const buttonText = file.type === 'Scratch' || file.type === 'p5.js' || file.type === 'VS Code' ? 'View Project' : 'View Presentation';
    const icon = file.icon || getFileIcon(file.type);
    const iconHtml = file.iconImage ? `<img src="${file.iconImage}" alt="${file.title} icon" style="width: 1.5rem; height: 1.5rem; object-fit: contain;">` : icon;
    
    fileItem.innerHTML = `
        <span class="file-icon" aria-hidden="true">${iconHtml}</span>
        <div class="file-info">
            <div class="file-title">${file.title}</div>
            <div class="file-description">${file.description}</div>
        </div>
        <a href="${file.link}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="file-link"
           aria-label="View ${file.title} - Opens in new tab">
            ${buttonText} →
        </a>
        ${hasEmbed ? `<button class="file-run-btn" data-embed-url="${file.embedUrl}" data-title="${file.title}" aria-label="Run ${file.title} embedded">▶ Run</button>` : ''}
    `;
    
    // Attach event listener to Run button if it exists
    if (hasEmbed) {
        const runBtn = fileItem.querySelector('.file-run-btn');
        runBtn.addEventListener('click', () => {
            openIframeModal(file.title, file.embedUrl);
        });
    }
    
    return fileItem;
}

/**
 * Creates a folder card element
 * @param {object} folder - The folder data
 * @returns {HTMLElement} - The folder card element
 */
function createFolderCard(folder) {
    const folderCard = document.createElement('div');
    folderCard.className = 'folder-card';
    folderCard.setAttribute('role', 'listitem');
    folderCard.setAttribute('tabindex', '0');
    folderCard.setAttribute('data-folder-id', folder.id);
    folderCard.setAttribute('data-folder-title', folder.title.toLowerCase());
    folderCard.innerHTML = `
        <div class="folder-header">
            <span class="folder-icon" aria-hidden="true">${folder.icon}</span>
            <div class="folder-info">
                <h3 class="folder-title">${folder.title}</h3>
                <p class="folder-description">${folder.description}</p>
                <span class="folder-count">${folder.files.length} ${folder.files.length === 1 ? 'item' : 'items'}</span>
            </div>
        </div>
    `;
    folderCard.addEventListener('click', () => openSubjectModal(folder));
    folderCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openSubjectModal(folder);
        }
    });
    return folderCard;
}

/**
 * Adds event listeners to a folder card
 * @param {HTMLElement} folderCard - The folder card element
 * @param {HTMLElement} folderHeader - The folder header element
 */
// Remove inline expand/collapse logic
// Modal logic
let lastFocusedCard = null;
function openSubjectModal(subject) {
    // Save last focused element for accessibility
    lastFocusedCard = document.activeElement;
    // Populate modal
    modalTitle.textContent = subject.title;
    modalDesc.textContent = subject.description;
    modalAssignments.innerHTML = '';
    subject.files.forEach(file => {
        const fileCard = document.createElement('div');
        fileCard.className = 'file-item';
        
        const hasEmbed = file.embedUrl && file.embedUrl !== '#';
        const buttonText = file.type === 'Scratch' || file.type === 'p5.js' || file.type === 'VS Code' ? 'View Project' : 'View Presentation';
        const icon = file.icon || getFileIcon(file.type);
        const iconHtml = file.iconImage ? `<img src="${file.iconImage}" alt="${file.title} icon" style="width: 1.5rem; height: 1.5rem; object-fit: contain;">` : icon;
        
        fileCard.innerHTML = `
            <span class="file-icon" aria-hidden="true">${iconHtml}</span>
            <div class="file-info">
                <div class="file-title">${file.title}</div>
                <div class="file-description">${file.description}</div>
            </div>
            <a href="${file.link}" target="_blank" rel="noopener noreferrer" class="file-link" aria-label="View ${file.title} - Opens in new tab">
                ${buttonText} →
            </a>
            ${hasEmbed ? `<button class="file-run-btn" aria-label="Run ${file.title} embedded">▶ Run</button>` : ''}
        `;
        
        // Attach Run button event if embedUrl exists
        if (hasEmbed) {
            const runBtn = fileCard.querySelector('.file-run-btn');
            runBtn.addEventListener('click', () => {
                openIframeModal(file.title, file.embedUrl);
            });
        }
        
        modalAssignments.appendChild(fileCard);
    });
    // Show modal
    modalOverlay.classList.add('is-open');
    subjectModal.classList.add('is-open');
    document.body.classList.add('modal-open');
    subjectModal.setAttribute('aria-hidden', 'false');
    modalOverlay.setAttribute('aria-hidden', 'false');
    // Focus close button
    setTimeout(() => { modalClose.focus(); }, 100);
}

function closeSubjectModal() {
    modalOverlay.classList.remove('is-open');
    subjectModal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    subjectModal.setAttribute('aria-hidden', 'true');
    modalOverlay.setAttribute('aria-hidden', 'true');
    // Return focus to last focused card
    if (lastFocusedCard) {
        lastFocusedCard.focus();
    }
}

// Iframe Modal Functions
let lastFocusBeforeIframe = null;

function openIframeModal(title, embedUrl) {
    lastFocusBeforeIframe = document.activeElement;
    
    // Set title and embed iframe
    iframeModalTitle.textContent = title;
    iframeContainer.innerHTML = `<iframe src="${embedUrl}" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
    
    // Show iframe modal
    iframeModalOverlay.classList.add('is-open');
    iframeModal.classList.add('is-open');
    document.body.classList.add('iframe-modal-open');
    iframeModal.setAttribute('aria-hidden', 'false');
    iframeModalOverlay.setAttribute('aria-hidden', 'false');
    
    // Focus close button
    setTimeout(() => { iframeModalClose.focus(); }, 100);
}

function closeIframeModal() {
    iframeModalOverlay.classList.remove('is-open');
    iframeModal.classList.remove('is-open');
    document.body.classList.remove('iframe-modal-open');
    iframeModal.setAttribute('aria-hidden', 'true');
    iframeModalOverlay.setAttribute('aria-hidden', 'true');
    
    // Clear iframe to stop playback
    iframeContainer.innerHTML = '';
    
    // Return focus
    if (lastFocusBeforeIframe) {
        lastFocusBeforeIframe.focus();
    }
}

// Iframe modal event listeners
iframeModalClose.addEventListener('click', closeIframeModal);
iframeModalOverlay.addEventListener('click', closeIframeModal);

modalClose.addEventListener('click', closeSubjectModal);
modalOverlay.addEventListener('click', closeSubjectModal);
document.addEventListener('keydown', (e) => {
    // Handle iframe modal ESC
    if (iframeModal.classList.contains('is-open') && e.key === 'Escape') {
        closeIframeModal();
        return;
    }
    
    if (subjectModal.classList.contains('is-open')) {
        if (e.key === 'Escape') {
            closeSubjectModal();
        }
        // Trap focus inside modal
        const focusable = subjectModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    }
});

/**
 * Toggles the open/closed state of a folder
 * @param {HTMLElement} folderCard - The folder card element
 * @param {HTMLElement} folderHeader - The folder header element
 */
function toggleFolder(folderCard, folderHeader) {
    const isActive = folderCard.classList.contains('active');
    
    // Close all folders first (optional: remove these lines for multi-open behavior)
    document.querySelectorAll('.folder-card.active').forEach(card => {
        if (card !== folderCard) {
            card.classList.remove('active');
            const header = card.querySelector('.folder-header');
            header.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Toggle current folder
    folderCard.classList.toggle('active');
    folderHeader.setAttribute('aria-expanded', !isActive);
}

/**
 * Renders all folders to the DOM
 * @param {Array} folders - Array of folder data
 */
function renderFolders(folders = portfolioData) {
    folderGrid.innerHTML = '';
    
    if (folders.length === 0) {
        folderGrid.innerHTML = '<div class="empty-state">No subjects found matching your search.</div>';
        return;
    }
    
    folders.forEach(folder => {
        folderGrid.appendChild(createFolderCard(folder));
    });
}

/* ==========================================
   Search Functionality
   ========================================== */

/**
 * Filters subjects based on search query
 * @param {string} query - The search query
 */
function searchFolders(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (!searchTerm) {
        renderFolders(portfolioData);
        return;
    }
    
    const filteredFolders = portfolioData.filter(folder => {
        return folder.title.toLowerCase().includes(searchTerm) ||
               folder.description.toLowerCase().includes(searchTerm);
    });
    
    renderFolders(filteredFolders);
}

// Debounce function for search input
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchFolders(e.target.value);
    }, 300);
});

/* ==========================================
   Back to Top Button
   ========================================== */

/**
 * Shows or hides the back to top button based on scroll position
 */
function handleBackToTopVisibility() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide button on scroll
window.addEventListener('scroll', handleBackToTopVisibility);

/* ==========================================
   Keyboard Navigation Enhancement
   ========================================== */

/**
 * Handles global keyboard shortcuts
 * @param {KeyboardEvent} e - The keyboard event
 */
function handleGlobalKeyboard(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchFolders('');
        searchInput.blur();
    }
}

document.addEventListener('keydown', handleGlobalKeyboard);

/* ==========================================
   Initialization
   ========================================== */

/**
 * Initializes the portfolio page
 */
function init() {
    // Render all folders
    renderFolders();
    
    // Set initial back to top button state
    handleBackToTopVisibility();
    
    // Log initialization
    console.log('Portfolio initialized with', portfolioData.length, 'subjects');
    console.log('Total assignments:', portfolioData.reduce((sum, folder) => sum + folder.files.length, 0));
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/* ==========================================
   Utility: Add New Folder Programmatically
   ========================================== */

/**
 * Adds a new subject to the portfolio
 * @param {object} folderData - The subject data to add
 * @example
 * addFolder({
 *     title: "New Subject",
 *     description: "Subject description here",
 *     icon: "📁",
 *     files: [
 *         {
 *             title: "Assignment Name",
 *             description: "Assignment description",
 *             type: "Presentation",
 *             link: "#"
 *         }
 *     ]
 * });
 */
function addFolder(folderData) {
    const newFolder = {
        id: portfolioData.length + 1,
        ...folderData
    };
    
    portfolioData.push(newFolder);
    renderFolders();
    
    console.log('Added new subject:', newFolder.title);
}

// Export for external use (if needed)
window.portfolioAPI = {
    addFolder,
    searchFolders,
    data: portfolioData
};
