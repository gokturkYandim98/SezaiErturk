// Topics Page JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // Get all topic items and topic details
    const topicItems = document.querySelectorAll('.topic-item');
    const topicDetails = document.querySelectorAll('.topic-detail');

    // Handle topic item clicks
    topicItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            const topicId = this.getAttribute('data-topic');

            // Remove active class from all items
            topicItems.forEach(i => i.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Hide all topic details
            topicDetails.forEach(detail => detail.classList.remove('active'));

            // Show selected topic detail
            const selectedTopic = document.getElementById(topicId);
            if (selectedTopic) {
                selectedTopic.classList.add('active');

                // Scroll to top of content on mobile
                if (window.innerWidth < 768) {
                    selectedTopic.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    console.log('Topics Page Loaded Successfully');
});
