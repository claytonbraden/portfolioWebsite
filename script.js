
/* For the sidebar toggle functionality */
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const toggleBtn = document.getElementById('toggle-btn');

    
    if (sidebar && mainContent && toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            console.log("Button clicked");
            
            sidebar.classList.toggle('open');
            mainContent.classList.toggle('shifted');
        });
    }
});