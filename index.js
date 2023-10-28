document.addEventListener("DOMContentLoaded", () => {
    const questionInput = document.getElementById('question');
    const askButton = document.getElementById('askButton');
    const loadingDiv = document.getElementById('loading');

    askButton.addEventListener('click', async () => {
        const question = questionInput.value;

        // Show loading screen while waiting for the API response
        loadingDiv.style.display = 'block';

        try {
            const apiUrl = `https://rui-api.ruinext-bots.repl.co/v1?question=%22${encodeURIComponent(question)}%22`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            const responseDiv = document.getElementById('response');
            responseDiv.innerHTML = `<strong>You:</strong> ${data.content}<br><strong>AI:</strong> ${data.reply}`;

            // Hide loading screen after receiving the response
            loadingDiv.style.display = 'none';

            // Clear the input field after getting the response
            questionInput.value = '';
        } catch (error) {
            console.error(error);
            alert('Error fetching data from the API.');

            // Hide loading screen in case of an error
            loadingDiv.style.display = 'none';
        }
    });
});
