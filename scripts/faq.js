document.querySelectorAll('.faq__question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.faq__toggle');
        document.querySelectorAll('.faq__answer').forEach(item => item.classList.remove('active'));
        
        question.classList.toggle('active')
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            // toggle.textContent = '+';
            
        } else {
            document.querySelectorAll('.faq__answer').forEach(item => item.style.maxHeight = null);
            answer.classList.toggle('active')

            answer.style.maxHeight = answer.scrollHeight + 'px';
            // toggle.textContent = '×';
           
        }
    });
});