// Topics Page JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // Get all topic items and topic details
    const topicItems = document.querySelectorAll('.topic-item');
    const topicDetails = document.querySelectorAll('.topic-detail');

    // Function to show a specific topic
    function showTopic(topicId) {
        // Remove active class from all items
        topicItems.forEach(i => i.classList.remove('active'));

        // Hide all topic details
        topicDetails.forEach(detail => detail.classList.remove('active'));

        // Find and activate the corresponding sidebar item
        const sidebarItem = document.querySelector(`.topic-item[data-topic="${topicId}"]`);
        if (sidebarItem) {
            sidebarItem.classList.add('active');
        }

        // Show selected topic detail
        const selectedTopic = document.getElementById(topicId);
        if (selectedTopic) {
            selectedTopic.classList.add('active');

            // Scroll to top of content
            setTimeout(() => {
                selectedTopic.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    // Handle topic item clicks
    topicItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            const topicId = this.getAttribute('data-topic');
            showTopic(topicId);

            // Update URL hash without triggering scroll
            history.pushState(null, null, `#${topicId}`);
        });
    });

    // Handle URL hash on page load
    function handleInitialHash() {
        const hash = window.location.hash.substring(1); // Remove the # character
        if (hash && document.getElementById(hash)) {
            showTopic(hash);
        }
    }

    // Check for hash in URL when page loads
    handleInitialHash();

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            showTopic(hash);
        }
    });

    console.log('Topics Page Loaded Successfully');
});
