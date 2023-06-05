function populateFeedbackForm(data) {
    var feedbackForm = document.getElementById("experimentFeedback");
  
    feedbackForm.question.value = data.question;
    feedbackForm.hypothesis.value = data.hypothesis;
    feedbackForm.material.value = data.material;
    feedbackForm.implementation.value = data.implementation;
    feedbackForm.observation.value = data.observation;
    feedbackForm.result.value = data.result;
}
  
var xhr = new XMLHttpRequest();
xhr.open('GET', 'url_to_server_endpoint', true);
xhr.setRequestHeader('Content-Type', 'application/json');
  
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            populateFeedbackForm(response);
        } else {
            console.error('Request failed. Status:', xhr.status);
        }
    }
};

xhr.send();